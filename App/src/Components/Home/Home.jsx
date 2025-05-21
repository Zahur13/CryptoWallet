import React from "react";
import "./home.css";
import LeftSection from "../LeftSection/LeftSection";
import MidSection from "../MidSection/MidSection";
import RightSection from "../RightSection/RightSection";

const Home = () => {
  return (
    <>
      <div className="maincontainer">
        <LeftSection title="CryptoSphere" />
        <MidSection />
        <RightSection />
      </div>
    </>
  );
};

export default Home;
