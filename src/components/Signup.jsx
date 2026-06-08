import React from "react";
 import { useSignupForm } from "../hooks/useSignupForm";
 import "../index.css";

function Signup() {
  const { 
    name, 
    setName, 
    email, 
    setEmail, 
    password, 
    setPassword, 
    confirmPass, 
    setConfirmPass, 
    handleSubmit 
  } = useSignupForm();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="heading mb-6">Sign Up</h1>

        {/* Name Field */}
        <div className="mb-6">
          <p className="fieldName text-sm font-semibold text-gray-700 mb-2">Name</p>
          <input 
            type='text' 
            onChange={(event) => setName(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
            placeholder="Enter your name"
          />
          <p className="data text-red-500 text-sm mt-1">{name ? "" : "Name is required"}</p>
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <p className="fieldName text-sm font-semibold text-gray-700 mb-2">Email</p>
          <input 
            type='text' 
            onChange={(event) => setEmail(event.target.value)} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
            placeholder="Enter your email"
          />
          <p className="data text-red-500 text-sm mt-1">{email ? "" : "Email is required"}</p>
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <p className="fieldName text-sm font-semibold text-gray-700 mb-2">Password</p>
          <input 
            type='password' 
            onChange={(event) => setPassword(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
            placeholder="Enter your password"
          />
          <p className="data text-red-500 text-sm mt-1">{password ? "" : "Password is required"}</p>
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <p className="fieldName text-sm font-semibold text-gray-700 mb-2">Confirm Password</p>
          <input 
            type='password' 
            onChange={(event) => setConfirmPass(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
            placeholder="Confirm your password"
          />
          <p className="data text-red-500 text-sm mt-1">{confirmPass ? "" : "Confirm Password is required"}</p>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button 
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup;