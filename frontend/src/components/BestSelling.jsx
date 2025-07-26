// src/components/CTASection.jsx
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import CaseSubmissionForm from "./CaseSubmissionForm";

const CTASection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
    // Scroll to form
    setTimeout(() => {
      document
        .getElementById("case-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-16 px-6 text-center rounded-md shadow-lg">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          Ready to Recover Your Funds?
        </h3>
        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
          Don’t wait—our recovery experts are ready to act now. Let’s bring your
          money back safely.
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-700 hover:bg-blue-100 transition-all duration-200 font-semibold flex items-center gap-2 mx-auto"
          onClick={handleClick}
        >
          Start Recovery Now <ArrowRight className="w-5 h-5" />
        </Button>
      </section>

      {showForm && <CaseSubmissionForm />}
    </>
  );
};

export default CTASection;
