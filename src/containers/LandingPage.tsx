import React from "react";
import { Header } from "../components/header/Header";
import { MainSlider } from "../components/mainSlider/MainSlider";

function LandingPage() {
  return (
    <div className=" bg-gradient-to-r from-white-50 to-fuchsia-50">
      <Header />
      <MainSlider />
    </div>
  );
}

export default LandingPage;
