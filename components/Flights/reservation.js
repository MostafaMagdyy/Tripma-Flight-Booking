import React from "react";
import SelectedFlight from "./selectedflight";
import Prices from "./prices";
import CustomButton from "../HomePage/button";
import styles from "./reservation.module.css";
export const dummyFlights = [
  {
    price: "$350",
    duration: "10h 20m",
    fromto: "8:00AM - 6:20PM",
    numofstops: "1 stop",
    airport: "Delta Airlines",
    stopinfo: "1h 30m in ATL",
    triptype: "one-way",
    image: "flight.svg",
  },
  {
    price: "$450",
    duration: "12h 15m",
    fromto: "9:00AM - 9:15PM",
    numofstops: "2 stops",
    airport: "United Airlines",
    stopinfo: "2h 15m in ORD",
    triptype: "round trip",
    image: "flight.svg",
  },
];
export default function Reservation({ flights, type = "Flights", isValid }) {
  const calculateSubtotal = () => {
    return dummyFlights.reduce((acc, flight) => acc + flight.price, 0);
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
        {dummyFlights.map((flight, index) => (
          <SelectedFlight key={index} flight={flight} />
        ))}
        <Prices
          subtotal={calculateSubtotal()}
          taxes={calculateTaxes()}
          total={calculateTotal()}
        />
      </div>
      <div className={styles.reservebutton}>
        {type === "Flights" && dummyFlights.length === 1 ? (
          <CustomButton
            text="Save and Close"
            backgroundcolor="white"
            color="#605DEC
"
            border="1px solid #605DEC"
          />
        ) : type === "Flights" && dummyFlights.length === 2 ? (
          <CustomButton text="Passenger Inforamtion" />
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
