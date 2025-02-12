import React from "react";
import "./index.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Discover <span className="hero-span">luxury essentials</span> for
          every occasion
        </h1>
        <p>
          Starting at just $99, explore our exclusive collection of perfumes,
          handbags, and more.
        </p>
        <Link to="/collection">
          <button>Shop Now</button>
        </Link>
      </div>
      <div className="hero-img">
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
