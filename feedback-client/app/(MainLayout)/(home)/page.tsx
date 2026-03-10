import React from "react";
import HeroSection from "./_components/HeroSection";
import StatesCards from "./_components/StatesCards";
import Feedback from "./_components/Feedback";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className=" mx-auto max-w-7xl  px-4">
        <StatesCards />
        <Feedback/>
      </div>
    </div>
  );
};

export default page;
