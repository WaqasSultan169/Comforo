import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    title: "Embroidred Premium Bra",
    variant: "Pink / 32-B",
    price: "Rs.2,798.00",
    quantity: 2,
    image:
      "https://comfora.pk/cdn/shop/files/16_d1814ca8-30a5-41d9-86b0-4ba664855938.jpg?v=1738324761&width=160",
  },
  {
    id: 2,
    title: "Lace Bra For Daily Use (Lightly Padded)",
    variant: "Beige / 32-B",
    price: "Rs.1,399.00",
    quantity: 1,
    image:
      "https://comfora.pk/cdn/shop/files/20_2e604f87-6df6-43d1-9aee-1fb66dc4abfb.jpg?v=1738913734&width=160",
  },
];

export default function CartPage() {
    const [showEstimate, setShowEstimate] = useState(false);
  return (
    <section className="py-[250px] px-4 md:px-10 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl text-gray-800 text-center font-bold mb-6">Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Product Table */}
          <div className="flex-1 overflow-x-auto border rounded-lg">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-sm font-semibold text-gray-700">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4 w-24 text-center">Quantity</th>
                  <th className="p-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4 flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-gray-500 text-sm">{item.variant}</p>
                        <div className="block sm:hidden mt-1">
                          <input
                            type="number"
                            value={item.quantity}
                            className="w-16 border rounded px-2 py-1 text-center"
                          />
                          <a href="#" className="ml-3 text-xs text-red-500">
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="hidden sm:table-cell text-center align-middle p-4">
                      <input
                        type="number"
                        value={item.quantity}
                        className="w-16 border rounded px-2 py-1 text-center"
                      />
                      <div>
                        <a href="#" className="text-xs text-red-500 mt-1 block">
                          Remove
                        </a>
                      </div>
                    </td>
                    <td className="text-right align-middle p-4 text-gray-700">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Estimated Shipping Section */}
          <div className="border rounded-lg p-4 mt-9 bg-gray-50">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowEstimate(!showEstimate)}
            >
                <div className="flex items-center justify-center mt-4">
                <FontAwesomeIcon icon={faTruck} className="mr-2 text-gray-700" />
                <span className="text-sm font-semibold text-gray-800">Estimated Shipping</span>
                </div>

              {showEstimate ? (
                <ChevronUp className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              )}
            </div>

            {showEstimate && (
            <div className="mt-4">
                <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                    Country
                    </label>
                    <select className="w-full border rounded px-3 py-2">
                    <option>Pakistan</option>
                    <option>United States</option>
                    <option>Canada</option>
                    </select>
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                    ZIP Code
                    </label>
                    <input
                    type="text"
                    placeholder="Enter ZIP Code"
                    className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div className="w-full md:w-auto">
                    <button className="w-full md:w-auto px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500">
                    Estimate
                    </button>
                </div>
                </div>
            </div>
            )}
          </div>
          </div>
          

          {/* Right: Checkout Box */}
          <div className="w-full lg:w-1/3 border rounded-lg p-6 bg-gray-50 h-fit">
            <h2 className="text-xl text-center font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2 text-gray-600 text-sm">
              <span>Subtotal</span>
              <span className="font-medium">Rs.4,197.00</span>
            </div>
            <div className="flex justify-between mb-2 py-5 font-bold text-gray-800 text-2xl">
              <span>Total</span>
              <span className="font-large font-bold">Rs.4,197.00 PKR</span>
            </div>
            <p className="text-xs text-center text-gray-500 mb-4">
            Taxes and{' '}
            <Link
                to="/policies/shipping-policy"
                className="text-blue-600 hover:underline"
            >
                shipping
            </Link>{' '}
            calculated at checkout.
            </p>

            <textarea
              id="orderNote"
              rows="3"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 mb-3"
              placeholder="Add a note to your order"
            ></textarea>
           <div className="flex justify-center items-center">
           <button className="bg-black hover:bg-gray-600 text-white font-semibold py-4 px-9 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
             Checkout
            </button>

           </div>


          </div>
        </div>
      </div>
    </section>
  );
}
