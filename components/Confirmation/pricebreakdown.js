import styles from "./pricebreakdown.module.css";
export default function PriceBreakdown() {
  return (
    <div className={styles.container}>
      <h3>Price breakdown</h3>
      <div className={styles.info}>
        <div className={styles.pricelistitem}>
          <p>Departing Flight</p>
          <p>$251.50</p>
        </div>
        <div className={styles.pricelistitem}>
          <p>Arriving Flight</p>
          <p>$251.50</p>
        </div>
        <div className={styles.pricelistitem}>
          <p>Baggage fees</p>
          <p>$0</p>
        </div>
        <div className={styles.pricelistitem}>
          <p>Seat upgrade (business)</p>
          <p>$251.50</p>
        </div>
        <div className={styles.pricelistitem}>
          <p>Subtotal</p>
          <p>$702</p>
        </div>
        <div className={styles.pricelistitem}>
          <p>Taxes (9.4%)</p>
          <p>$66</p>
        </div>
      </div>
      <div className={styles.amount}>
        <div className={styles.pricelistitem}>
          <h4>Amount paid</h4>
          <h4>$768</h4>
        </div>
      </div>
    </div>
  );
}
