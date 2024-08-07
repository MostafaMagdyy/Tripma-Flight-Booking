import React from "react";
import PropTypes from "prop-types";
import CustomButton from "../HomePage/button";
import styles from "./flightcontainer.module.css";
import FlightItem from "./flightitem";

export default function FlightContainer({ onSelectFlight }) {
  const flights = Array.from({ length: 10 }, (_, index) => ({
    id: `${index + 1}`,
    price: (index + 1) * 100,
  }));

  return (
    <div className={styles.container}>
      <div className={styles.headercontainer}>
        <h4>
          Choose a <span>departing</span> flight
        </h4>
      </div>
      <div className={styles.flightscontainer}>
        {flights.map((flight) => (
          <FlightItem
            key={flight.id}
            flight={flight}
            onSelectFlight={onSelectFlight}
          />
        ))}
      </div>
      <div className={styles.buttoncontainer}>
        <CustomButton
          text="Show all flights"
          padding={{
            top: 12,
            down: 12,
            left: 20,
            right: 20,
          }}
          backgroundcolor="white"
          color="#605DEC"
          border="1px solid #605DEC"
        />
      </div>
    </div>
  );
}
