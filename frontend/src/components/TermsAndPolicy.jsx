import React from "react";
import {
  ShieldCheck,
  FileText,
  LockKeyhole,
  AlertTriangle,
} from "lucide-react";

export default function TermsAndPolicy() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-gray-800 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <ShieldCheck size={48} className="mx-auto text-blue-700 mb-4" />
        <h1 className="text-4xl font-bold">
          Terms & Conditions and Privacy Policy
        </h1>
        <p className="text-gray-600 mt-2">
          Please read this page carefully before using our services.
        </p>
      </div>

      {/* Terms Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <FileText size={28} className="text-blue-600" />
          <h2 className="text-2xl font-semibold">Terms & Conditions</h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          By accessing FundRecoveryPro, you agree to be bound by these Terms and
          Conditions and all applicable laws and regulations. You must not use
          our platform for any illegal or unauthorized purpose. All case review
          fees are non-refundable, regardless of outcome. We reserve the right
          to modify these terms at any time, and it is your responsibility to
          review them periodically.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Eligibility:</strong> You must be 18 years or older to use
            our services.
          </li>
          <li>
            <strong>Service Disclaimer:</strong> We provide investigative and
            advisory services only. No guaranteed results.
          </li>
          <li>
            <strong>Payment:</strong> All payments are processed securely.
            Refunds are not provided after service initiation.
          </li>
          <li>
            <strong>Termination:</strong> We may terminate services if terms are
            violated or misuse is detected.
          </li>
          <li>
            <strong>Intellectual Property:</strong> All site content, including
            design, text, and graphics, is protected by copyright.
          </li>
        </ul>
      </div>

      {/* Privacy Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <LockKeyhole size={28} className="text-blue-600" />
          <h2 className="text-2xl font-semibold">Privacy Policy</h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Your privacy is critically important to us. At FundRecoveryPro, we are
          committed to protecting your personal data. This policy outlines how
          we collect, use, and safeguard your information.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Data Collection:</strong> We collect information when you
            fill forms, contact support, or browse our site. This may include
            your name, email, phone number, and details about your fraud case.
          </li>
          <li>
            <strong>Data Use:</strong> Information is used solely to analyze
            your case, provide service updates, and ensure compliance with legal
            requirements.
          </li>
          <li>
            <strong>Third Party Sharing:</strong> We do not sell or trade your
            information. We may share details with legal or financial
            institutions as part of investigations—with your consent.
          </li>
          <li>
            <strong>Security:</strong> We use HTTPS, encryption, firewalls, and
            anti-malware tools to keep your data safe.
          </li>
          <li>
            <strong>Cookies:</strong> Our site uses cookies to improve
            functionality. You can disable them in your browser settings.
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
        <div className="flex items-start gap-3">
          <AlertTriangle size={24} className="text-yellow-500 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-700">
              Disclaimer
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              FundRecoveryPro is not a financial institution, government agency,
              or law enforcement body. Our role is limited to consultation and
              investigation based on publicly available tools and
              client-submitted data. Results may vary depending on the
              complexity and timeline of the case. By using our service, you
              agree to hold us harmless from any loss or damage related to
              outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Last Note */}
      <p className="text-xs text-center text-gray-400 mt-10">
        Last updated: July 24, 2025
      </p>
    </section>
  );
}
