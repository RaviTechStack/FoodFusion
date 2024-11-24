import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Signup = () => {
  return (
<div className="flex flex-col items-center justify-center h-screen">
  <div className="w-[95%] md:w-full max-w-md bg-white rounded-lg shadow shadow-black p-6">
  <div class="flex flex-col justify-center items-center space-y-2 mb-4">
        <h2 class="text-2xl font-medium text-slate-700">Sign Up</h2>
        <p class="text-slate-500">Enter details below.</p>
      </div>
    <form className="flex flex-col">
        <div className="flex gap-0 md:gap-4 flex-col md:flex-row">
        <input placeholder="First Name" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
        <input placeholder="Last Name" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
        </div>
      
      <input placeholder="Email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
      <input placeholder="Password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
      <input placeholder="Confirm Password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
      
      <p className="text-gray-900 mt-4"> Already have an account? <Link className="text-sm text-blue-500 -200 hover:underline mt-4" to={"/login"}>Login</Link></p>
      <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Sign Up</button>
    </form>
  </div>
</div>

  )
}

export default Signup
