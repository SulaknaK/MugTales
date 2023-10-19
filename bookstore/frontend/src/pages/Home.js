import React from "react";
import HomeBestSellers from "../components/HomeBestSellers";
import HomeHeroSection from "../components/HomeHeroSection";

function Home() {
  return (
    <div>
      <div className="home-page">
        <section className="hero-section">
          <HomeHeroSection />
        </section>
        <section className="bs-section">
          <HomeBestSellers />
        </section>
      </div>
    </div>
  );
}

export default Home;
