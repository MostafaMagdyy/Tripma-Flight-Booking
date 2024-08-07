"use client";
import CustomSelect from "@/components/Inputs/selectFlights";
import styles from "./page.module.css";
import Image from "next/image";
import CookiePopup from "@/components/Cookies/cookies";
import { useState } from "react";
import FlightDeals from "@/components/HomePage/flightdeals";
import CustomButton from "@/components/HomePage/button";
import CommentSection from "@/components/HomePage/commentsection";
import DateInput from "@/components/Inputs/dateinput";
import SelectionInputs from "@/components/HomePage/selectioninputs";
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
          <SelectionInputs></SelectionInputs>
          {cookiespopup && (
            <CookiePopup
              onClose={() => {
                setCookiespopup(false);
              }}
            ></CookiePopup>
          )}
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
      </div>
    </>
  );
}
