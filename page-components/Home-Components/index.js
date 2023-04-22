import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import { Banner } from "./Banner/Banner";
import WeDoIt from "./We-Do-IT/WeDoIt";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Carousel />
      <WeDoIt />
    </>
  );
};

export default HomePage;
