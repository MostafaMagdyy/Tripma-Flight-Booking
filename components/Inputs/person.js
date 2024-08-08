import styles from "./person.module.css";
import Counter from "./counter";
export default function PersonInput({ text }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftcontainer}>
        <span className={styles.personcategory}>{text}:</span>
      </div>
      <Counter></Counter>
    </div>
  );
}
