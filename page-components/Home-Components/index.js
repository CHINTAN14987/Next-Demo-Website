import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import { Banner } from "./Banner/Banner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Carousel />
    </>
  );
};

export default HomePage;
