import React, { useState, useEffect } from "react";
import styles from "./selectseats.module.css";
import SeatClass from "@/components/Seats/seatclass";
import SeatDetails from "@/components/Seats/seatdetails";
import ProgressStepHeader from "@/components/Seats/prograssheader";
import Image from "next/image";
import Seats from "@/components/Seats/seats";

const economyBenefits = [
  "Built-in entertainment system",
  "Complimentary snacks and drinks",
  "One free carry-on and personal item",
];

const businessBenefits = [
  "Extended leg room",
  "First two checked bags free",
  "Priority boarding",
  "Personalized service",
  "Enhanced food and drink service",
  "Seats that recline 40% more than economy",
];

const economyDescription =
  "Enjoy comfort and entertainment with our economy class, featuring complimentary snacks and drinks.";
const businessDescription =
  "Experience luxury and personalized service with our business class, offering enhanced food and drink service.";

const SeatsPage = ({
  action,
  selectedFlights,
  passengerName,
  setDepartingSeat,
  setArrivingSeat,
  arrivingSeat,
  departingSeat,
}) => {
  const [economySeats, setEconomySeats] = useState([]);
  const [businessSeats, setBusinessSeats] = useState([]);
  const [fetchArriving, setFetchArriving] = useState(false);
  const [error, setError] = useState(null);

  const seatNumber = fetchArriving ? arrivingSeat : departingSeat;

  const Id1 = "000ffbc3-1427-44a4-a857-ca43c99b329c"; // Departing flight ID
  const Id2 = "0211e12e-c658-444e-bf58-b8d48af56200"; // Arriving flight ID

  useEffect(() => {
    async function fetchSeats(Id) {
      try {
        const response = await fetch(`/api/seats/${Id}`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(`${data.error}`);
        }
        setEconomySeats(data.economySeats);
        setBusinessSeats(data.businessSeats);
      } catch (error) {
        console.error("Error fetching seats:", error);
        setError(error.message);
      }
    }

    if (fetchArriving) {
      if (selectedFlights.length > 1) fetchSeats(Id2);
    } else if (selectedFlights[0]?.flightId) {
      fetchSeats(Id1);
    }
  }, [selectedFlights, fetchArriving]);

  const onSeatClick = (seatNumber) => {
    if (fetchArriving) {
      setArrivingSeat(seatNumber);
    } else {
      setDepartingSeat(seatNumber);
    }
  };

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.outercontainer}>
      <div className={styles.planecontainer}>
        <Image src={"/plane.svg"} alt="plane" layout="fill" objectFit="cover" />
        <Seats
          selectedSeat={fetchArriving ? arrivingSeat : departingSeat}
          onSeatClick={onSeatClick}
          economySeats={economySeats}
          businessSeats={businessSeats}
        />
      </div>
      <div className={styles.bodycontainer}>
        <ProgressStepHeader Step={1} />
        <div className={styles.seatstype}>
          <SeatClass
            classType="Economy"
            description={economyDescription}
            benefits={economyBenefits}
          />
          <SeatClass
            classType="Business Class"
            description={businessDescription}
            benefits={businessBenefits}
          />
        </div>
        <SeatDetails
          passengerNumber={1}
          passengerName={passengerName}
          seatNumber={seatNumber}
          action={action}
          selectedFlights={selectedFlights}
          setFetchArriving={setFetchArriving}
          fetchArriving={fetchArriving}
        />
      </div>
    </div>
  );
};

export default SeatsPage;
