import React from "react";
import Hero from "./Hero";
import HeroCards from "./HeroCards";
import LandingPage from "./LandingPage";
import AnimatedCards from "./AnimatedCards";

const Home = () => {
  return (
    <div>
      <Hero />
      <AnimatedCards/>
      <LandingPage />
      {/* <AnimatedCards /> */}
    </div>
  );
};

export default Home;


