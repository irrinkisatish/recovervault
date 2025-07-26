import React from "react";

const Policy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">Shipping Policy</h1>
      <p className="text-sm text-gray-600 text-center mb-8">
        Effective Date: 1/12/2021
      </p>

      <p className="mb-4">
        Thank you for shopping at{" "}
        <span className="font-semibold text-indigo-600">
          Solomon Trading LLC
        </span>
        . We strive to provide fast and reliable shipping to ensure your order
        arrives as quickly as possible.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Processing Time</h2>
      <p className="mb-2">
        All orders are processed within{" "}
        <span className="font-bold text-indigo-600">5</span> business days,
        excluding weekends and holidays.
      </p>
      <p className="mb-2">
        Orders placed after{" "}
        <span className="font-bold text-indigo-600">
          [cut-off time, e.g., 3:00 PM]
        </span>{" "}
        will be processed the next business day.
      </p>
      <p className="mb-4">
        You will receive an email notification once your order has been shipped,
        along with a tracking number (if applicable).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        2. Shipping Methods and Rates
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>
          <strong>Standard Shipping:</strong> Estimated delivery time is{" "}
          <span className="font-bold text-indigo-600">15</span> business days.
          Shipping costs are calculated at checkout.
        </li>
        <li>
          <strong>Expedited Shipping:</strong> Estimated delivery time is{" "}
          <span className="font-bold text-indigo-600">[X]</span> business days.
          Shipping costs are calculated at checkout.
        </li>
        <li>
          <strong>Overnight Shipping:</strong> Available for orders placed by{" "}
          <span className="font-bold text-indigo-600">12:00 PM</span>. Estimated
          delivery time is{" "}
          <span className="font-bold text-indigo-600">[X]</span> business days.
          Shipping costs are calculated at checkout.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Shipping Costs</h2>
      <p className="mb-2">
        Shipping costs are based on weight, destination, and selected shipping
        method.
      </p>
      <p className="mb-4">
        Free shipping is available for orders over{" "}
        <span className="font-bold text-indigo-600">[Insert amount]</span> to{" "}
        <span className="font-bold text-indigo-600">
          [eligible countries or regions]
        </span>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        4. International Shipping
      </h2>
      <p className="mb-2">
        We currently offer international shipping to the following countries:{" "}
        <span className="font-bold text-indigo-600">[List of countries]</span>.
      </p>
      <p className="mb-4">
        Customs duties and taxes may apply and are the responsibility of the
        customer.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        5. Shipping Restrictions
      </h2>
      <p className="mb-4">
        We do not ship to P.O. Boxes, APO/FPO addresses, or{" "}
        <span className="font-bold text-indigo-600">
          [other specific locations]
        </span>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Order Tracking</h2>
      <p className="mb-4">
        Once your order has shipped, you will receive an email with a tracking
        number.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        7. Lost or Damaged Shipments
      </h2>
      <p className="mb-4">
        If your order is lost or damaged, contact us at{" "}
        <a
          href="mailto:Admin@solmns.com"
          className="font-bold text-indigo-600 underline hover:text-indigo-800"
        >
          Admin@solmns.com
        </a>{" "}
        within <span className="font-bold text-indigo-600">7</span> days of
        delivery.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Address Accuracy</h2>
      <p className="mb-4">
        Please ensure your shipping address is correct. We are not responsible
        for delays due to incorrect information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        9. Returns and Exchanges
      </h2>
      <p className="mb-4">
        We want you to be fully satisfied with your purchase. If for any reason
        you are not happy with your order, you may return or exchange eligible
        items within <span className="font-bold text-indigo-600">14 days</span>{" "}
        of delivery.
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Items must be returned in their original condition — unused, unwashed,
          and with all original tags and packaging intact.
        </li>
        <li>
          Customized or final sale items are non-returnable and non-exchangeable
          unless defective or damaged upon arrival.
        </li>
        <li>
          Return shipping costs are the responsibility of the customer, unless
          the return is due to our error (wrong or defective item).
        </li>
      </ul>
      <p className="mb-4">
        To initiate a return or exchange, please contact our support team at{" "}
        <a
          href="mailto:Admin@solmns.com"
          className="text-indigo-600 underline hover:text-indigo-800"
        >
          Admin@solmns.com
        </a>{" "}
        with your order number and reason for return.
      </p>
      <p className="mb-4">
        Once your return is received and inspected, we will notify you of the
        approval or rejection of your refund or exchange. Approved returns will
        be processed within{" "}
        <span className="font-bold text-indigo-600">7-10 business days</span>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">10. Refund Policy</h2>
      <p className="mb-4">
        Refunds are processed once we receive and inspect your returned item.
        Approved refunds will be credited back to your original payment method
        within <span className="font-bold text-indigo-600">7-10</span> business
        days.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        11. Cancellation Policy
      </h2>
      <p className="mb-4">
        Orders can be canceled within{" "}
        <span className="font-bold text-indigo-600">24</span> hours of purchase,
        provided the order hasn't been shipped yet. If shipped, the return
        process must be followed instead.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        12. Changes to the Shipping Policy
      </h2>
      <p className="mb-4">
        We reserve the right to update this policy at any time. Changes will be
        posted on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">13. Contact Us</h2>
      <p className="mb-1">If you have any questions, contact us at:</p>
      <p className="font-bold text-indigo-600">
        <a
          href="mailto:Admin@solmns.com"
          className="underline hover:text-indigo-800"
        >
          Admin@solmns.com
        </a>
      </p>
    </div>
  );
};

export default Policy;
