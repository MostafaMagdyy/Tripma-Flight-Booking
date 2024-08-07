import styles from "./prices.module.css";
export default function Prices() {
  return (
    <div className={styles.container}>
      <div className={styles.totalprice}>
        <h5>Subtotal </h5>
        <h5>Taxes and Fees</h5>
        <h5>Total </h5>
      </div>
      <div className={styles.totalprice}>
        <h5>$503</h5>
        <h5>$121</h5>
        <h5>$624</h5>
      </div>
    </div>
  );
}
