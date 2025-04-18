import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div>
        <section class="flex flex-col md:flex-row items-center h-auto md:h-screen w-full py-16 md:py-24 bg-white">
          <div class="w-full max-w-[1130px] px-4 md:px-0 mx-auto flex flex-col md:flex-row items-center justify-around">
            <img
              src={assets.about_img}
              class="w-[300px] md:w-[400px] rounded-[12px] mb-8 md:mb-0"
            />
            <div class="w-full md:w-[540px] text-center md:text-left">
              <h2 class="text-[#333] text-[25px] md:text-[50px] font-semibold mb-2.5">
                About Us
              </h2>
              <h5 class="text-[#333] text-[18px] md:text-[22px] font-medium mb-5">
                Your One-Stop{" "}
                <span class="text-[#ed139a]">Shopping Destination</span>
              </h5>
              <p class="text-[#333] text-[16px] md:text-[18px] leading-[25px] tracking-[1px]  text-justify">
                Welcome to Solomon Trading LLC — your one-stop shop for all
                things stylish and practical! We bring you a diverse selection
                of fashion goods, unique gift items, high-quality home decor,
                and wholesale deals on used cars and scrap materials. Whether
                you're shopping for the latest fashion trends, seeking a
                thoughtful gift, or looking to upgrade your vehicle, we’ve got
                you covered. Our mission is to provide customers with a
                hassle-free shopping experience that includes exceptional
                customer service, fast shipping, and a wide array of
                high-quality products at unbeatable prices. Explore our
                offerings and enjoy a seamless shopping experience with Solomon
                Trading LLC — where convenience and quality meet.
              </p>
              <div class="mt-8">
                <a
                  href="#"
                  class="text-[16px] md:text-[18px] bg-[#ed139a] text-white no-underline border-none px-6 py-3 rounded-md transition duration-500 hover:bg-black"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
