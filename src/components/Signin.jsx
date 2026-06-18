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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements with better colors */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      
      {/* Glass morph card with enhanced styling */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl max-w-md w-full z-10 hover:shadow-3xl hover:bg-white/12 transition-all duration-300">
        <h1 className="text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Sign In
        </h1>

        {/* Email Field */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Email
          </label>
          <input 
            type='text' 
            onChange={(event) => setEmail(event.target.value)} 
            value={email}
            className="w-full px-4 py-3 bg-white/15 backdrop-blur-md border border-white/20 rounded-lg 
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition-all duration-200 hover:bg-white/20" 
            placeholder="Enter your email"
          />
          {!email && (
            <p className="text-red-400 text-sm mt-1.5 flex items-center">
              <span className="mr-1">⚠</span> Email is required
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-8">
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Password
          </label>
          <input 
            type='password' 
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            className="w-full px-4 py-3 bg-white/15 backdrop-blur-md border border-white/20 rounded-lg 
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition-all duration-200 hover:bg-white/20" 
            placeholder="Enter your password"
          />
          {!password && (
            <p className="text-red-400 text-sm mt-1.5 flex items-center">
              <span className="mr-1">⚠</span> Password is required
            </p>
          )}
        </div>

        {/* Submit Button with enhanced styling */}
        <button 
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3.5 
                   rounded-lg font-semibold text-sm hover:from-blue-500 hover:to-blue-400 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 
                   shadow-lg hover:shadow-blue-500/50 active:scale-95"
        >
          Sign In
        </button>

        {/* Optional footer text */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Welcome back! Please sign in to continue.
        </p>
      </div>
    </div>
  )
}

export default Signin;