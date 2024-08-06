import styles from "./dateheader.module.css";
import DateSelect from "./dateselect";
import CustomButton from "../HomePage/button";
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
        <div className={styles.dateselect}>
          <DateSelect></DateSelect>
        </div>
        <CustomButton text={"Done"}></CustomButton>
      </div>
    </div>
  );
}
