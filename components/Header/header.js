"use client";
import Navbar from "./navbar";
import styles from "./header.module.css";
import { useState, createContext } from "react";

import React from "react";

export const SignPopContext = createContext(null);

export default function Header({ children }) {
  const [popup, setpopup] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.firstheader}>
        <h4>
          Join Tripma today and save up to 20% on your flight using code TRAVEL
          at checkout. Promotion valid for new users only.
        </h4>
      </div>
      <Navbar
        onOpen={() => {
          setpopup(true);
        }}
      />
      <SignPopContext.Provider value={{ popup, setpopup }}>
        {children}
      </SignPopContext.Provider>
    </div>
  );
}
