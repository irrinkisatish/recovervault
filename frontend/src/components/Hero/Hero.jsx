import React, { useState } from "react";
import { Button } from "../ui/button"; // Make sure your button path is correct
import heroImg from "../../assets/hero_img.png"; // Replace with your actual hero image path
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            🛡️ Recover Your Lost Funds – Fast, Secure & Confidential
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Victim of fraud or a scam? You’re not alone — and you’re not
            powerless. Our recovery specialists work with advanced tools and
            global networks to help you trace and recover your lost assets
            quickly and discreetly.
          </p>

          <NavLink
            className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-6 py-3 rounded-lg shadow"
            to="/casesubmissionform"
          >
            {" "}
            Start Your Recovery Now
          </NavLink>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Fund Recovery"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
