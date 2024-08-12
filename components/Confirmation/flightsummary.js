import styles from "./flightsummary.module.css";
import FlightItem from "../Flights/flightitem";
export default function FlightSummary() {
  return (
    <div className={styles.container}>
      <h3>Flight summary</h3>
      <div className={styles.info}>
        <h4>Departing February 25th, 2021</h4>
        <FlightItem />
        <p>Seat 9F (economy, window), 1 checked bag</p>
      </div>
      <div className={styles.info}>
        <h4>Arriving March 21st, 2021 </h4>
        <FlightItem />
        <p>Seat 4F (business, window), 1 checked bag</p>
      </div>
    </div>
  );
}
