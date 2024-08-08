"use client";
import FilterComponent from "@/components/Flights/filtercontainer";
import FlightContainer from "@/components/Flights/flightscontainer";
import PriceChart from "@/components/Flights/pricechart";
import PriceGrid from "@/components/Flights/pricegrid";
import PriceRating from "@/components/Flights/pricerating";
import SelectionInputs from "@/components/Flights/selectioninputs";
import Image from "next/image";
import styles from "./page.module.css";
import FlightDeals from "@/components/HomePage/flightdeals";
import FlightReservation from "@/components/Flights/flightreservation";
import PassengerPage from "./passenger";
export default function FlightsPage() {
  return (
    <>
      <PassengerPage></PassengerPage>
      {/* <div className={styles.outercontainer}>
        <div className={styles.searchfiltercontainer}>
          <SelectionInputs></SelectionInputs>
          <FilterComponent></FilterComponent>
        </div>
        <FlightReservation></FlightReservation>
        <FlightDeals
          showfull={false}
          description={"Find your next adventure with these"}
          type={"flight deals"}
        ></FlightDeals>
        <FlightDeals
          showfull={false}
          description={"People in"}
          type={"San Francisco"}
        ></FlightDeals>
      </div> */}
    </>
  );
}
