import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <section
      id="contact-details"
      className="py-5 px-4 md:px-8 lg:px-16 bg-gray-50"
    >
      {/* Banner */}
      <div className="w-full h-50 md:h-70 relative mb-12">
        <img
          src={assets.contact_banner}
          alt="Contact Banner"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Info & Map */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 space-y-4">
          <span className="text-sm text-gray-500 uppercase">
            Need Assistance?
          </span>
          <h2 className="text-3xl font-bold text-gray-800">
            Talk to Our Recovery Experts Today
          </h2>

          <h3 className="text-xl font-semibold text-gray-700">
            Office Address
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>200 Clarendon Street, 18th Floor</li>
            <li>Boston, MA 02116</li>
            <li>United States</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700">Contact Info</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <a
                href="mailto:Support@recovervaultpro.online"
                className="text-indigo-600 underline hover:text-indigo-800"
              >
                Support@recovervaultpro.online
              </a>
            </li>
            <li>Phone: +1 606-268-3074</li>
            <li>
              Mon–Fri: 9:00 AM - 6:00 PM <br />
              Sat–Sun: Closed
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps?q=200+Clarendon+Street,+Boston,+MA+02116&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
            title="Company Location"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto p-8 mt-12 border border-gray-300 rounded-lg bg-[#e0f4ff]  shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 uppercase tracking-wider mb-4">
          Submit a Case Inquiry
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below and our team will respond within 24 hours.
        </p>

        <form
          action="https://formsubmit.co/youremail@example.com" // Replace with your working email
          method="POST"
          className="space-y-5"
        >
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              className="w-full border border-black-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-black-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-black-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <select
              name="fraud_type"
              className="w-full border border-black-300 rounded-md p-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option disabled hidden selected>
                Select Fraud Type
              </option>
              <option value="crypto">Crypto Scam</option>
              <option value="bank">Bank Transfer Fraud</option>
              <option value="investment">Investment Scam</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="amount_lost"
              placeholder="Amount Lost (in USD)"
              className="w-full border border-black-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <textarea
              name="details"
              rows="5"
              placeholder="Briefly explain your case..."
              className="w-full border border-black-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Submit Case
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
