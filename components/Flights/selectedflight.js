import styles from "./selectedflight.module.css";
import Image from "next/image";
export default function SelectedFlight() {
  const flightnum = "FIG4321";
  const fromto = "7:00AM - 4.15PM";
  const duration = "16h 45m (+1d)";
  const airport = "Hawaiian Airlines";
  const stopinfo = "2h 45m in HNL";

  const image = "./flight.svg";
  return (
    <div className={styles.flightcontainer}>
      <div className={styles.leftcontainer}>
        <div className={styles.imagecontainer}>
          <Image src={image} alt="flightimage" width={40} height={40} />
        </div>
        <div className={styles.infosection}>
          <span className={styles.airport}>{airport}</span>
          <span className={styles.flightnum}>{flightnum}</span>
        </div>
      </div>
      <div className={styles.timinginfo}>
        <span className={styles.airport}>{duration}</span>
        <span className={styles.airport}>{fromto}</span>
        <span className={styles.flightnum}>{stopinfo}</span>
      </div>
    </div>
  );
}
