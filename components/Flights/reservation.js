import React from "react";
import SelectedFlight from "./selectedflight";
import Prices from "./prices";
import CustomButton from "../HomePage/button";
import styles from "./reservation.module.css";

export default function Reservation({
  flights,
  type = "Flights",
  isValid,
  action,
}) {
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
        {type === "Flights" && flights.length === 1 ? (
          <CustomButton
            text="Save and Close"
            backgroundcolor="white"
            color="#605DEC
"
            border="1px solid #605DEC"
          />
        ) : type === "Flights" && flights.length === 2 ? (
          <CustomButton text="Passenger Inforamtion" action={action} />
        ) : (
          <CustomButton
            text="Select seats"
            backgroundcolor={isValid ? "#605dec" : "rgba(203, 212, 230, 0.3)"}
            color={isValid ? "#fafafa" : "#7C8DB0"}
            border={isValid ? "none" : "1px solid #7C8DB0"}
          />
        )}
      </div>
    </div>
  );
}
