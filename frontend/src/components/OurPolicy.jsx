import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Submit Your Details",
    description:
      "Fill out our secure online form to initiate the process. We ensure your data is protected with industry-standard encryption.",
  },
  {
    title: "Free Consultation",
    description:
      "Our team will contact you for a no-obligation consultation and initial assessment of your case.",
  },
  {
    title: "Pay Review Fee",
    description:
      "After the consultation, you can choose to proceed by paying a small case review fee.",
  },
  {
    title: "Investigation Begins",
    description:
      "Our expert recovery team begins investigating your case immediately using proven techniques.",
  },
  {
    title: "Receive Updates",
    description:
      "You’ll get regular progress reports and be kept in the loop until resolution.",
  },
];

const OurPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 p-6 md:p-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-700 mb-12">
        How It Works
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mt-1 text-green-600">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-1">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;
