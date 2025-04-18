import React from "react";
import "./index.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Welcome to <span className="hero-span">Solomon Trading LLC</span> —
          your one-stop shop for all things stylish and practical!
        </h1>
        <p>
          Whether you're looking for the latest fashion trends, unique gift
          items, high-quality home decor, or wholesale deals on used cars and
          scrap materials, we've got you covered. Explore our diverse selection
          of products at unbeatable prices, all while enjoying fast shipping and
          exceptional customer service.
        </p>
        <Link to="/collection">
          <button>Explore</button>
        </Link>
      </div>
      <div className="hero-img">
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
