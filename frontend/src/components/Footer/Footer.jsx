import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 font-sans mt-2">
      <div className="flex flex-col items-center py-8">
        {/* Social Media Links section has been removed */}

        {/* Footer Links */}
        <ul className="flex flex-wrap justify-center gap-3 mb-4 text-sm">
          <li>
            <NavLink
              to="/testimonials"
              className="hover:text-white transition-colors"
            >
              Testimonials
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/privacyPolicy"
              className="hover:text-white transition-colors"
            >
              How It Works Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/termsconditions"
              className="hover:text-white transition-colors"
            >
              FAQ Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/termspolicy"
              className="hover:text-white transition-colors"
            >
              Terms/Policy
            </NavLink>
          </li>
        </ul>

        {/* Payment Logos */}

        <div className="text-center text-xs text-gray-400 px-4">
          Recover Vault — All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
