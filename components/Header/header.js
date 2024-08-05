import Navbar from "./navbar";
import styles from "./header.module.css";
export default function Header({ children }) {
  return (
    <div className={styles.header}>
      <div className={styles.firstheader}>
        <h4>
          Join Tripma today and save up to 20% on your flight using code TRAVEL
          at checkout. Promotion valid for new users only.
        </h4>
      </div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
