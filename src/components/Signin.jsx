import React from "react";
import { useSigninForm } from "../hooks/useSigninForm";
import "../index.css";



function Signin() {
  const { 
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleSubmit 
  } = useSigninForm();



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-8 rounded-2xl shadow-2xl max-w-md w-full relative z-10">
        <h1 className="heading mb-6 text-gray-800 font-bold text-3xl">Sign In</h1>



        {/* Email Field */}
        <div className="mb-6">
          <p className="fieldName text-sm font-semibold text-gray-700 mb-2">Email</p>
          <input 
            type='text' 
            onChange={(event) => setEmail(event.target.value)} 
            className="w-full px-4 py-2 bg-white/30 backdrop-blur-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-500 text-gray-800" 
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
            className="w-full px-4 py-2 bg-white/30 backdrop-blur-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-500 text-gray-800" 
            placeholder="Enter your password"
          />
          <p className="data text-red-500 text-sm mt-1">{password ? "" : "Password is required"}</p>
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



export default Signin;