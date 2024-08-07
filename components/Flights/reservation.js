import React from "react";
import SelectedFlight from "./selectedflight";
import Prices from "./prices";
import CustomButton from "../HomePage/button";
import styles from "./reservation.module.css";

export default function Reservation({ flights }) {
  const calculateSubtotal = () => {
    return flights.reduce((acc, flight) => acc + flight.price, 0);
  };

  const calculateTaxes = () => {
    return calculateSubtotal() * 0.1;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxes();
  };

  return (
    <div className={styles.reservationContainer}>
      <div className={styles.flightspricecontainer}>
        {flights.map((flight, index) => (
          <SelectedFlight key={index} flight={flight} />
        ))}
        <Prices
          subtotal={calculateSubtotal()}
          taxes={calculateTaxes()}
          total={calculateTotal()}
        />
      </div>
      <div className={styles.reservebutton}>
        {flights.length === 1 ? (
          <CustomButton
            text="Save and Close"
            backgroundcolor="white"
            color="#605DEC
"
            border="1px solid #605DEC"
          />
        ) : flights.length === 2 ? (
          <CustomButton text="Passenger Inforamtion" />
        ) : null}
      </div>
    </div>
  );
}
