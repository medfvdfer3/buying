import React, { useState } from 'react';
import { FaLock, FaPlus } from 'react-icons/fa';

const AddMoneyPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 mt-40">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Add Money to Wallet</h1>
        <p className="text-gray-500">Top up your balance to shop faster and easier</p>
      </div>

      {/* Current Balance */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-gray-600 mb-2">Current Balance</h2>
        <p className="text-3xl font-bold text-blue-600">$0.00</p>
        <button className="mt-2 text-blue-600 underline">View Wallet History</button>
      </div>

      {/* Enter Amount */}
      <div className="bg-white p-4 rounded shadow space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Enter Amount</label>
          <input
            type="number"
            placeholder="$0.00"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Payment Method Dropdown */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Select Payment Method</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="card">Credit Card / Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="apple">Apple Pay</option>
            <option value="google">Google Pay</option>
            <option value="voucher">Voucher / Gift Code</option>
          </select>
        </div>

        {/* Add New Card */}
        <div className="flex items-center gap-2 cursor-pointer text-blue-600 hover:underline">
          <FaPlus />
          <span>Add New Card</span>
        </div>

        {/* Promo Code */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Have a Promo Code?</label>
          <input
            type="text"
            placeholder="Enter promo code"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Add Funds Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
          Add Funds
        </button>

        {/* Security Notice */}
        <div className="flex items-center justify-center text-gray-500 text-sm mt-2">
          <FaLock className="mr-2" />
          All transactions are secured and encrypted
        </div>
      </div>
    </div>
  );
};

export default AddMoneyPage;
