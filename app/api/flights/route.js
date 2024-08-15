import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    console.log(searchParams);
    const fromCity = searchParams.get("fromCity");
    const toCity = searchParams.get("toCity");
    const date = searchParams.get("startDate");
    const adults = parseInt(searchParams.get("adults") || "0");
    const minors = parseInt(searchParams.get("minors") || "0");
    const type = searchParams.get("type") === "true";

    // New filter parameters
    const maxPrice = searchParams.get("maxPrice");
    const selectedAirlines = searchParams.get("selectedAirlines")?.split(",");

    const totalPassengers = adults + minors;
    const dateObj = new Date(date);

    let departingFlightsQuery = {
      where: {
        fromCity: fromCity,
        toCity: toCity,
        type: type,
        Date: {
          gte: dateObj,
          lt: new Date(dateObj.getTime() + 24 * 60 * 60 * 1000),
        },
      },
      include: {
        Seats: {
          where: {
            available: true,
          },
        },
      },
    };

    let departingFlights = await prisma.flight.findMany(departingFlightsQuery);

    const applyFilters = (flights) => {
      return flights.filter((flight) => {
        const totalPrice = flight.subtotalPrice + flight.taxesAndFees;

        return (
          (!maxPrice || totalPrice <= parseFloat(maxPrice.replace("$", ""))) &&
          (!selectedAirlines || selectedAirlines.includes(flight.airlineName))
        );
      });
    };

    departingFlights = applyFilters(departingFlights);

    const formattedDepartingFlights = departingFlights.map((flight) => ({
      flightId: flight.flightId,
      fromCity: flight.fromCity,
      toCity: flight.toCity,
      type: flight.type,
      imgPath: flight.imgPath,
      subtotalPrice: flight.subtotalPrice,
      taxesAndFees: flight.taxesAndFees,
      airlineName: flight.airlineName,
      duration: flight.duration,
      fromToTime: flight.fromToTime,
      date: flight.Date,
      availableSeats: flight.Seats ? flight.Seats.length : 0,
      stopsNumber: flight.numberofStops,
      stopsInfo: flight.stopsInfo,
    }));

    let arrivingFlights = [];
    if (type) {
      let arrivingFlightsQuery = {
        where: {
          fromCity: toCity,
          toCity: fromCity,
          type: type,
          Date: {
            gte: new Date(searchParams.get("endDate")),
            lt: new Date(
              new Date(searchParams.get("endDate")).getTime() +
                24 * 60 * 60 * 1000
            ),
          },
        },
        include: {
          Seats: {
            where: {
              available: true,
            },
          },
        },
      };

      arrivingFlights = await prisma.flight.findMany(arrivingFlightsQuery);
      arrivingFlights = applyFilters(arrivingFlights);

      arrivingFlights = arrivingFlights.map((flight) => ({
        flightId: flight.flightId,
        fromCity: flight.fromCity,
        toCity: flight.toCity,
        type: flight.type,
        imgPath: flight.imgPath,
        subtotalPrice: flight.subtotalPrice,
        taxesAndFees: flight.taxesAndFees,
        airlineName: flight.airlineName,
        duration: flight.duration,
        fromToTime: flight.fromToTime,
        date: flight.Date,
        availableSeats: flight.Seats ? flight.Seats.length : 0,
        stopsNumber: flight.numberofStops,
        stopsInfo: flight.stopsInfo,
      }));
    }

    return NextResponse.json({
      departingFlights: formattedDepartingFlights,
      arrivingFlights,
    });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
