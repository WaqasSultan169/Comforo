import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 z-50 flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
        <h1 className="font-bold text-2xl pl-[120px]">COMFORA</h1>
        <FaShoppingCart className="text-2xl pr-[100px] cursor-pointer" onClick={() => navigate('/viewcart')} />
      </header>

      <div className="lg:flex gap-6 px-6 lg:px-16 py-[100px]">
        <div className="bg-white p-6 flex-1 max-h-100vh overflow-y-auto pr-2 hide-scrollbar">
          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-2xl mb-2">Contact</h2>
              <input
                type="text"
                placeholder="Email or mobile phone number"
                className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <label className="flex items-center mt-3 text-sm">
                <input type="checkbox" className="mr-2" />
                Email me with news and offers
              </label>
            </div>

            <div>
              <h2 className="font-semibold text-2xl mb-2">Delivery</h2>
              <select className="w-full border rounded px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <option>Pakistan</option>
              </select>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <input placeholder="First name" className="border rounded px-4 py-3 text-sm w-full" />
                <input placeholder="Last name" className="border rounded px-4 py-3 text-sm w-full" />
              </div>

              <input placeholder="Address" className="w-full border rounded px-4 py-3 text-sm mb-3" />
              <input placeholder="Apartment, suite, etc. (optional)" className="w-full border rounded px-4 py-3 text-sm mb-3" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <input placeholder="City" className="border rounded px-4 py-3 text-sm w-full" />
                <input placeholder="Postal code (optional)" className="border rounded px-4 py-3 text-sm w-full" />
              </div>

              <input placeholder="Phone" className="w-full border rounded px-4 py-3 text-sm mb-3" />

              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Save this information for next time
              </label>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Shipping method</h2>
              <div className="border rounded p-3 flex justify-between bg-yellow-50 border-yellow-300 text-sm">
                <span>Delivery Fee</span>
                <strong>FREE</strong>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-2xl mb-2">Payment</h2>
              <span className = "text-sm text-gray-400  py-4">All transactions are secure and encrypted.</span>
              <div className="border rounded p-4 space-y-3">
                <label className="flex items-center space-x-3 text-sm">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Safepay Checkout - pay with debit & credit cards</span>
                </label>
                <label className="flex items-center space-x-3 text-sm">
                  <input type="radio" name="payment" />
                  <span>Cash on Delivery (COD)</span>
                </label>
                <label className="flex items-center space-x-3 text-sm">
                  <input type="radio" name="payment" />
                  <span>Bank Transfer</span>
                </label>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Billing address</h2>
              <div className="border rounded p-4 space-y-3 text-sm">
                <label className="flex items-center space-x-3">
                  <input type="radio" name="billing" defaultChecked />
                  <span>Same as shipping address</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="billing" />
                  <span>Use a different billing address</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded mt-6 hover:opacity-90 text-sm">
              Pay now
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[400px] h-[calc(100vh-100px)] overflow-y-scroll pr-2 hide-scrollbar">
          <div className="border rounded p-6 shadow-sm bg-transparent">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/70"
                alt="Product"
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium">Single Padded Floral Printed</h3>
                <p className="text-xs text-gray-500">Maroon / 32-B</p>
              </div>
              <div className="text-sm font-medium">Rs 1,499.00</div>
            </div>

            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs 1,499.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span>Rs 1,499.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
