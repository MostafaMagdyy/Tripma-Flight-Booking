import React, { useState } from "react";
import styles from "./seats.module.css";
import Image from "next/image";

const arr = ["A", "B", "C", "D", "E", "F"];

const BusinessSeats = ({ rows, selectedSeat, onSeatClick }) => {
  return (
    <div className={styles.businessSection}>
      {rows.map((row) => (
        <div key={row} className={styles.row}>
          {Array.from({ length: 2 }).map((_, index) => {
            const seatId = `${row}${arr[index]}`;
            return (
              <div
                key={seatId}
                className={`${styles.seatBusiness} ${
                  selectedSeat === seatId ? styles.selected : ""
                }`}
                onClick={() => onSeatClick(seatId)}
              ></div>
            );
          })}
          <div className={styles.rowNumber}>{row}</div>
          {Array.from({ length: 2 }).map((_, index) => {
            const seatId = `${row}${arr[index + 2]}`;
            return (
              <div
                key={seatId}
                className={`${styles.seatBusiness} ${
                  selectedSeat === seatId ? styles.selected : ""
                }`}
                onClick={() => onSeatClick(seatId)}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const EconomySeats = ({ rows, exitrows, selectedSeat, onSeatClick }) => {
  return (
    <div className={styles.economySection}>
      {rows.map((row) => (
        <React.Fragment key={row}>
          {exitrows.includes(row) && (
            <div className={styles.rowexitrowcontainer}>
              <Image
                src="./information.svg"
                alt="info icon"
                width={18}
                height={18}
              />
              <div className={styles.exitRow}>Exit row</div>
            </div>
          )}
          <div className={styles.row}>
            {Array.from({ length: 3 }).map((_, index) => {
              const seatId = `${row}${arr[index]}`;
              return (
                <div
                  key={seatId}
                  className={`${styles.seatEconomy} ${
                    selectedSeat === seatId ? styles.selected : ""
                  }`}
                  onClick={() => onSeatClick(seatId)}
                ></div>
              );
            })}
            <span className={styles.rowNumber}>{row}</span>
            {Array.from({ length: 3 }).map((_, index) => {
              const seatId = `${row}${arr[index + 3]}`;
              return (
                <div
                  key={seatId}
                  className={`${styles.seatEconomy} ${
                    selectedSeat === seatId ? styles.selected : ""
                  }`}
                  onClick={() => onSeatClick(seatId)}
                ></div>
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const Seats = ({ selectedSeat, onSeatClick }) => {
  const businessRows = [1, 2, 3, 4, 5];
  const economyExitRows = [6, 14, 19, 29];
  const economyRows = Array.from({ length: 28 }, (_, i) => i + 6);

  return (
    <div className={styles.container}>
      <BusinessSeats
        rows={businessRows}
        selectedSeat={selectedSeat}
        onSeatClick={onSeatClick}
      />
      <EconomySeats
        rows={economyRows}
        exitrows={economyExitRows}
        selectedSeat={selectedSeat}
        onSeatClick={onSeatClick}
      />
    </div>
  );
};

export default Seats;
