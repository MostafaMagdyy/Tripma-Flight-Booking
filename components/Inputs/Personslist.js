import styles from "./Personslist.module.css";
import PersonInput from "./person";
export default function PersonsList() {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <PersonInput text={"Adults"}></PersonInput>
        <PersonInput text={"Minors"}></PersonInput>
      </div>
    </div>
  );
}
