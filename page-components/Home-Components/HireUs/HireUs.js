import React, { useState } from "react";
import styles from "../../../styles/HireUs.module.scss";
import Button from "../../../components/Button/Button";

const HireUs = () => {
  const attribute = {
    content: "SEND MESSAGE",
    style: {
      fontWeight: "400",
      padding: "10px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };
  const HireButtonAttribute = {
    content: "Hire Us",
    style: {
      fontWeight: "600",
      padding: "0",
      fontSize: "20px",
      position: "absolute",
      boxShadow: "0px 0px 40px rgba(235, 89, 110, 0.4)",
      top: "-20px",
      left: "20%",
      height: "3rem",
      width: "15rem",
      cursor: "pointer",
    },
  };
  const [submitForm, setSubmitForm] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    message: "",
  });
  const [validationError, setValidationError] = useState(false);
  const onChangeHandler = (event) => {
    setSubmitForm({ ...submitForm, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      !submitForm.firstName ||
      !submitForm.LastName ||
      !submitForm.emailAddress ||
      !submitForm.message
    ) {
      setValidationError(true);
    }
  };
  const onBlurHandler = () => {
    setValidationError(false);
  };

  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <div>
          <input
            placeholder="First Name"
            name="firstName"
            value={submitForm.firstName}
            onChange={onChangeHandler}
            className={
              validationError && !submitForm.firstName ? styles.error : ""
            }
            onBlur={onBlurHandler}
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={submitForm.lastName}
            onChange={onChangeHandler}
            className={
              validationError && !submitForm.LastName ? styles.error : ""
            }
            onBlur={onBlurHandler}
          />
        </div>
        <input
          placeholder="Email Address"
          name="emailAddress"
          value={submitForm.emailAddress}
          onChange={onChangeHandler}
          className={
            validationError && !submitForm.emailAddress ? styles.error : ""
          }
          onBlur={onBlurHandler}
        />
        <textarea
          placeholder="Your Message"
          name="message"
          value={submitForm.message}
          className={validationError && !submitForm.message ? styles.error : ""}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        ></textarea>
        <div className={styles.submit}>
          <Button buttonAttributes={attribute} event={onSubmitHandler} />
        </div>
        <Button buttonAttributes={HireButtonAttribute} />
      </div>
    </div>
  );
};

export default HireUs;
