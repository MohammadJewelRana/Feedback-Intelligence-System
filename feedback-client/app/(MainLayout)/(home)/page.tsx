import React from "react";
import HeroSection from "./_components/HeroSection";
import StatesCards from "./_components/StatesCards";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className=" mx-auto max-w-7xl  ">
        <StatesCards />
      </div>
    </div>
  );
};

export default page;
