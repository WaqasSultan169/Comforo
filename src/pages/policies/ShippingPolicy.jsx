import React from "react";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-[240px] px-4 flex items-center justify-center">
      <div className="max-w-4xl p-8 shadow-lg rounded-lg text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold text-center">Shipping Policy</h1>
        <p className="text-center text-sm text-gray-500">
          Last Updated: January 31, 2025
        </p>

        <p>
          At <strong>Comfora</strong>, we aim to provide a seamless shopping
          experience with clear and transparent policies regarding pricing,
          payment, shipping, and delivery. Please review the details below
          before placing an order.
        </p>

        <div>
          <h2 className="text-xl font-semibold">1. Pricing Policy</h2>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>All prices are listed in Pakistani Rupees (PKR).</li>
            <li>
              Prices displayed on our website are final and include applicable
              taxes (if any).
            </li>
            <li>
              We reserve the right to change prices at any time without prior
              notice. However, once an order is placed, the price at the time
              of purchase will apply.
            </li>
            <li>
              Promotional offers, discounts, and sales may be available for a
              limited time and cannot be combined unless explicitly stated.
            </li>
            <li>
              In case of any pricing errors, Comfora reserves the right to
              cancel the order and refund the amount.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. Payment Policy</h2>
          <p className="mt-2">We offer multiple secure payment methods:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>✅ Cash on Delivery (COD)</li>
            <li>✅ Credit/Debit Cards (Visa, Mastercard)</li>
            <li>✅ Online Bank Transfer</li>
            <li>✅ Mobile Wallets (Easypaisa/JazzCash)</li>
          </ul>
          <p className="mt-2">
            All online payments are processed through secure third-party
            gateways. COD orders must be paid in full at delivery. Failed
            transactions may require alternative payment methods.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. Shipping & Delivery Policy</h2>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Shipping Charges:</strong> Vary based on weight, location,
              and courier. Free shipping may be available on offers.
            </li>
            <li>
              <strong>International Shipping:</strong> Not available currently.
            </li>
            <li>
              <strong>Estimated Delivery:</strong> 3–5 days for major cities,
              5–7 days for remote areas.
            </li>
            <li>
              Orders are processed within 24–48 hours of payment confirmation.
            </li>
            <li>
              You will receive a tracking number via SMS/email upon shipment.
            </li>
            <li>
              We are not responsible for courier delays or incorrect address
              entries. Re-shipping fee may apply if returned.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Order Tracking & Delivery</h2>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Use the tracking number provided to monitor your shipment.
            </li>
            <li>
              For delayed packages, contact our support team for help.
            </li>
            <li>
              Delivery attempts will be made twice. After that, the package is
              returned, and re-delivery charges may apply.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. Damaged, Missing, or Wrong Items</h2>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Email us at <a href="mailto:comforapk@gmail.com" className="text-blue-600 underline">comforapk@gmail.com</a> within 24 hours of
              delivery.
            </li>
            <li>Attach clear images of the damaged/incorrect items.</li>
            <li>
              Items will not be replaced or refunded if reported after 24 hours
              or if used/washed/altered.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            6. Cancellation of Orders Before Shipping
          </h2>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Orders can be canceled within 12 hours of placement.</li>
            <li>Once processed or shipped, cancellation is not possible.</li>
            <li>Refunds for canceled prepaid orders will be processed in 5–7 business days.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p className="mt-2">
            For any queries:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>
              📧 Email:{" "}
              <a href="mailto:comforapk@gmail.com" className="text-blue-600 underline">
                comforapk@gmail.com
              </a>
            </li>
            <li>📞 Chat: Available on our website</li>
            <li>
              🏢 Address: Third Floor, Amjad Plaza, Bank Rd, Saddar, Rawalpindi,
              Punjab, Pakistan, 46000
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
