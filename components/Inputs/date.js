import styles from "./date.module.css";
import DateHeader from "./dateheader";
import BasicDateRangeCalendar from "../Material-ui/datecalender";
export default function Date() {
  return (
    <div className={styles.container}>
      <DateHeader />
      <BasicDateRangeCalendar />
    </div>
  );
}
