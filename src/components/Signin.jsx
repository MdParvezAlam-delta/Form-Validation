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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient orbs with better colors and motion */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-40 right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSdodHRwOi8vd3d3Lm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] bg-repeat opacity-20"></div>
      
      {/* Glass morph card with premium styling */}
      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl max-w-md w-full z-10 
                    hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] hover:bg-white/15 
                    transition-all duration-500 ease-out
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
                    before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none before:rounded-3xl">
        
        {/* Icon/Logo at top */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        {/* Title with gradient */}
        <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 
                     mb-3 text-center tracking-tight bg-clip-text">
          Sign In
        </h1>
        <p className="text-gray-400 text-center mb-10 font-medium">
          Welcome back to your dashboard
        </p>

        {/* Email Field with icon */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-300 mb-2.5 block flex items-center">
            <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Address
          </label>
          <div className="relative">
            <input 
              type='text' 
              onChange={(event) => setEmail(event.target.value)} 
              value={email}
              className="w-full px-4 py-3.5 pl-11 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl 
                       text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 
                       focus:border-purple-500 transition-all duration-300 hover:bg-white/20 hover:border-white/30
                       shadow-lg shadow-purple-500/5" 
              placeholder="Enter your email"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          {!email && (
            <p className="text-red-400 text-sm mt-2 flex items-center animate-pulse">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" />
              </svg>
              Email is required
            </p>
          )}
        </div>

        {/* Password Field with icon */}
        <div className="mb-8">
          <label className="text-sm font-semibold text-gray-300 mb-2.5 block flex items-center">
            <svg className="w-4 h-4 mr-2 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Password
          </label>
          <div className="relative">
            <input 
              type='password' 
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              className="w-full px-4 py-3.5 pl-11 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl 
                       text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 
                       focus:border-pink-500 transition-all duration-300 hover:bg-white/20 hover:border-white/30
                       shadow-lg shadow-pink-500/5" 
              placeholder="Enter your password"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          {!password && (
            <p className="text-red-400 text-sm mt-2 flex items-center animate-pulse">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" />
              </svg>
              Password is required
            </p>
          )}
        </div>

        {/* Forgot password link */}
        <div className="mb-6">
          <a href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200 hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Submit Button with enhanced gradient and effects */}
        <button 
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white px-6 py-4 
                   rounded-xl font-bold text-base hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 
                   focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 
                   transition-all duration-300 shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-pink-500/50 
                   active:scale-95 group overflow-hidden"
        >
          <span className="relative inline-flex items-center justify-center">
            <span className="mr-2">Sign In</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="flex-1 border-t border-white/20"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-white/20"></div>
        </div>

        {/* Sign up link */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">
            Don't have an account?
          </p>
          <a href="/signup" className="text-lg font-semibold text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 
                                     bg-clip-text hover:from-yellow-300 hover:to-pink-300 transition-colors duration-200">
            Create one now
          </a>
        </div>

        {/* Footer badge */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-xs text-center font-medium">
            🔒 Secure & encrypted connection
          </p>
        </div>
      </div>

      {/* Copyright/branding at bottom */}
      <div className="absolute bottom-4 text-gray-600 text-xs text-center w-full">
        © 2026 Your Company. All rights reserved.
      </div>
    </div>
  )
}

export default Signin;