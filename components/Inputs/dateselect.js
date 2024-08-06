import styles from "./dateselect.module.css";
import Image from "next/image";
export default function DateSelect() {
  return (
    <div
      className={styles.selectWrapper}
      // onClick={() => {
      //   setShowList((prev) => !prev);
      // }}
    >
      <div className={styles.container}>
        <div className={styles.customSelect}>
          <Image
            src={"./calendar.svg"}
            alt={"Depart - Return"}
            className={styles.icon}
            width={32}
            height={32}
          />
          <span className={styles.placeholder}>Depart - Return</span>
        </div>
      </div>
    </div>
  );
}
