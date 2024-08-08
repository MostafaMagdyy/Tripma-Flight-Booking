"use client";
import React, { useState, useEffect } from "react";
import Counter from "../Inputs/counter";
import CustomInput from "../Inputs/custominput";
import styles from "./passengerinfo.module.css";

export default function PassengerInfo({ setValid }) {
  const [formData, setFormData] = useState({
    firstname: "",
    middle: "",
    lastname: "",
    suffix: "",
    birthDate: "",
    email: "",
    phonenumber: "",
    redressnumber: "",
    travellernumber: "",
    emergencyfirstname: "",
    emergencylastname: "",
    emergencyemail: "",
    emergencyphonenumber: "",
    checkedBags: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const isValidPassengerInfo =
      formData.firstname !== "" &&
      formData.lastname !== "" &&
      formData.birthDate !== "" &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email) &&
      /^[0-9]{11,11}$/.test(formData.phonenumber);

    const isValidEmergencyContact =
      formData.emergencyfirstname !== "" &&
      formData.emergencylastname !== "" &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.emergencyemail) &&
      /^[0-9]{11,11}$/.test(formData.emergencyphonenumber);

    const isValidCheckedBags =
      Number.isInteger(formData.checkedBags) && formData.checkedBags >= 0;

    return (
      isValidPassengerInfo && isValidEmergencyContact && isValidCheckedBags
    );
  };

  useEffect(() => {
    const formIsValid = validateForm();
    console.log(formIsValid);
    setValid(formIsValid);
  }, [formData]);

  return (
    <div className={styles.infosection}>
      {/* Passenger Info */}
      <h4>Passenger 1 (Adult)</h4>
      <div className={styles.innercontainer}>
        <div className={styles.infosection}>
          <div className={styles.inputscontainer}>
            <CustomInput
              type="text"
              placeholder="First name*"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              width="200"
            />
            <CustomInput
              type="text"
              placeholder="Middle"
              name="middle"
              value={formData.middle}
              onChange={handleChange}
              width="200"
            />
            <CustomInput
              type="text"
              placeholder="Last name*"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              width="200"
            />
          </div>
          <div className={styles.inputscontainer}>
            <CustomInput
              type="text"
              placeholder="Suffix"
              name="suffix"
              value={formData.suffix}
              onChange={handleChange}
              width="200"
            />
            <CustomInput
              type="date"
              placeholder="Date of birth*"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              width="252"
            />
          </div>
        </div>
        <div className={styles.infosection}>
          <div className={styles.inputscontainer}>
            <CustomInput
              type="email"
              placeholder="Email address*"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <CustomInput
              type="tel"
              placeholder="Phone number*"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputscontainer}>
            <CustomInput
              type="text"
              placeholder="Redress number"
              name="redressnumber"
              value={formData.redressnumber}
              onChange={handleChange}
            />
            <CustomInput
              type="tel"
              placeholder="Known traveller number*"
              name="travellernumber"
              value={formData.travellernumber}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.infosection}>
        <h4>Emergency contact information</h4>
        <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" name="checkbox" />
          <span style={styles.checkboxLabel}>Same as Passenger 1</span>
        </div>
        <div className={styles.inputscontainer}>
          <CustomInput
            type="text"
            placeholder="First name*"
            name="emergencyfirstname"
            value={formData.emergencyfirstname}
            onChange={handleChange}
          />
          <CustomInput
            type="text"
            placeholder="Last name*"
            name="emergencylastname"
            value={formData.emergencylastname}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputscontainer}>
          <CustomInput
            type="email"
            placeholder="Email address*"
            name="emergencyemail"
            value={formData.emergencyemail}
            onChange={handleChange}
          />
          <CustomInput
            type="tel"
            placeholder="Phone number*"
            name="emergencyphonenumber"
            value={formData.emergencyphonenumber}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.innercontainer}>
        <div className={styles.container16}>
          <h4>Bag information</h4>
          <p>
            Each passenger is allowed one free carry-on bag and one personal
            item. First checked bag for each passenger is also free. Second bag
            check fees are waived for loyalty program members.{" "}
            <span className={styles.highlight}>See the full bag policy.</span>
          </p>
        </div>
        <div className={styles.passengerinfobags}>
          <div className={styles.container16}>
            <div className={styles.checkedbag}>
              <h4>Passenger 1</h4>
            </div>
            <h4>First Last</h4>
          </div>
          <div className={styles.container16}>
            <div className={styles.checkedbag}>
              <h4>Checked bags</h4>
            </div>
            <Counter
              ok={true}
              onCountChange={(newCount) =>
                setFormData({ ...formData, checkedBags: newCount })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
