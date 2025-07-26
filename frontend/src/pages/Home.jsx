import React from "react";
import Hero from "../components/Hero/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSelling from "../components/BestSelling";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSelling />
    </div>
  );
};

export default Home;
