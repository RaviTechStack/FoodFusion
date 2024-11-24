import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Context/Authenticate'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const {data, setDta, handelData, LoginUser,} = useAuthContext()
  const navigate = useNavigate()

  const handelSubmit =(e) =>{
    LoginUser(e, navigate)
    
  }
  
  console.log(data)
  return (
    <div className="w-full h-screen grid place-items-center bg-gray-100">
    <div
      class="w-[90%] md:w-1/4 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden  shadow-black"
    >
      <div class="flex flex-col justify-center items-center space-y-2">
        <h2 class="text-2xl font-medium text-slate-700">Login</h2>
        <p class="text-slate-500">Enter details below.</p>
      </div>
      <form class="w-full mt-4 space-y-3">
        <div>
          <input
            class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
            placeholder="Username"
            id="username"
            name="username"
            type="text"
            value={data.username}
            onChange={handelData}
          />
        </div>
        <div>
          <input
            class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            value={data.password}
            onChange={handelData}
          />
        </div>
        <div class="flex items-center justify-between">
         
          <Link class="text-blue-500 font-medium hover:underline" href="lin">Forgot Password</Link>
        </div>
        <button
          class="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
          id="login"
          name="login"
          onClick={handelSubmit}>
          logjin
        </button>
        <p class="flex justify-center space-x-1">
          <span class="text-slate-700"> Have an account? </span>
          <Link class="text-blue-500 hover:underline" to={"/signup"}>Sign Up</Link>
        </p>
      </form>
        
    </div>

    </div>

  )
}

export default Login
