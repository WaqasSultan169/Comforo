import React from "react";
import { FaShippingFast, FaHeadset, FaTags, FaLock } from "react-icons/fa";

const items = [
  {
    icon: <FaShippingFast className="text-gray-700 text-2xl md:text-3xl" />,
    title: "Free shipping",
    text: (
      <>
        Enjoy 100% free shipping on all orders above <strong>PKR 3,000</strong>! 🚚
      </>
    ),
  },
  {
    icon: <FaHeadset className="text-gray-700 text-2xl md:text-3xl" />,
    title: "Customer service",
    text: (
      <>
        Reach us via the <strong>Contact form</strong> or the <strong>WhatsApp button</strong>.
        Our <strong>women-led support team</strong> will assist you during <strong>office hours</strong>.
      </>
    ),
  },
  {
    icon: <FaTags className="text-gray-700 text-2xl md:text-3xl" />,
    title: "Refer a friend",
    text: (
      <>
        Refer a friend to Comfora and both enjoy exclusive rewards on your next
        <strong> purchase</strong>!
      </>
    ),
  },
  {
    icon: <FaLock className="text-gray-700 text-2xl md:text-3xl" />,
    title: "Secure payment",
    text: (
      <>
        Shop with confidence – we offer <strong>100%</strong> secure payment options for a
        safe and hassle-free experience!
      </>
    ),
  },
];

export default function AboveFooter() {
  return (
    <section className="bg-gray-150 py-12 px-4 w-[1280px] h-[293px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            {item.icon}
            <p className="font-semibold text-base md:text-lg">{item.title}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
