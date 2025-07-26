import React from "react";

const faqs = [
  {
    question: "Do you guarantee recovery?",
    answer: "No, but we strive for the best possible outcome.",
  },
  {
    question: "How much do you charge?",
    answer: "See our transparent pricing above.",
  },
  {
    question: "Is my information safe?",
    answer: "Yes, we use advanced security encryption.",
  },
  {
    question: "Do you work internationally?",
    answer: "Yes, we handle global cases.",
  },
  {
    question: "How long does recovery take?",
    answer: "It varies based on the case complexity, typically 1–6 weeks.",
  },
  {
    question: "Do you require payment upfront?",
    answer: "Only the case review fee; success fees apply only upon recovery.",
  },
  {
    question: "How do I get started?",
    answer: "Use the 'Get Help' form on our homepage to begin.",
  },
  {
    question: "Can I speak with someone directly?",
    answer: "Yes, we offer email and chat support for case guidance.",
  },
  {
    question: "What info do I need to provide?",
    answer:
      "Proof of transaction, screenshots, wallet address, or account IDs.",
  },
  {
    question: "What types of scams do you handle?",
    answer:
      "Crypto thefts, bank frauds, Ponzi schemes, fake investment platforms.",
  },
];

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {faq.question}
            </h2>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
