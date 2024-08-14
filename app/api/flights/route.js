import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const fromCity = searchParams.get("fromCity");
    const toCity = searchParams.get("toCity");
    const date = searchParams.get("startDate");
    const endDate = searchParams.get("endDate"); // Added for arriving flights
    const adults = parseInt(searchParams.get("adults") || "0");
    const minors = parseInt(searchParams.get("minors") || "0");
    const type = searchParams.get("type") === "true";

    const totalPassengers = adults + minors;
    const dateObj = new Date(date);
    const endDateObj = new Date(endDate);

    let departingFlightsQuery = {
      where: {
        fromCity: fromCity,
        toCity: toCity,
        type: type,
        Date: {
          gte: dateObj,
          lt: new Date(dateObj.getTime() + 24 * 60 * 60 * 1000), // Next day
        },
        // Seats: {
        //   some: {
        //     available: true,
        //   },
        // },
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

    departingFlights = departingFlights.filter(
      (flight) => flight.Seats.length >= 0
    );

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
      availableSeats: flight.Seats.length,
      stopsNumber: flight.numberofStops,
      stopsInfo: flight.stopsInfo,
    }));

    let arrivingFlights = [];
    if (type) {
      let arrivingFlightsQuery = {
        where: {
          fromCity: toCity, // Reverse cities
          toCity: fromCity,
          type: type,
          Date: {
            gte: endDateObj,
            lt: new Date(endDateObj.getTime() + 24 * 60 * 60 * 1000), // Next day
          },
          // Seats: {
          //   some: {
          //     available: true,
          //   },
          // },
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

      arrivingFlights = arrivingFlights.filter(
        (flight) => flight.Seats.length >= 0
      );

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
        availableSeats: flight.Seats.length,
        stopsNumber: flight.numberofStops,
        stopsInfo: flight.stopsInfo,
      }));
    }

    console.log({
      departingFlights: formattedDepartingFlights,
      arrivingFlights,
    });
    return NextResponse.json({
      departingFlights: formattedDepartingFlights,
      arrivingFlights,
    });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
