import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How Can I Place an Order",
    answer:
      "To place an order, simply fill out the quick order form with your Name, Mobile Number, Email, and Address under each product. You will receive an order confirmation call to verify the details.",
  },
  {
    question: "What is the exchange and return policy",
    answer:
      "You can exchange the product within 14 days of receipt if it's unused, in original packaging, with tags intact, and with the Order ID. Report damage within 2 days for exchange or store credit.",
  },
  {
    question: "How long does delivery take",
    answer:
      "Delivery typically takes 4-5 working days in metro cities and 6-8 working days for remote areas. Same-day delivery is available in Lahore for Rs. 500. Orders above Rs. 5000 enjoy free shipping.",
  },
  {
    question: "What payment methods are available",
    answer:
      "We accept Bank Transfers, Credit/Debit Cards, and Easypaisa. Payments for international orders must be made online.",
  },
  {
    question: "What if I need customer support",
    answer:
      "You can contact us via live chat (9 AM - 2 AM), call, text, or WhatsApp at +92 314 1234 567. Use the 'Forgot Password' option on the login page for login issues.",
  },
  {
    question: "Any question?",
    answer:
      "You can contact us through our contact page! We will be happy to assist you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 flex justify-center">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-7xl p-6 md:p-12 flex flex-col lg:flex-row gap-10 lg:gap-[110px]">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">FAQ</h2>
          <p className="text-[15px] text-gray-800 mb-2">
            Our customer support is available Monday to Friday: 8am–8:30pm.
          </p>
          <p className="text-gray-500">Average answer time: 24h</p>
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-gray-100 rounded-xl p-6 shadow-sm max-h-[480px] overflow-y-auto">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 last:border-none">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-3 text-left font-semibold text-sm md:text-base"
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] opacity-100 pt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
