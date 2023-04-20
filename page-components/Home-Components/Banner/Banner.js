import Image from "next/image";
import React from "react";
import styles from "../../../styles/HomepageBanner.module.scss";
import banner from "/public/Images/homepage-banner.png";
export const Banner = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3>We Craft fast Websites and Mobile Apps.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <Image src={banner} fill />
      </div>
    </div>
  );
};