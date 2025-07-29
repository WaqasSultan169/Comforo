import React from "react";

export default function PolicyPage() {
  return (
    <div className="container mx-auto px-8 py-[250px] max-w-4xl bg-gray-50">
      <div className="space-y-10">
        <h1 className="text-4xl font-bold text-center mb-[100px]">
          Pricing, Payment, Shipping & Delivery Policy
        </h1>

        <div className="prose prose-sm sm:prose-base max-w-none">
          <p className="mb-4 font-medium">Last Updated: January 31, 2025</p>

          <p className="mb-4">
            At Comfora, we aim to provide a seamless shopping experience with
            clear and transparent policies regarding pricing, payment,
            shipping, and delivery. Please review the details below before
            placing an order.
          </p>

          <h2 className="text-xl font-bold mt-4 mb-4">1. Pricing Policy</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>All prices are listed in Pakistani Rupees (PKR).</li>
            <li>Prices include applicable taxes (if any).</li>
            <li>
              We reserve the right to change prices without notice. The price
              at the time of purchase will apply.
            </li>
            <li>
              Promotional offers may be available for a limited time and cannot
              be combined unless stated.
            </li>
            <li>
              In case of pricing errors, Comfora reserves the right to cancel
              the order and issue a refund.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-4 mb-4">2. Payment Policy</h2>
          <h3 className="font-semibold mb-2">Accepted Payment Methods:</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>✅ Cash on Delivery (COD)</li>
            <li>✅ Credit/Debit Cards – Visa, Mastercard, and local cards</li>
            <li>✅ Online Bank Transfer – for major Pakistani banks</li>
            <li>✅ Mobile Wallets – Easypaisa, JazzCash</li>
          </ul>

          <h3 className="font-semibold mb-2">Payment Terms:</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>All online payments use secure third-party gateways.</li>
            <li>COD orders must be paid in full at delivery.</li>
            <li>
              Failed/declined transactions may require alternative payment.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-4 mb-4">
            3. Shipping & Delivery Policy
          </h2>
          <h3 className="font-semibold mb-2">Shipping Charges:</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Standard Shipping Fee:</strong> Based on weight,
              location, and courier.
            </li>
            <li>
              <strong>Free Shipping:</strong> Occasionally available during
              promotions.
            </li>
            <li>
              <strong>International Shipping:</strong> Not currently offered.
            </li>
          </ul>

          <h3 className="font-semibold mb-2">Estimated Delivery Time:</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>📍 Major Cities: 3–5 business days</li>
            <li>📍 Remote Areas: 5–7 business days</li>
            <li>
              📍 Holidays/Festive Seasons: May experience longer delivery
              windows
            </li>
          </ul>

          <h3 className="font-semibold mb-2">Shipping Terms & Conditions:</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Orders processed within 24–48 hours of payment confirmation</li>
            <li>
              Tracking number shared via email or SMS once shipped
            </li>
            <li>
              We are not liable for courier delays or incorrect address issues
            </li>
            <li>
              Re-delivery charges may apply if a package is returned due to
              incorrect info or failed delivery
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-4 mb-4">
            4. Order Tracking & Delivery
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Use your tracking number (sent via email/SMS) to track your order
            </li>
            <li>
              If delayed beyond expected time, contact customer support
            </li>
            <li>
              Two delivery attempts will be made; then the package returns to
              Comfora
            </li>
            <li>
              Re-delivery charges may apply after two failed attempts
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-4 mb-4">
            5. Damaged, Missing, or Wrong Items
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Email us at <a href="mailto:comforapk@gmail.com">comforapk@gmail.com</a> within 24 hours
            </li>
            <li>Attach clear photos of packaging and item</li>
            <li>We’ll investigate and arrange a refund or replacement</li>
          </ul>

          <h3 className="font-semibold mb-2">🚫 No Refunds or Replacements If:</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Issue is reported after 24 hours</li>
            <li>Item has been used, washed, or altered</li>
          </ul>

          <h2 className="text-xl font-bold mt-4 mb-4">
            6. Cancellation of Orders Before Shipping
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Orders can be canceled within 12 hours of placement</li>
            <li>
              Once processed/shipped, cancellations are not accepted
            </li>
            <li>
              Refunds for prepaid cancellations take 5–7 business days
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-4 mb-4">7. Contact Us</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>📧 Email: <a href="mailto:comforapk@gmail.com">comforapk@gmail.com</a></li>
            <li>📞 Customer Support: Live chat on our website</li>
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
