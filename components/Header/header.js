"use client";
import Navbar from "./navbar";
import styles from "./header.module.css";
import { useState, createContext } from "react";

import Signup from "../Signup/signup";
import React from "react";

export default function Header({ children }) {
  const [formpopup, setFormpopup] = useState(false);
  return (
    <>
      {formpopup && (
        <Signup
          onClose={() => {
            setFormpopup(false);
          }}
        />
      )}
      <div className={styles.header}>
        <div className={styles.firstheader}>
          <h4>
            Join Tripma today and save up to 20% on your flight using code
            TRAVEL at checkout. Promotion valid for new users only.
          </h4>
        </div>
        <Navbar
          onOpen={() => {
            setFormpopup(true);
          }}
        />
        {children}
      </div>
    </>
  );
}
