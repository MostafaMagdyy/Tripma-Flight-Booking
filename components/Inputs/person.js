"use client";
import { useState } from "react";
import styles from "./person.module.css";
import Image from "next/image";
export default function PersonInput({ text }) {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.leftcontainer}>
        <span className={styles.personcategory}>{text}:</span>
      </div>
      <div className={styles.rightcontainer}>
        <div
          className={styles.button}
          onClick={() => setCount((count) => count - 1)}
        >
          <Image src={"./minus.svg"} alt="minus" width={32} height={32}></Image>
        </div>
        <span className={styles.value}>{count}</span>
        <div
          className={styles.button}
          onClick={() => setCount((count) => count + 1)}
        >
          <Image src={"./plus.svg"} alt="plus" width={32} height={32}></Image>
        </div>
      </div>
    </div>
  );
}
