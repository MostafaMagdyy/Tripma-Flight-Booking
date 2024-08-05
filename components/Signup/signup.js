import React from "react";
import styles from "./signup.module.css";
import LoginWithButton from "./loginwith";
const Signup = ({ onClose }) => {
  return (
    <div
      className={styles.modal}
      onClick={(e) => {
        if (e.target == e.currentTarget) onClose();
      }}
    >
      <div className={styles.modalContent}>
        <div className={styles.headercontainer}>
          <div className={styles.header}>
            <h3>Sign up for Tripma</h3>
            <span className={styles.closeBtn} onClick={onClose}>
              &times;
            </span>
          </div>
          <p>
            Tripma is totally free to use. Sign up using your email address or
            phone number below to get started.
          </p>
        </div>
        <form className={styles.form}>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Email or phone number"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Password"
          />
          <div className={styles.checkboxcontainer}>
            <input type="checkbox" id="checkbox2" name="option2" />
            <span style={styles.checkboxLabel}>
              I agree to the terms and conditions
            </span>
          </div>
          <div className={styles.checkboxcontainer}>
            <input type="checkbox" id="checkbox2" name="option2" />
            <span style={styles.checkboxLabel}>
              Send me the latest deal alerts
            </span>
          </div>
          <button type="submit">Create account</button>
        </form>
        <div className={styles.or}>or</div>
        <div className={styles.loginwith}>
          <LoginWithButton
            imgpath={"./google.svg"}
            text={"Continue with Google"}
          ></LoginWithButton>
          <LoginWithButton
            imgpath={"./apple.svg"}
            text={"Continue with Apple"}
          ></LoginWithButton>
          <LoginWithButton
            imgpath={"./facebook.svg"}
            text={"Continue with Facebook"}
          ></LoginWithButton>
        </div>
      </div>
    </div>
  );
};

export default Signup;
