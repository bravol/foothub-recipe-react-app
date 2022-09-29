import React from "react";
import HeroSection from "../components/HeroSection";
import ImproveSkillSection from "../components/ImproveSkillSection";
import QuoteSection from "../components/QuoteSection";
import Chiefs from "../components/Chiefs";

function Home() {
  return (
    <div>
      <HeroSection />
      <ImproveSkillSection />
      <QuoteSection />
      <Chiefs />
    </div>
  );
}

export default Home;
