import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-12 text-[#1c1c1c] font-sans text-[15px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div>
            <h3 className="text-[29px] font-bold leading-snug mb-6">
              Sign up for new stories<br />
              and personal offers
            </h3>
            <form className="relative w-full max-w-sm">
              <input
                type="email"
                placeholder="E-mail"
                required
                className="w-full h-[60px] border border-gray-300 rounded-md py-3 px-4 pr-10 text-[15px] placeholder:text-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-300"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M1 1L7 4L1 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-bold text-[15px] mb-6">COMFORA</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/Search" className="hover:text-black">Search</Link></li>
              <li><Link to="/about-comfora" className="hover:text-black">About Comfora</Link></li>
              <li><Link to="terms-conditions" className="hover:text-black">Terms & Conditions</Link></li>
              <li><Link to="/refund-cancellation-exchange-policy" className="hover:text-black">Refund, Cancellation & Exchange Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link to="/pricing-payment-shipping-delivery-policy" className="hover:text-black">Pricing, Payment, Shipping & Delivery Policy</Link></li>
              <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
            </ul>
          </div>

          <div className="md:pr-6">
            <h4 className="font-bold text-[15px] mb-6">About Comfora</h4>
            <p className="text-gray-500 leading-[2.15]">
              Comfora is a registered company in Pakistan, offering a wide range of imported,
              internationally sourced daily-use essentials. We focus on quality, comfort,
              and affordability, providing premium intimate wear and undergarments to ensure
              a seamless online shopping experience. Our goal is to bring high-quality products
              straight to your doorstep with convenience and reliability.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-center space-x-6 text-black">
            <a
              href="https://www.facebook.com/share/1CD69rtUcA/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://www.instagram.com/comfora.pk?igsh=MTJmY21zdHprdWY4Yg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="tel:+92 328 9159622"
              className="text-black"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>

          
        </div>
        <p className="justify-start pt-[60px] mt-[50px] md:mt-0 text-gray-500 text-sm">
            © 2025, COMFORA.Powered By ------ 
          </p>
      </div>
    </footer>
  );
}
