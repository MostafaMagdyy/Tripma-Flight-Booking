"use client";
import FilterComponent from "@/components/Flights/filtercontainer";
import SelectionInputs from "@/components/Flights/selectioninputs";
import styles from "./page.module.css";
import FlightDeals from "@/components/HomePage/flightdeals";
import FlightReservation from "@/components/Flights/flightreservation";
import PassengerPage from "./passenger";
import SeatsPage from "./selectseats";
import { useState } from "react";
import PaymentPage from "./payment";

const FLIGHTS_PAGE = "FLIGHTS_PAGE";
const PASSENGER_PAGE = "PASSENGER_PAGE";
const SEATS_PAGE = "SEATS_PAGE";
const PAYMENT_PAGE = "PAYMENT_PAGE";
const CONFIRMATION_PAGE = "CONFIRMATION_PAGE";

export default function FlightsPage() {
  const [currentPage, setCurrentPage] = useState(FLIGHTS_PAGE);
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
      {currentPage === PASSENGER_PAGE && (
        <PassengerPage
          selectedFlights={selectedFlights}
          action={() => {
            setCurrentPage(SEATS_PAGE);
          }}
        />
      )}
      {currentPage === FLIGHTS_PAGE && (
        <div className={styles.outercontainer}>
          <div className={styles.searchfiltercontainer}>
            <SelectionInputs />
            <FilterComponent />
          </div>
          <FlightReservation
            action={() => {
              setCurrentPage(PASSENGER_PAGE);
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
      {currentPage === SEATS_PAGE && (
        <SeatsPage
          action={() => {
            setCurrentPage(PAYMENT_PAGE);
          }}
        />
      )}
      {currentPage === PAYMENT_PAGE && (
        <PaymentPage
          selectedFlights={selectedFlights}
          action={() => {
            setCurrentPage(CONFIRMATION_PAGE);
          }}
        />
      )}
    </>
  );
}
