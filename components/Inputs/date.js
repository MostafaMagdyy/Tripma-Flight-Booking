"use client";
import styles from "./date.module.css";
import DateHeader from "./dateheader";
import ReactDate from "./reactdate";
export default function Date({ action, onDateChange, startDate, endDate }) {
  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <DateHeader action={action} startDate={startDate} endDate={endDate} />
      <div className={styles.separator}></div>
      <div className={styles.reactdate}>
        <ReactDate
          onDateChange={onDateChange}
          startDate={startDate}
          endDate={endDate}
        ></ReactDate>
      </div>
    </div>
  );
}
