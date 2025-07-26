// src/components/CaseSubmissionForm.jsx
import React, { useState } from "react";

const pricing = {
  "Crypto Scam": 150,
  "Bank Fraud": 200,
  "Investment Scam": 250,
};

const CaseSubmissionForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Crypto Scam",
    amount: "",
    details: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const initialFee = pricing[form.type] || 0;
  const commission = form.amount ? 0.1 * parseFloat(form.amount) : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Redirect to payment process via crypto gateway");
    // Add payment gateway logic here
  };

  return (
    <section
      id="case-form"
      className="bg-white py-12 px-6 md:px-12 rounded-md shadow-md mt-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Start Your Recovery Today
      </h2>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Type of Fraud</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            {Object.keys(pricing).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Amount Lost ($)</label>
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Details</label>
          <textarea
            name="details"
            rows="4"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        <div className="bg-blue-50 p-4 rounded border border-blue-200 text-sm text-blue-800">
          <p>
            <strong>Initial Fee:</strong> ${initialFee} (required before
            investigation)
          </p>
          {form.amount && (
            <p>
              <strong>Success Commission:</strong> 10% of ${form.amount} = $
              {commission.toFixed(2)}
            </p>
          )}
          <p className="mt-2">
            <strong>Payment Method:</strong> Bitcoin or other cryptocurrencies
            (powered by gateway)
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Proceed to Payment
        </button>
      </form>
    </section>
  );
};

export default CaseSubmissionForm;
