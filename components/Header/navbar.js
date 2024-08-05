import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
export default function Navbar({ onOpen }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={107}
            height={30}
            className={styles.logo}
          />
        </Link>
      </div>
      <nav className={styles.navList}>
        <ul>
          <div className={styles.outerdiv}>
            <li className={styles.navItem}>
              <Link href="/flights">Flights</Link>
            </li>
          </div>
          <div className={styles.outerdiv}>
            <li className={styles.navItem}>
              <Link href="/hotels">Hotels</Link>
            </li>
          </div>
          <div className={styles.outerdiv}>
            <li className={styles.navItem}>
              <Link href="/packages">Packages</Link>
            </li>
          </div>
          <div className={styles.outerdiv}>
            <li className={styles.navItem}>
              <Link href="/signin">Sign in</Link>
            </li>
          </div>
          <button className={styles.btn} onClick={onOpen}>
            <div className={styles.signup}>
              <li>Sign up</li>
            </div>
          </button>
        </ul>
      </nav>
    </header>
  );
}
