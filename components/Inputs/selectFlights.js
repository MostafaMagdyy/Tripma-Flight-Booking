"use client";
import { useState } from "react";
import styles from "./selectFlight.module.css";
import Image from "next/image";
import CityList from "./citiylist";
const departureCities = [
  { id: 1, name: "San Francisco" },
  { id: 2, name: "Seattle" },
  { id: 3, name: "Dallas" },
  { id: 4, name: "Boston" },
];

export default function CustomSelect({ imgpath, text, width }) {
  const [selectedCity, setSelectedCity] = useState("");
  const [showList, setShowList] = useState(false);
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
            alt="departure icon"
            className={styles.icon}
            width={32}
            height={32}
          />
          <span className={styles.placeholder}>
            {selectedCity
              ? departureCities.find(
                  (city) => city.id === parseInt(selectedCity)
                ).name
              : `${text}`}
          </span>
        </div>
      </div>
      {showList && <CityList></CityList>}
    </div>
  );
}
