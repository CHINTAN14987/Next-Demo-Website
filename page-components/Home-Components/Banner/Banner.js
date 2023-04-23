import Image from "next/image";
import React from "react";
import banner from "../../../public/Images/homepage-banner.png";
import styles from "../../../styles/Banner.module.scss";
import Button from "../../../components/Button/Button";
export const Banner = () => {
  const buttonAttributes = {
    content: "Get in Touch",
    style: {
      padding: "10px 20px",
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>We Craft fast Websites and Mobile Apps.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button attributes={buttonAttributes} />
      </div>
      <div className={styles.imageSection}>
        <Image src={banner} />
      </div>
    </div>
  );
};
