"use client";
import styles from "./page.module.css";
import PassengerPage from "./passenger";
import SeatsPage from "./selectseats";
import { useState } from "react";
import PaymentPage from "./payment";
import ConfirmationPage from "./confirmation";
import Flights from "./flights";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const FLIGHTS_PAGE = "FLIGHTS_PAGE";
const PASSENGER_PAGE = "PASSENGER_PAGE";
const SEATS_PAGE = "SEATS_PAGE";
const PAYMENT_PAGE = "PAYMENT_PAGE";
const CONFIRMATION_PAGE = "CONFIRMATION_PAGE";

export default function FlightsPage() {
  const [currentPage, setCurrentPage] = useState(FLIGHTS_PAGE);

  return (
    <>
      {currentPage !== SEATS_PAGE && <Header />}

      {/* {currentPage === CONFIRMATION_PAGE && <ConfirmationPage />}
      {currentPage === PASSENGER_PAGE && (
        <PassengerPage
          selectedFlights={selectedFlights}
          action={() => {
            setCurrentPage(SEATS_PAGE);
          }}
        />
      )} */}
      {currentPage === FLIGHTS_PAGE && (
        <Flights
          action={() => {
            setCurrentPage(PASSENGER_PAGE);
          }}
        />
      )}
      {/* {currentPage === SEATS_PAGE && (
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
      )} */}

      {currentPage !== SEATS_PAGE && <Footer />}
    </>
  );
}
