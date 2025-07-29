import React from 'react';
import { motion } from 'framer-motion';

export default function ThankYouModal({ onContinue }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center"
      >
        <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Thank you for your order!</h2>
        <p className="text-gray-700 mb-6">Your order has been successfully placed. We’ll notify you once it ships.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onContinue}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      </motion.div>
    </div>
  );
}
