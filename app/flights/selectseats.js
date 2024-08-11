import React, { useState } from "react";
import styles from "./selectseats.module.css";
import SeatClass from "@/components/Seats/seatclass";
import SeatDetails from "@/components/Seats/seatdetails";
import ProgressStepHeader from "@/components/Seats/prograssheader";
import Image from "next/image";
import Seats from "@/components/Seats/seats";

const SeatsPage = ({ action }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);

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

  return (
    <div className={styles.outercontainer}>
      <div className={styles.planecontainer}>
        <Image src={"/plane.svg"} alt="plane" layout="fill" objectFit="cover" />
        <Seats selectedSeat={selectedSeat} onSeatClick={setSelectedSeat} />
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
          passengerName={"Sofia Knowles"}
          seatNumber={selectedSeat || "--"}
          action={action}
        />
      </div>
    </div>
  );
};

export default SeatsPage;
