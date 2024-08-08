"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./counter.module.css";

export default function Counter({ ok = false }) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.rightcontainer} style={ok ? { gap: "24px" } : {}}>
      <div
        className={styles.button}
        onClick={() => setCount((count) => (count ? count - 1 : count))}
      >
        <Image src={"./minus.svg"} alt="minus" width={32} height={32} />
      </div>
      <span className={styles.value} style={ok ? { marginTop: "-5px" } : {}}>
        {count}
      </span>
      <div
        className={styles.button}
        onClick={() => setCount((count) => count + 1)}
      >
        <Image src={"./plus.svg"} alt="plus" width={32} height={32} />
      </div>
    </div>
  );
}
