"use client";
import CustomSelect from "@/components/Inputs/selectFlights";
import styles from "./page.module.css";
import Image from "next/image";
import CookiePopup from "@/components/Cookies/cookies";
import Signup from "@/components/Signup/signup";
import { useState } from "react";
export default function Home() {
  const [cookiespopup, setCookiespopup] = useState(true);
  return (
    <>
      <div className={styles.container}>
        <Image
          src="/heroText.svg"
          alt="it's more than just a trip"
          width={756}
          height={265}
          className={styles.logo}
        />
      </div>
      {/* <Date></Date> */}
      <div className={styles.selectcontainer}>
        <CustomSelect
          imgpath={"./departure.svg"}
          text={"From where?"}
          width={"22.5%"}
        ></CustomSelect>
        <CustomSelect
          imgpath={"./arrival.svg"}
          text={"To where?"}
          width={"22.5%"}
        ></CustomSelect>
        <CustomSelect
          imgpath={"./calendar.svg"}
          text={"Depart - Return"}
          width={"17.5%"}
        ></CustomSelect>
        <CustomSelect
          imgpath={"./person.svg"}
          text={"1 adult"}
          width={"13.88%"}
        ></CustomSelect>
        <div className={styles.search}>
          <button>Search</button>
        </div>
        {cookiespopup && (
          <CookiePopup
            onClose={() => {
              setCookiespopup(false);
            }}
          ></CookiePopup>
        )}
      </div>
    </>
  );
}
