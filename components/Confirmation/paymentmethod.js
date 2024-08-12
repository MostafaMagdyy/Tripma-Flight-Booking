import styles from "./paymentmethodconfirmation.module.css";
import Image from "next/image";
export default function PaymentMethodConfirmation() {
  return (
    <div className={styles.container}>
      <h3>Payment method</h3>
      <div className={styles.cardinfo}>
        <div className={styles.Image}>
          <Image
            src="./Visa.svg"
            alt="Visa icon"
            width={76}
            height={24}
          ></Image>
        </div>
        <div className={styles.cardname}>
          <h4>Sophia Knowles</h4>
          <div className={styles.cardnumber}>
            <p>••••••••••••3456</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
