import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center w-full py-5 md:py-5 bg-white">
      <div className="w-full max-w-[1130px] px-4 md:px-0 mx-auto flex flex-col md:flex-row items-center justify-around">
        <img
          src={assets.about_img}
          alt="About Recovery Vault"
          className="w-[340px] md:w-[460px] rounded-[12px] mb-8 md:mb-0 shadow-xl"
        />
        <div className="w-full md:w-[540px] text-center md:text-left">
          <h2 className="text-[#1A1A1A] text-[26px] md:text-[48px] font-bold mb-3">
            About Us
          </h2>
          <h5 className="text-[#444] text-[18px] md:text-[22px] font-medium mb-5">
            Trusted Experts in{" "}
            <span className="text-[#0A66C2]">Fund Recovery</span>
          </h5>
          <p className="text-[#333] text-[16px] md:text-[18px] leading-[26px] tracking-[0.5px] text-justify">
            At <strong>Recovery Vault</strong>, we specialize in helping
            individuals and businesses recover funds lost to cryptocurrency
            scams, investment frauds, and unauthorized bank transfers. Our
            global network of financial investigators, blockchain analysts, and
            legal consultants work relentlessly to give you the best possible
            chance at reclaiming your lost money.
            <br />
            <br />
            With a strict focus on confidentiality, ethical practices, and
            transparency, we strive to make a stressful situation easier to
            handle. We are not just a service — we are your partner in seeking
            justice and financial recovery. Get started today and take back
            control of your financial future.
          </p>

          <div className="mt-8">
            <Link to="/contact">
              <button className="text-[16px] md:text-[18px] bg-[#0A66C2] text-white px-6 py-3 rounded-md transition duration-500 hover:bg-black">
                Talk to Our Experts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
