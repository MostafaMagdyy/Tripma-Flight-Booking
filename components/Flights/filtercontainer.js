import styles from "./filtercontainer.module.css";
export default function FilterComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.item}>Max price </span>
        <span className={styles.icon}>▼</span>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.item}>Shops </span>
        <span className={styles.icon}>▼</span>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.item}>Times </span>
        <span className={styles.icon}>▼</span>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.item}>Airlines </span>
        <span className={styles.icon}>▼</span>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.item}>Seat class </span>
        <span className={styles.icon}>▼</span>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.item}>More </span>
        <span className={styles.icon}>▼</span>
      </div>
    </div>
  );
}
