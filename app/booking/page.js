"use client";
import PassengerPage from "./passenger";
import SeatsPage from "./selectseats";
import { useState, useEffect } from "react";
import PaymentPage from "./payment";
import ConfirmationPage from "./confirmation";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const PASSENGER_PAGE = "PASSENGER_PAGE";
const SEATS_PAGE = "SEATS_PAGE";
const PAYMENT_PAGE = "PAYMENT_PAGE";
const CONFIRMATION_PAGE = "CONFIRMATION_PAGE";

export default function BookingPage() {
  const [currentPage, setCurrentPage] = useState(PASSENGER_PAGE);
  const [selectedFlights, setSelectedFlights] = useState([]);
  const [formPassengerInfo, setFormPassengerInfo] = useState({
    firstname: "",
    middle: "",
    lastname: "",
    suffix: "",
    birthDate: "",
    email: "",
    phonenumber: "",
    redressnumber: "",
    travellernumber: "",
    emergencyfirstname: "",
    emergencylastname: "",
    emergencyemail: "",
    emergencyphonenumber: "",
    checkedBags: 0,
  });
  const [isSameAsPassenger, setIsSameAsPassenger] = useState(false);

  useEffect(() => {
    const departingFlight = localStorage.getItem("departingFlight");
    const arrivingFlight = localStorage.getItem("arrivingFlight");

    const flights = [];
    if (departingFlight) {
      flights.push(JSON.parse(departingFlight));
    }
    if (arrivingFlight) {
      flights.push(JSON.parse(arrivingFlight));
    }
    setSelectedFlights(flights);
  }, []);

  return (
    <>
      {currentPage !== SEATS_PAGE && <Header />}
      {currentPage === CONFIRMATION_PAGE && <ConfirmationPage />}
      {currentPage === PASSENGER_PAGE && (
        <PassengerPage
          selectedFlights={selectedFlights}
          formPassengerInfo={formPassengerInfo}
          setFormPassengerInfo={setFormPassengerInfo}
          isSameAsPassenger={isSameAsPassenger}
          setIsSameAsPassenger={setIsSameAsPassenger}
          action={() => {
            setCurrentPage(SEATS_PAGE);
          }}
        />
      )}
      {currentPage === SEATS_PAGE && (
        <SeatsPage
          action={() => {
            setCurrentPage(PAYMENT_PAGE);
          }}
          selectedFlights={selectedFlights}
          passengerName={`${formPassengerInfo.firstname} ${formPassengerInfo.lastname}`}
        />
      )}
      {currentPage === PAYMENT_PAGE && (
        <PaymentPage
          selectedFlights={selectedFlights}
          formPassengerInfo={formPassengerInfo}
          action={() => {
            setCurrentPage(CONFIRMATION_PAGE);
          }}
        />
      )}

      {currentPage !== SEATS_PAGE && <Footer />}
    </>
  );
}
