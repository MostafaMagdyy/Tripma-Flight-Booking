import styles from "./flightitem.module.css";
import Image from "next/image";
export default function FlightItem({ flight, onSelectFlight }) {
  const duration = "16h 45m";
  const fromto = "7:00AM - 4.15PM";
  const numofstops = "2 stop";
  const price = "512$";
  const airport = "Hawaiian Airlines";
  const stopinfo = "2h 45m in HNL";
  const triptype = "round trip";
  const image = "./flight.svg";
  return (
    <div className={styles.flightcontainer} onClick={onSelectFlight}>
      <div className={styles.imagecontainer}>
        <Image src={image} alt="flightimage" width={48} height={48} />
      </div>
      <div className={styles.infosection}>
        <div className={styles.timinginfo}>
          <span>{duration}</span>
          <span>{fromto}</span>
          <span>{numofstops}</span>
          <span>{price}</span>
        </div>
        <div className={styles.locationinfo}>
          <span>{airport}</span>
          <span>{stopinfo}</span>
          <span>{stopinfo}</span>
          <span>{triptype}</span>
        </div>
      </div>
    </div>
  );
}
