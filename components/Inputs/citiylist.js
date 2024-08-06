import styles from "./citiylist.module.css";
import CityItem from "./cityitem";
export default function CityList({ width }) {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <CityItem></CityItem>
        <CityItem></CityItem>
        <CityItem></CityItem>
        <CityItem></CityItem>
        <CityItem></CityItem>
        <CityItem></CityItem>
        <CityItem></CityItem>
        <CityItem></CityItem>
        <CityItem></CityItem>
        <CityItem></CityItem>
        <CityItem></CityItem>
      </div>
    </div>
  );
}
