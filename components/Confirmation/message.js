import styles from "./message.module.css";
export default function ConfirmationMessage() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p>
          Your flight has been booked successfully! Your confirmation number is
          #381029404387
        </p>
        <div className={styles.closeicon}>
          <span>&times;</span>
        </div>
      </div>
      <div className={styles.info}>
        <h3>Bon voyage, Sophia!</h3>
        <h4>Confirmation number: #381029404387</h4>
        <p>
          Thank you for booking your travel with Tripma! Below is a summary of
          your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your
          booking confirmation to your email address. You can also find this
          page again in My trips.
        </p>
      </div>
    </div>
  );
}
