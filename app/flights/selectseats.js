import React from "react";
import styles from "./selectseats.module.css";
import SeatClass from "@/components/Seats/seatclass";
import SeatDetails from "@/components/Seats/seatdetails";
import ProgressStepHeader from "@/components/Seats/prograssheader";
const SeatsPage = () => {
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
    "Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service.";
  const businessDescription =
    "Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service.";

  return (
    <>
      <ProgressStepHeader Step={1}></ProgressStepHeader>
      <div className={styles.container}>
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
      <div>
        <SeatDetails
          passengerNumber={1}
          passengerName={"Sofia Knowles"}
          seatNumber={"9F"}
        ></SeatDetails>
      </div>
    </>
  );
};

export default SeatsPage;
