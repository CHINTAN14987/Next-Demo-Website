import React from "react";
import styles from "../../../styles/Map.module.scss";
import Button from "../../../components/Button/Button";
const Map = () => {
  const HireButtonAttribute = {
    content: "Visit Us",
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
      background: "#1C1A2A",
    },
  };
  return (
    <div className={styles.mapWrapper}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.326306264624!2d72.5020281750162!3d23.01178827918125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b26e21cba71%3A0x4ee5407f0f110f5c!2sTechanzo!5e0!3m2!1sen!2sin!4v1682249081121!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Button buttonAttributes={HireButtonAttribute} />
    </div>
  );
};

export default Map;
