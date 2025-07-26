import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <section className="py-5 px-4 md:px-12 lg:px-20 bg-gray-50 text-gray-800">
      {/* Banner Image */}
      <div className="w-full mb-12 ">
        <img
          src="https://image.pollinations.ai/prompt/Services%20FUND%20RECOVERY,%20smaller%20text,%20smaller%20safe%20and%20coins"
          alt="Our Services"
          className="w-full h-40 md:h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A66C2]">
          Our Recovery Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          We offer specialized fund recovery solutions for victims of online
          fraud.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Crypto Recovery */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 text-[#0A66C2]">
            Crypto Recovery
          </h2>
          <p className="text-gray-700 mb-4">
            Lost money to a crypto scam? Our expert blockchain analysts can
            trace wallet transactions and assist in compiling reports for legal
            and regulatory bodies.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>Bitcoin & Altcoin tracing</li>
            <li>Exchange platform disputes</li>
            <li>Wallet forensic analysis</li>
          </ul>
        </div>

        {/* Bank Transfer Fraud */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 text-[#0A66C2]">
            Bank Transfer Fraud
          </h2>
          <p className="text-gray-700 mb-4">
            Have you experienced unauthorized bank withdrawals or wire transfer
            fraud? We help initiate communication with financial institutions
            and assist in filing necessary fraud claims.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>Wire transfer scam assistance</li>
            <li>Bank coordination & evidence review</li>
            <li>Document preparation for dispute filing</li>
          </ul>
        </div>

        {/* Investment Scam Recovery */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 text-[#0A66C2]">
            Investment Scam Recovery
          </h2>
          <p className="text-gray-700 mb-4">
            Fake brokers or fraudulent trading platforms stole your money? Our
            consultants review your case, collect evidence, and escalate it to
            the proper financial authorities and legal support networks.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>Broker validation & research</li>
            <li>Case escalation to regulators</li>
            <li>Claim documentation assistance</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to start your recovery journey?
        </h3>
        <Link to="/contact">
          <button className="bg-[#0A66C2] text-white px-6 py-3 rounded-md hover:bg-black transition">
            Contact Our Recovery Team
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Collections;
