import styles from "./dateheader.module.css";
import CustomSelect from "./selectFlights";

export default function DateHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="Oneway" name="option1" />
          <span style={styles.checkboxLabel}>Oneway</span>
        </div>
        <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="Round" name="option1" />
          <span style={styles.checkboxLabel}>Round</span>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.select}>
          <CustomSelect
            imgpath={"./calendar.svg"}
            text={"Depart - Return"}
            width={"17.5%"}
          />
        </div>
        <button className={styles.doneButton}>Done</button>
      </div>
    </div>
  );
}
