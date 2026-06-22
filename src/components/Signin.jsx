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
    <div className="min-h-screen bg-gradient-to-br from-slate-900/90 via-purple-900/30 to-slate-900/90 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ultra-smooth animated gradient orbs with lower opacity */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSdodHRwOi8vd3d3Lm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] bg-repeat opacity-20"></div>
      
      {/* Ultra-smooth glass morph card */}
      <div className="relative bg-gradient-to-br from-white/12 to-white/3 backdrop-blur-2xl 
                    border border-white/15 p-7 rounded-3xl shadow-xl max-w-md w-full z-10 
                    hover:shadow-[0_20px_60px_-20px_rgba(147,51,234,0.25)] hover:bg-gradient-to-br hover:from-white/16 hover:to-white/5 
                    transition-all duration-700 ease-out">
        
        {/* Soft glass reflection */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Very subtle glowing border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/10 via-blue-400/8 to-pink-400/10 rounded-3xl -z-10 animate-glow"></div>
        
        {/* Icon/Logo - smooth hover */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500/90 to-blue-500/90 rounded-xl flex items-center justify-center 
                        shadow-lg shadow-purple-500/20 hover:scale-105 hover:rotate-3 transition-all duration-500">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        {/* Title - softer gradient */}
        <h1 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight 
                     bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300 bg-clip-text text-transparent">
          Sign In
        </h1>
        <p className="text-gray-400/80 text-center mb-8 text-sm">
          Welcome back! Please enter your details.
        </p>

        {/* Email Field - smoother input */}
        <div className="mb-5">
          <label className="text-xs font-medium text-gray-300/90 mb-2 block flex items-center">
            <svg className="w-3.5 h-3.5 mr-2 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </label>
          <div className="relative">
            <input 
              type='text' 
              onChange={(event) => setEmail(event.target.value)} 
              value={email}
              className="w-full px-4 py-3 pl-10 bg-gradient-to-br from-white/10 to-white/3 backdrop-blur-md 
                       border border-white/12 rounded-lg text-white placeholder-gray-500/70 
                       focus:outline-none focus:ring-2 focus:ring-purple-400/40 focus:border-purple-300/50 
                       focus:bg-gradient-to-br focus:from-white/18 focus:to-white/8 
                       transition-all duration-500 hover:bg-white/16 hover:border-white/20
                       shadow-lg shadow-purple-500/3" 
              placeholder="Enter your email"
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          {!email && (
            <p className="text-red-400/80 text-xs mt-1.5 ml-1">
              • Email is required
            </p>
          )}
        </div>

        {/* Password Field - smoother input */}
        <div className="mb-6">
          <label className="text-xs font-medium text-gray-300/90 mb-2 block flex items-center">
            <svg className="w-3.5 h-3.5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Password
          </label>
          <div className="relative">
            <input 
              type='password' 
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              className="w-full px-4 py-3 pl-10 bg-gradient-to-br from-white/10 to-white/3 backdrop-blur-md 
                       border border-white/12 rounded-lg text-white placeholder-gray-500/70 
                       focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-300/50 
                       focus:bg-gradient-to-br focus:from-white/18 focus:to-white/8 
                       transition-all duration-500 hover:bg-white/16 hover:border-white/20
                       shadow-lg shadow-blue-500/3" 
              placeholder="Enter your password"
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          {!password && (
            <p className="text-red-400/80 text-xs mt-1.5 ml-1">
              • Password is required
            </p>
          )}
        </div>

        {/* Forgot password - smoother hover */}
        <div className="flex items-center justify-between mb-5">
          <a href="/forgot-password" className="text-xs text-purple-300/90 hover:text-purple-200 font-medium 
                                            transition-all duration-300 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Submit Button - smoother gradient */}
        <button 
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3.5 
                   rounded-lg font-semibold text-sm hover:from-purple-400 hover:to-blue-400 
                   focus:outline-none focus:ring-2 focus:ring-purple-300/40 
                   transition-all duration-500 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-blue-500/35 
                   active:scale-95"
        >
          Sign In
        </button>

        {/* Divider - softer */}
        <div className="flex items-center justify-center my-5">
          <div className="flex-1 border-t border-white/8"></div>
          <span className="px-3 text-gray-500/80 text-xs">or</span>
          <div className="flex-1 border-t border-white/8"></div>
        </div>

        {/* Sign up - smoother hover */}
        <div className="text-center">
          <p className="text-gray-500/80 text-xs mb-1.5">
            Don't have an account?
          </p>
          <a href="/signup" className="text-sm font-semibold text-purple-300/90 
                                     hover:text-purple-200 transition-all duration-300">
            Create account
          </a>
        </div>

        {/* Security badge - softer */}
        <div className="mt-6 pt-4 border-t border-white/8">
          <p className="text-gray-500/70 text-xs text-center">
            🔒 Secured with end-to-end encryption
          </p>
        </div>
      </div>

      {/* Copyright - softer */}
      <div className="absolute bottom-3 text-gray-600/70 text-xs text-center w-full">
        © 2026 Your Company
      </div>

      {/* Ultra-smooth animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animate-glow { animation: glow 4s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  )
}

export default Signin;