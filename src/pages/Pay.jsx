import React, { useState } from "react";
import { FaCcVisa, FaPaypal, FaWallet, FaLock, FaTruck, FaRocket } from "react-icons/fa";

const PaymentPage = () => {
  const [operator, setOperator] = useState("Vodafone Cash");
  const [amount, setAmount] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <div className="pt-36 px-4 pb-12 bg-gray-50 min-h-screen space-y-12">
      {/* Main Payment Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order Details */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Choose Operator</label>
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            >
              <option>Vodafone Cash</option>
              <option>Orange Cash</option>
              <option>Etisalat Cash</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Amount</label>
            <select
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full border px-4 py-2 rounded"
            >
              {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  ${num}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
          <div className="flex gap-4 mb-6">
            <div
              onClick={() => setPaymentMethod("Visa")}
              className={`flex-1 p-4 rounded border cursor-pointer flex flex-col items-center gap-2 ${
                paymentMethod === "Visa" ? "border-blue-600" : "border-gray-300"
              }`}
            >
              <FaCcVisa className="text-3xl text-blue-600" />
              <span>Visa</span>
            </div>
            <div
              onClick={() => setPaymentMethod("PayPal")}
              className={`flex-1 p-4 rounded border cursor-pointer flex flex-col items-center gap-2 ${
                paymentMethod === "PayPal" ? "border-blue-600" : "border-gray-300"
              }`}
            >
              <FaPaypal className="text-3xl text-blue-600" />
              <span>PayPal</span>
            </div>
            <div
              onClick={() => setPaymentMethod("Wallet")}
              className={`flex-1 p-4 rounded border cursor-pointer flex flex-col items-center gap-2 ${
                paymentMethod === "Wallet" ? "border-blue-600" : "border-gray-300"
              }`}
            >
              <FaWallet className="text-3xl text-blue-600" />
              <span>My Wallet</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name on Card</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border px-3 py-2 rounded"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-start gap-2 mt-4">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm">
                By Clicking Checkout, You agree to our <a href="#" className="text-blue-600 underline">Terms of Services</a> & <a href="#" className="text-blue-600 underline">Privacy Policy</a>
              </span>
            </div>
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow flex gap-3 items-start">
          <FaLock className="text-blue-600 text-2xl mt-1" />
          <div>
            <h4 className="text-lg font-bold text-blue-600">Secure Payment</h4>
            <p className="text-sm text-gray-600">
              Your payment is encrypted and 100% secure. We don’t store any card information.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex gap-3 items-start">
          <FaTruck className="text-blue-600 text-2xl mt-1" />
          <div>
            <h4 className="text-lg font-bold text-blue-600">Delivery Info</h4>
            <p className="text-sm text-gray-600">
              Your digital code will be sent instantly to your email after successful payment.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex gap-3 items-start">
          <FaRocket className="text-blue-600 text-2xl mt-1" />
          <div>
            <h4 className="text-lg font-bold text-blue-600">Fast & Safe Delivery</h4>
            <p className="text-sm text-gray-600">
              Instant and secure delivery. All details are sent to your email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;