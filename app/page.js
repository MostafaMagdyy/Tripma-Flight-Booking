"use client";
import CustomSelect from "@/components/Inputs/selectFlights";
import styles from "./page.module.css";
import Image from "next/image";
import CookiePopup from "@/components/Cookies/cookies";
import { useState } from "react";
import FlightDeals from "@/components/HomePage/flightdeals";
import CustomButton from "@/components/HomePage/button";
import CommentSection from "@/components/HomePage/commentsection";
import Footer from "@/components/Footer/footer";
import DateInput from "@/components/Inputs/dateinput";
export default function Home() {
  const [cookiespopup, setCookiespopup] = useState(true);
  return (
    <>
      <div className={styles.outercontainer}>
        <div className={styles.imagewandselectcontainer}>
          <div className={styles.imagecontainer}>
            <Image
              src="/heroText.svg"
              alt="it's more than just a trip"
              width={756}
              height={265}
              className={styles.logo}
            />
          </div>
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
            <DateInput
              imgpath={"./calendar.svg"}
              text={"Depart - Return"}
              width={"17.5%"}
            ></DateInput>
            <CustomSelect
              imgpath={"./person.svg"}
              text={"1 adult"}
              width={"13.88%"}
              type={"person"}
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
        </div>
        <FlightDeals
          description={"  Find your next adventure with these"}
          type={"flight deals"}
        ></FlightDeals>
        <FlightDeals
          showfull={false}
          description={"Explore unique"}
          type={"places to stay"}
        ></FlightDeals>
        <CustomButton></CustomButton>
        <CommentSection></CommentSection>
        <Footer></Footer>
      </div>
    </>
  );
}
