import React from "react";
import { Link } from "react-router-dom";
import "../styles/home-hero-section.css";
import heroImage from "../assets/site-images/heroImage.png";

function HomeHeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-column hero-column-left">
        <div className="typing">
          <h1>WhereImagination</h1>
          <h1>BrewsinEveryPage</h1>
          <h1>andPotion...</h1>
        </div>
        <Link to="/category/Adventure">
          <button className="hero-button">
            SHOP NOW <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
      <div className="hero-column hero-column-right">
        <img src={heroImage} alt="hero" className="hero-image" />
        <div className="wrapper">
          <span className="star star1">
            <i className="fa fa-star"></i>
          </span>
          <span className="star star2">
            <i className="fa fa-star"></i>
          </span>
          <span className="star star3">
            <i className="fa fa-star"></i>
          </span>
          <span className="star star4">
            <i className="fa fa-star"></i>
          </span>
          <span className="star star5">
            <i className="fa fa-star"></i>
          </span>
          <span className="star star6">
            <i className="fa fa-star"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSection;
