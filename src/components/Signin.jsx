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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4 relative">
      {/* Apple-style card */}
      <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-200/50 p-8 
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500">
        
        {/* Apple logo */}
        <div className="flex justify-center mb-6">
          <svg className="w-16 h-16 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 2.24-3.26 3-3.26.5 0 1.25.25 1.5.25.5 0 1.25-.25 1.5-.25.75 0 2.97 1.27 3 3.26-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </div>

        {/* Title - Apple-style typography */}
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-2 tracking-tight">
          Sign In
        </h1>
        <p className="text-gray-500 text-center mb-10 text-[15px]">
          Enter your credentials to access your account
        </p>

        {/* Email Field - Apple-style input */}
        <div className="mb-5">
          <label className="text-[13px] font-medium text-gray-700 mb-2 block">
            Email
          </label>
          <div className="relative">
            <input 
              type='text' 
              onChange={(event) => setEmail(event.target.value)} 
              value={email}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-300 rounded-xl 
                       text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                       focus:border-blue-500 transition-all duration-300 hover:bg-gray-100/80
                       text-[15px]" 
              placeholder="Enter your email"
            />
          </div>
          {!email && (
            <p className="text-red-500 text-[12px] mt-1.5 ml-1">
              Email is required
            </p>
          )}
        </div>

        {/* Password Field - Apple-style input */}
        <div className="mb-7">
          <label className="text-[13px] font-medium text-gray-700 mb-2 block">
            Password
          </label>
          <div className="relative">
            <input 
              type='password' 
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-300 rounded-xl 
                       text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                       focus:border-blue-500 transition-all duration-300 hover:bg-gray-100/80
                       text-[15px]" 
              placeholder="Enter your password"
            />
          </div>
          {!password && (
            <p className="text-red-500 text-[12px] mt-1.5 ml-1">
              Password is required
            </p>
          )}
        </div>

        {/* Forgot password - Apple-style link */}
        <div className="mb-6">
          <a href="/forgot-password" className="text-[13px] text-blue-600 hover:text-blue-700 font-medium 
                                            transition-colors duration-200">
            Forgot password?
          </a>
        </div>

        {/* Submit Button - Apple-style button */}
        <button 
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl 
                   font-semibold text-[15px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                   transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
        >
          Sign In
        </button>

        {/* Divider - Apple-style */}
        <div className="flex items-center justify-center my-6">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-gray-400 text-[12px] font-medium">or</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Sign up - Apple-style */}
        <div className="text-center">
          <p className="text-gray-500 text-[12px] mb-1.5">
            Don't have an account?
          </p>
          <a href="/signup" className="text-[14px] font-semibold text-blue-600 
                                     hover:text-blue-700 transition-colors duration-200">
            Create New Account
          </a>
        </div>

        {/* Security badge - Apple-style */}
        <div className="mt-8 pt-5 border-t border-gray-100">
          <p className="text-gray-400 text-[11px] text-center flex items-center justify-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm1.5 4.5a1 1 0 10-2 0 1 1 0 012 0zM10 12a1 1 0 100 2 1 1 0 000-2z"/>
            </svg>
            Secured with end-to-end encryption
          </p>
        </div>
      </div>

      {/* Copyright - Apple-style */}
      <div className="absolute bottom-4 text-gray-400 text-[11px] text-center w-full">
        © 2026 Your Company. All rights reserved.
      </div>
    </div>
  )
}

export default Signin;