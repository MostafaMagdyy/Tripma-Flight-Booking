import React from "react";
import styles from "./confirmation.module.css";
import ConfirmationMessage from "@/components/Confirmation/message";
import FlightSummary from "@/components/Confirmation/flightsummary";
import PriceBreakdown from "@/components/Confirmation/pricebreakdown";
import PaymentMethodConfirmation from "@/components/Confirmation/paymentmethod";
import ShareItinerary from "@/components/Confirmation/shareitinerary";
import Image from "next/image";
import PlaceSuggestion from "@/components/Confirmation/placesugguesstion";
export default function ConfirmationPage() {
  return (
    <div className={styles.outercontainer}>
      <div className={styles.leftcontainer}>
        <ConfirmationMessage></ConfirmationMessage>
        <FlightSummary></FlightSummary>
        <PriceBreakdown></PriceBreakdown>
        <PaymentMethodConfirmation></PaymentMethodConfirmation>
        <ShareItinerary></ShareItinerary>
        <div className={styles.route}>
          <h3>Flight Route</h3>
          <div className={styles.routeimage}>
            <Image
              src="./confirmationmap.svg"
              alt="route icon"
              width={756}
              height={400}
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.rightcontainer}>
        <PlaceSuggestion></PlaceSuggestion>
      </div>
    </div>
  );
}
