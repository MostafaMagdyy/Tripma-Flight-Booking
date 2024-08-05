import React from "react";
import styles from "./cookies.module.css";

const CookiePopup = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.header}>
        <h4>
          By using our site, you <br></br>agree to eat our cookies.
        </h4>
        <span className={styles.closeBtn}>&times;</span>
      </div>
      <div className={styles.popupButtons}>
        <button className={styles.acceptButton}>Accept cookies</button>
        <button className={styles.declineButton}>Go to settings</button>
      </div>
    </div>
  );
};

export default CookiePopup;
