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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Softened animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      
      {/* subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSdodHRwOi8vd3d3Lm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] bg-repeat opacity-30"></div>
      
      {/* Glass morph card - enhanced glass effect */}
      <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl 
                    border border-white/20 p-7 rounded-3xl shadow-2xl max-w-md w-full z-10 
                    hover:shadow-[0_20px_60px_-15px_rgba(147,51,234,0.4)] hover:bg-gradient-to-br hover:from-white/20 hover:to-white/8 
                    transition-all duration-500 ease-out
                    before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-3xl before:pointer-events-none
                    after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-1/2 after:bg-gradient-to-b after:from-white/20 after:to-transparent after:rounded-t-3xl after:pointer-events-none">
        
        {/* Glass reflection overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/15 via-blue-500/10 to-pink-500/15 rounded-3xl -z-10 animate-glow"></div>
        
        {/* Icon/Logo */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg 
                        hover:scale-110 hover:rotate-6 transition-all duration-300">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight 
                     bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
          Sign In
        </h1>
        <p className="text-gray-400 text-center mb-8 text-sm">
          Welcome back! Please enter your details.
        </p>

        {/* Email Field */}
        <div className="mb-5">
          <label className="text-xs font-semibold text-gray-300 mb-2 block flex items-center">
            <svg className="w-3.5 h-3.5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </label>
          <div className="relative">
            <input 
              type='text' 
              onChange={(event) => setEmail(event.target.value)} 
              value={email}
              className="w-full px-4 py-3 pl-10 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md 
                       border border-white/20 rounded-lg text-white placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 
                       focus:bg-gradient-to-br focus:from-white/25 focus:to-white/10 
                       transition-all duration-300 hover:bg-white/20 hover:border-white/30
                       shadow-lg shadow-purple-500/5" 
              placeholder="Enter your email"
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          {!email && (
            <p className="text-red-400 text-xs mt-1.5 ml-1">
              • Email is required
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-gray-300 mb-2 block flex items-center">
            <svg className="w-3.5 h-3.5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Password
          </label>
          <div className="relative">
            <input 
              type='password' 
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              className="w-full px-4 py-3 pl-10 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md 
                       border border-white/20 rounded-lg text-white placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 
                       focus:bg-gradient-to-br focus:from-white/25 focus:to-white/10 
                       transition-all duration-300 hover:bg-white/20 hover:border-white/30
                       shadow-lg shadow-blue-500/5" 
              placeholder="Enter your password"
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          {!password && (
            <p className="text-red-400 text-xs mt-1.5 ml-1">
              • Password is required
            </p>
          )}
        </div>

        {/* Forgot password + Submit */}
        <div className="flex items-center justify-between mb-5">
          <a href="/forgot-password" className="text-xs text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button 
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3.5 
                   rounded-lg font-semibold text-sm hover:from-purple-500 hover:to-blue-500 
                   focus:outline-none focus:ring-2 focus:ring-purple-400/50 
                   transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-blue-500/40 
                   active:scale-95"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center my-5">
          <div className="flex-1 border-t border-white/10"></div>
          <span className="px-3 text-gray-500 text-xs">or</span>
          <div className="flex-1 border-t border-white/10"></div>
        </div>

        {/* Sign up */}
        <div className="text-center">
          <p className="text-gray-500 text-xs mb-1.5">
            Don't have an account?
          </p>
          <a href="/signup" className="text-sm font-semibold text-purple-400 
                                     hover:text-purple-300 transition-colors duration-200">
            Create account
          </a>
        </div>

        {/* Security badge */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-gray-500 text-xs text-center">
            🔒 Secured with end-to-end encryption
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-3 text-gray-600 text-xs text-center w-full">
        © 2026 Your Company
      </div>

      {/* Add glow animation */}
      <style>{`
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-glow { animation: glow 3s infinite; }
      `}</style>
    </div>
  )
}

export default Signin;