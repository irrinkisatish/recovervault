import React from "react";
import { ShieldCheck, Award, Headphones } from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    title: "Expert Recovery Specialists",
    description:
      "Our team has years of experience recovering lost funds from scams and frauds.",
  },
  {
    icon: <Award className="h-10 w-10 text-green-600" />,
    title: "High Success Rate",
    description:
      "We maintain a consistently high recovery success rate for clients globally.",
  },
  {
    icon: <Headphones className="h-10 w-10 text-purple-600" />,
    title: "24/7 Dedicated Support",
    description:
      "Get real-time assistance and updates from our friendly support team.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12 px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We help you recover your funds securely and professionally with the
          help of proven experts.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
