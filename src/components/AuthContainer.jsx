import React, { useState } from 'react'
import Signup from './Signup'
import Signin from './Signin'

function AuthContainer() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Show Sign up or Sign in based on state */}
      {isSignup ? <Signup /> : <Signin />}

      {/* The switch button */}
      <div className="mt-4 pb-8">
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-blue-600 hover:text-blue-800 font-semibold transition underline"
        >
          {isSignup
            ? "Already have an account? Sign In" 
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  )
}

export default AuthContainer