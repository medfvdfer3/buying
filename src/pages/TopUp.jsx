import React, { useState } from "react";

const TopUp = () => {
  const [form, setForm] = useState({
    service: "",
    amount: "",
    contact: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can send the data to backend here later
  };

  return (
    <div className="pt-52 min-h-screen bg-gray-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8">Top-Up Request</h1>
      {submitted ? (
        <div className="bg-green-100 text-green-700 p-6 rounded shadow mb-8">
          Your top-up request has been submitted successfully! We will contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Service or Game</label>
            <input
              type="text"
              name="service"
              className="w-full border px-4 py-2 rounded focus:outline-none"
              value={form.service}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Amount or Card Value ($)</label>
            <input
              type="number"
              name="amount"
              className="w-full border px-4 py-2 rounded focus:outline-none"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Contact Method (WhatsApp / Email)</label>
            <input
              type="text"
              name="contact"
              className="w-full border px-4 py-2 rounded focus:outline-none"
              value={form.contact}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
};

export default TopUp;
