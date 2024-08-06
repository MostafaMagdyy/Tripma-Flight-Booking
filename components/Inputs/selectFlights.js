"use client";
import { useState } from "react";
import styles from "./selectFlight.module.css";
import Image from "next/image";
import CityList from "./citiylist";
import PersonsList from "./Personslist";

export default function CustomSelect({ imgpath, text, width, type }) {
  const [showList, setShowList] = useState(false);
  const renderedList =
    type === "person" ? <PersonsList></PersonsList> : <CityList></CityList>;
  console.log(showList);
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
      {showList && <div className={styles.listContainer}>{renderedList}</div>}
    </div>
  );
}
