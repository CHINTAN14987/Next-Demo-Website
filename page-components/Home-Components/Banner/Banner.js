import Image from "next/image";
import React from "react";
import banner from "../../../public/Images/homepage-banner.png";
import styles from "../../../styles/banner.module.scss";
export const Banner = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3>We Craft fast Websites and Mobile Apps.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Get in Touch</button>
      </div>
      <div>
        <Image src={banner} height={300} width={300} />
      </div>
    </div>
  );
};
