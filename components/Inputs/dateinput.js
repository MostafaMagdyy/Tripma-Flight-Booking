import React, { useState, useEffect, useRef } from "react";
import styles from "./dateinput.module.css";
import Image from "next/image";
import Date from "./date";

export default function DateInput({ imgpath, text, width }) {
  const [showDate, setShowDate] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });
  const wrapperRef = useRef(null);

  const formatDateRange = (start, end) => {
    if (start && end) {
      const startFormatted = start.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      const endFormatted = end.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      return `${startFormatted} - ${endFormatted}`;
    }
    return text;
  };

  const handleDateChange = ({ startDate, endDate }) => {
    setSelectedDates({ startDate, endDate });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDate(false);
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
      onClick={() => setShowDate((prev) => !prev)}
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
            {formatDateRange(selectedDates.startDate, selectedDates.endDate)}
          </span>
        </div>
      </div>
      {showDate && (
        <div className={styles.listContainer}>
          <Date
            action={(e) => {
              e.stopPropagation();
              setShowDate(false);
            }}
            onDateChange={handleDateChange}
            startDate={selectedDates.startDate}
            endDate={selectedDates.endDate}
          />
        </div>
      )}
    </div>
  );
}
