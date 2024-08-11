"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./selectFlight.module.css";
import Image from "next/image";
import CityList from "./citylist";
import PersonsList from "./Personslist";

export default function CustomSelect({ imgpath, text, width, type, options }) {
  const [showList, setShowList] = useState(false);
  const [selectedCity, setSelectedCity] = useState(text);
  const [adultsCount, setAdultsCount] = useState(0);
  const [minorsCount, setMinorsCount] = useState(0);
  const wrapperRef = useRef(null);

  const renderedList =
    type === "person" ? (
      <PersonsList
        adultsCount={adultsCount}
        setAdultsCount={setAdultsCount}
        minorsCount={minorsCount}
        setMinorsCount={setMinorsCount}
      />
    ) : (
      <CityList cities={options} onSelect={handleSelectItem} />
    );

  function handleSelectItem(cityName) {
    setSelectedCity(cityName);
    setShowList(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div
      ref={wrapperRef}
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
          <span className={styles.placeholder}>
            {type === "person" ? `${adultsCount} adults` : selectedCity}
          </span>
        </div>
      </div>
      {showList && <div className={styles.listContainer}>{renderedList}</div>}
    </div>
  );
}
