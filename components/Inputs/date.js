import styles from "./date.module.css";
import DateHeader from "./dateheader";
import ReactDate from "./reactdate";
export default function Date() {
  return (
    <div className={styles.container}>
      <DateHeader />
      <div className={styles.separator}></div>
      <div className={styles.reactdate}>
        <ReactDate></ReactDate>
      </div>
    </div>
  );
}
