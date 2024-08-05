import styles from "./loginwith.module.css";
import Image from "next/image";
export default function LoginWithButton({ imgpath, text }) {
  return (
    <button className={styles.container}>
      <div className={styles.innercontainer}>
        <Image src={imgpath} alt="google" width={18} height={18} />
        <span>{text}</span>
      </div>
    </button>
  );
}
