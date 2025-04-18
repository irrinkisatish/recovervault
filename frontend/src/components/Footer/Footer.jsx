import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="bg-black text-gray-400 font-sans mt-2">
      <div class="flex flex-col items-center py-8">
        {/*<div class="flex justify-center space-x-6 mb-4 text-2xl">
          <a href="#" class="hover:text-white transition-colors">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#" class="hover:text-white transition-colors">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#" class="hover:text-white transition-colors">
            <i class="fa fa-youtube"></i>
          </a>
          <a href="#" class="hover:text-white transition-colors">
            <i class="fa fa-twitter"></i>
          </a>
        </div>
*/}
        <ul class="flex flex-wrap justify-center gap-6 mb-4 text-sm">
          <li>
            <NavLink to="/contact" class="hover:text-white transition-colors">
              Contact us
            </NavLink>
          </li>

          <li>
            <a href="#" class="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </li>
        </ul>

        <div class="text-center text-xs text-gray-400 px-4">
          Irrinki © 2025 Satish — All rights reserved || Designed By: Satish
        </div>
      </div>
    </footer>
  );
};

export default Footer;
