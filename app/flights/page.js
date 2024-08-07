"use client";
import FilterComponent from "@/components/Flights/filtercontainer";
import FlightContainer from "@/components/Flights/flightscontainer";
import PriceChart from "@/components/Flights/pricechart";
import PriceGrid from "@/components/Flights/pricegrid";
// import dynamic from "next/dynamic";
// const LineChartComponent = dynamic(
//   () => import("../../components/Flights/pricechart"),
//   { ssr: false }
// );
import ApexChart from "../../components/Flights/pricechart";
import PriceRating from "@/components/Flights/pricerating";
import SelectionInputs from "@/components/Flights/selectioninputs";
import Image from "next/image";
import styles from "./page.module.css";
import FlightDeals from "@/components/HomePage/flightdeals";
export default function FlightsPage() {
  return (
    <>
      <div className={styles.outercontainer}>
        <div className={styles.searchfiltercontainer}>
          <SelectionInputs></SelectionInputs>
          <FilterComponent></FilterComponent>
        </div>
        <div className={styles.flightpricesinfo}>
          <div className={styles.flightsinfo}>
            <FlightContainer></FlightContainer>
            <div className={styles.imagecontainer}>
              <Image src="./Map.svg" alt="Map" width={872} height={171}></Image>
            </div>
          </div>
          <div className={styles.pricesinfo}>
            <PriceGrid></PriceGrid>
            <PriceChart></PriceChart>
            <PriceRating></PriceRating>
          </div>
        </div>
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
        {/* <FlightContainer></FlightContainer>
        <FilterComponent></FilterComponent> */}
        {/* <PriceGrid></PriceGrid> */}
        {/* <ApexChart /> */}
        {/* <PriceRating></PriceRating> */}
      </div>
    </>
  );
}
