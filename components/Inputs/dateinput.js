"use client";
import { useState } from "react";
import styles from "./dateinput.module.css";
import Image from "next/image";
import Date from "./date";
export default function DateInput({ imgpath, text, width }) {
  const [showList, setShowList] = useState(false);
  return (
    <div
      className={styles.selectWrapper}
      style={{ width: width }}
      onClick={() => {
        setShowList((prev) => !prev);
      }}
    >
      <div className={styles.container}>
        <div className={styles.customSelect}>
          <Image
            src={imgpath}
            alt={`${text} icon`}
            className={styles.icon}
            width={32}
            height={32}
          />
          <span className={styles.placeholder}>{text}</span>
        </div>
      </div>
      {showList && (
        <div className={styles.listContainer}>
          <Date></Date>
        </div>
      )}
    </div>
  );
}
