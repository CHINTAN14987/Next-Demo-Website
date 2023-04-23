import React from "react";

import { Banner } from "./Banner/Banner";
import Cards from "./Cards/Cards";
import CompanyDescription from "./CompanyDescription/CompanyDescription";
import ServiceDescription from "./service-description/ServiceDescription";
import Map from "./Map/Map";
import HireUs from "./HireUs/HireUs";
import styles from "../../styles/HomePage.module.scss";
import Review from "../Review/Review";

const HomePage = () => {
  return (
    <>
      <div className={styles.contentWrapper}>
        <Banner />
        <ServiceDescription />
      </div>
      <CompanyDescription />
      <div className={styles.contentWrapper}>
        <Cards />
        <Review />
      </div>
      <div className={styles.mapformWrapper}>
        <Map />
        <HireUs />
      </div>
    </>
  );
};

export default HomePage;
