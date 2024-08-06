import styles from "./button.module.css";

export default function CustomButton({
  text = "Explore more stays",
  padding = { top: 12, down: 12, left: 20, right: 20 },
}) {
  const buttonStyle = {
    paddingTop: `${padding.top}px`,
    paddingBottom: `${padding.down}px`,
    paddingLeft: `${padding.left}px`,
    paddingRight: `${padding.right}px`,
  };

  return (
    <button className={styles.button} style={buttonStyle}>
      {text}
    </button>
  );
}
