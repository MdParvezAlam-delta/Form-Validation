import React, { useState } from 'react'
import './index.css'


function App() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4"> 

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">

          <div className="mb-6">
            <p className="fieldName text-sm font-semibold text-gray-700 mb-2">Name</p>
            <input 
              type='text' 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
              placeholder="Enter your name"
            />
            <p className="data text-red-500 text-sm mt-1">Error</p>
          </div>
 
          <div className="mb-6">
            <p className="fieldName text-sm font-semibold text-gray-700 mb-2">Email</p>
            <input 
              type='text' 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
              placeholder="Enter your email"
            />
            <p className="data text-red-500 text-sm mt-1">Error</p>
          </div>

          <div className="mb-6">
            <p className="fieldName text-sm font-semibold text-gray-700 mb-2">Password</p>
            <input 
              type='text' 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
              placeholder="Enter your password"
            />
            <p className="data text-red-500 text-sm mt-1">Error</p>
          </div>

          <div className="mb-6">
            <p className="fieldName text-sm font-semibold text-gray-700 mb-2">Confirm Password</p>
            <input 
              type='text' 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
              placeholder="Confirm your password"
            />
            <p className="data text-red-500 text-sm mt-1">Error</p>
          </div>

          <div className="mt-8">
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-md">
              Submit
            </button>
          </div>

        </div>

      </div>
    </>
  )
}


export default App