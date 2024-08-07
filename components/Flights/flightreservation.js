import React, { useState } from "react";
import FlightContainer from "@/components/Flights/flightscontainer";
import PriceChart from "@/components/Flights/pricechart";
import PriceGrid from "@/components/Flights/pricegrid";
import PriceRating from "@/components/Flights/pricerating";
import Reservation from "@/components/Flights/reservation";
import Image from "next/image";
import styles from "./flightreservation.module.css";

export default function FlightReservation() {
  const [selectedFlights, setSelectedFlights] = useState([]);

  const handleSelectFlight = (flight) => {
    console.log("das");
    setSelectedFlights((prevSelectedFlights) => {
      if (prevSelectedFlights.length >= 2) {
        return prevSelectedFlights;
      }
      return [...prevSelectedFlights, flight];
    });
  };
  return (
    <div className={styles.flightpricesinfo}>
      <div className={styles.flightsinfo}>
        <FlightContainer onSelectFlight={handleSelectFlight} />
        <div className={styles.imagecontainer}>
          <Image src="./Map.svg" alt="Map" width={872} height={171} />
        </div>
      </div>
      <div className={styles.pricesinfo}>
        {selectedFlights.length === 0 ? (
          <>
            <PriceGrid />
            <PriceChart />
            <PriceRating />
          </>
        ) : (
          <Reservation flights={selectedFlights} />
        )}
      </div>
    </div>
  );
}
