"use client";
import { useState } from "react";
import styles from "./selectFlight.module.css";
import Image from "next/image";
const departureCities = [
  { id: 1, name: "San Francisco" },
  { id: 2, name: "Seattle" },
  { id: 3, name: "Dallas" },
  { id: 4, name: "Boston" },
];

export default function CustomSelect({ imgpath, text }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleSelectChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className={styles.selectWrapper}>
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
      {/* <select
        className={styles.select}
        value={selectedCity}
        onChange={handleSelectChange}
      >
        <option value="" disabled hidden>
          Select a departure city
        </option>
        {departureCities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <div className={styles.dropdownSpacing}></div> */}
    </div>
  );
}
