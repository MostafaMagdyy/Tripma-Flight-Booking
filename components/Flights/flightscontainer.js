import CustomButton from "../HomePage/button";
import styles from "./flightcontainer.module.css";
import FlightItem from "./flightitem";
export default function FlightContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.headercontainer}>
        <h4>
          Choose a <span>departing</span> flight
        </h4>
      </div>
      <div className={styles.flightscontainer}>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
        <FlightItem></FlightItem>
      </div>
      <div className={styles.buttoncontainer}>
        <CustomButton
          text="Show all flights"
          padding={{
            top: 12,
            down: 12,
            left: 20,
            right: 20,
          }}
          backgroundcolor="white"
          color="#605DEC"
          border="1px solid #605DEC"
        ></CustomButton>
      </div>
    </div>
  );
}
