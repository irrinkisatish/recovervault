import React from "react";

const Pricing = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-5">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Our Pricing
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Transparent pricing structure designed for your peace of mind.
          </p>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border border-gray-200 text-sm md:text-base">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Service Type</th>
                <th className="py-3 px-6 text-left">Initial Case Review</th>
                <th className="py-3 px-6 text-left">Success Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 hover:bg-pink-50 transition">
                <td className="py-4 px-6">Crypto Recovery</td>
                <td className="py-4 px-6">$100</td>
                <td className="py-4 px-6">10% of recovered funds</td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-pink-50 transition">
                <td className="py-4 px-6">Bank Transfer Fraud</td>
                <td className="py-4 px-6">$100</td>
                <td className="py-4 px-6">8% of recovered funds</td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-pink-50 transition">
                <td className="py-4 px-6">Investment Scam Recovery</td>
                <td className="py-4 px-6">$150</td>
                <td className="py-4 px-6">12% of recovered funds</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-md">
          <p className="text-gray-800 text-md">
            <strong>Note:</strong> We charge an initial case review fee to start
            investigations.
            <br />
            Success fees are only applied{" "}
            <span className="font-semibold">if funds are recovered.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
