"use client";
import PassengerPage from "./passenger";
import SeatsPage from "./selectseats";
import { useState, useEffect } from "react";
import PaymentPage from "./payment";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { useRouter } from "next/navigation";

const PASSENGER_PAGE = "PASSENGER_PAGE";
const SEATS_PAGE = "SEATS_PAGE";
const PAYMENT_PAGE = "PAYMENT_PAGE";

export default function BookingPage() {
  const router = useRouter();

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

  const [formPaymentInfo, setFormPaymentInfo] = useState({
    cardname: "",
    cardnumber: "",
    expiredate: "",
    ccvnumber: "",
  });
  const [departingSeat, setDepartingSeat] = useState(null);
  const [arrivingSeat, setArrivingSeat] = useState(null);
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

  async function flightBooking() {
    try {
      const requestData = {
        userId: null,
        departingFlightId: "0089b898-88d4-4e9e-ac26-e1c929279077",
        // returningFlightId: "06b2a838-325f-42d3-8f76-f537f5ac32d1", // Optional
        departingSeat: "B17",
        // arrivingSeat: "D14", // Optional
        passengerInfo: {
          firstName: formPassengerInfo.firstname,
          middleName: formPassengerInfo.middle || null,
          lastName: formPassengerInfo.lastname,
          suffix: formPassengerInfo.suffix || null,
          dateOfBirth: formPassengerInfo.birthDate,
          email: formPassengerInfo.email,
          phone: formPassengerInfo.phonenumber,
          redressNumber: formPassengerInfo.redressnumber || null,
          knownTravelerNumber: formPassengerInfo.travellernumber,
          checkedBags: formPassengerInfo.checkedBags,
        },
        paymentInfo: {
          paymentType: "Visa",
          nameOnCard: formPaymentInfo.cardname,
          cardNumber: formPaymentInfo.cardnumber,
          ccv: formPaymentInfo.ccvnumber,
          expireDate: formPaymentInfo.expiredate,
        },
      };
      console.log(requestData);

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(`${result.error}`);
      }
      localStorage.setItem("bookingInfo", JSON.stringify(result));
      console.log("Booking confirmed:", result);
      router.push("/successbooking");
    } catch (error) {
      console.error("Error confirming booking:", error);
    }
  }

  return (
    <>
      {currentPage !== SEATS_PAGE && <Header />}
      {currentPage === PASSENGER_PAGE && (
        <PassengerPage
          selectedFlights={selectedFlights}
          formPassengerInfo={formPassengerInfo}
          setFormPassengerInfo={setFormPassengerInfo}
          isSameAsPassenger={isSameAsPassenger}
          setIsSameAsPassenger={setIsSameAsPassenger}
          action={() => setCurrentPage(SEATS_PAGE)}
        />
      )}
      {currentPage === SEATS_PAGE && (
        <SeatsPage
          action={() => setCurrentPage(PAYMENT_PAGE)}
          selectedFlights={selectedFlights}
          passengerName={`${formPassengerInfo.firstname} ${formPassengerInfo.lastname}`}
          setDepartingSeat={setDepartingSeat}
          setArrivingSeat={setArrivingSeat}
          arrivingSeat={arrivingSeat}
          departingSeat={departingSeat}
        />
      )}
      {currentPage === PAYMENT_PAGE && (
        <PaymentPage
          selectedFlights={selectedFlights}
          action={flightBooking}
          setFormPaymentInfo={setFormPaymentInfo}
          formPaymentInfo={formPaymentInfo}
        />
      )}
      {currentPage !== SEATS_PAGE && <Footer />}
    </>
  );
}
