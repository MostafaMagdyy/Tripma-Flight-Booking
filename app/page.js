import CustomSelect from "@/components/Inputs/selectFlights";
import styles from "./page.module.css";
import Image from "next/image";
import CookiePopup from "@/components/Cookies/cookies";
export default function Home({ popup = true }) {
  return (
    <>
      <div className={styles.container}>
        <Image
          src="/heroText.svg"
          alt="it's more than just a trip"
          width={756}
          height={256}
          className={styles.logo}
        />
      </div>
      <div className={styles.selectcontainer}>
        <CustomSelect
          imgpath={"./departure.svg"}
          text={"From where?"}
        ></CustomSelect>
        <CustomSelect
          imgpath={"./arrival.svg"}
          text={"To where?"}
        ></CustomSelect>
        <CustomSelect
          imgpath={"./calendar.svg"}
          text={"Depart - Return"}
        ></CustomSelect>
        <CustomSelect imgpath={"./person.svg"} text={"1 adult"}></CustomSelect>
        <div className={styles.search}>
          <button>Search</button>
        </div>
        {popup && <CookiePopup></CookiePopup>}
      </div>
    </>
  );
}
