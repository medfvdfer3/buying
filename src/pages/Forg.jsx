import React from 'react';
import { FcGoogle } from 'react-icons/fc'; // ✅ استدعاء أيقونة Google
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-start justify-center px-4">
<div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md mt-52">



       <div className="text-2xl font-bold text-blue-900 text-center flex justify-center mb-4">
  <Link to="/">
    DH<span className="text-blue-600">H</span>
  </Link>
</div>


        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-2">Forget password</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter you email to receive a reset link
        </p>


        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

  
        {/* Login Button */}
     <Link
  to="/forge"
  className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
>
  Send
</Link>
        {/* Sign Up */}
      
      </div>
    </div>
  );
}
