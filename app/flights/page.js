"use client";
import FilterComponent from "@/components/Flights/filtercontainer";
import FlightContainer from "@/components/Flights/flightscontainer";
import PriceChart from "@/components/Flights/pricechart";
import PriceGrid from "@/components/Flights/pricegrid";
import PriceRating from "@/components/Flights/pricerating";
import SelectionInputs from "@/components/Flights/selectioninputs";
import Image from "next/image";
import styles from "./page.module.css";
import FlightDeals from "@/components/HomePage/flightdeals";
import FlightReservation from "@/components/Flights/flightreservation";
import PassengerPage from "./passenger";
import SeatsPage from "./selectseats";
import { useState } from "react";
import PaymentPage from "./payment";
export default function FlightsPage() {
  const [showPassengerPage, setshowPassengerPage] = useState(false);
  const [selectedFlights, setSelectedFlights] = useState([]);

  const handleSelectFlight = (flight) => {
    setSelectedFlights((prevSelectedFlights) => {
      if (prevSelectedFlights.length >= 2) {
        return prevSelectedFlights;
      }
      return [...prevSelectedFlights, flight];
    });
  };
  return (
    <>
      {/* <PaymentPage></PaymentPage> */}
      {showPassengerPage ? (
        <PassengerPage selectedFlights={selectedFlights} />
      ) : (
        <div className={styles.outercontainer}>
          <div className={styles.searchfiltercontainer}>
            <SelectionInputs />
            <FilterComponent />
          </div>
          <FlightReservation
            action={() => {
              setshowPassengerPage(true);
            }}
            selectedFlights={selectedFlights}
            handleSelectFlight={handleSelectFlight}
          />
          <FlightDeals
            showfull={false}
            description={"Find your next adventure with these"}
            type={"flight deals"}
          />
          <FlightDeals
            showfull={false}
            description={"People in"}
            type={"San Francisco"}
          />
        </div>
      )}
    </>
  );
}
