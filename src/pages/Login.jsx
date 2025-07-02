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
        <h2 className="text-xl font-semibold text-center mb-2">Log in to your account</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Create an account to enjoy best experience
        </p>

        {/* Google Login */}
        <button className="w-full bg-white border border-gray-300 rounded-md py-2 text-sm text-gray-700 hover:bg-gray-100 mb-4 flex items-center justify-center gap-2 transition">
          <FcGoogle className="text-lg" />
          <span>Continue with Google</span>
        </button>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />


        {/* Forgot Password */}
<div className="text-right mt-2">
  <Link to="/forg" className="text-sm text-blue-600 hover:underline">
    Forgot Password?
  </Link>
</div>
        {/* Login Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
          Login
        </button>
        {/* Sign Up */}
        <div className="text-center mt-6 text-sm">
          Didn’t have an account?
   <Link to="/sign" className="text-blue-600 hover:underline ml-1">
  Sign up
</Link>

        </div>
      </div>
    </div>
  );
}
