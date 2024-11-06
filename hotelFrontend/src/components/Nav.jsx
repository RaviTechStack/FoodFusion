import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({home}) => {
  return (
    <div className={`w-full py-10 px-20 flex items-center ${home ? "bg-transparent text-white" : "bg-white shadow-xl text-black"} justify-between z-20 relative`}>
        <h2 className="logo font-header text-2xl  font-bold "> Restro </h2>
        <ul className='flex gap-10 items-center'>
        <Link to={"/"}><li className={`text-lg ${home ? "text-white" : "text-black"} font-semibold font-normalText`}>Home</li></Link>
          <Link to={"/shop"}><li className={`text-lg ${home ? "text-white" : "text-black"} font-semibold font-normalText`}>Shop</li></Link>
          <li className={`text-lg ${home ? "text-white" : "text-black"} font-semibold font-normalText`}>Menu</li>
          <li className={`text-lg ${home ? "text-white" : "text-black"} font-semibold font-normalText`}>Contact</li>
          <li className={`text-lg ${home ? "text-white" : "text-black"} font-semibold font-normalText`}>About</li>
        </ul>
        <div className="buttond flex items-center justify-center gap-4">
        <Link to={"/login"}><p className='px-4 py-3 rounded-full bg-orange-300 font-semibold text-white'><i class="fa-solid fa-user"></i></p></Link>
            <Link to={"/cart"}><p className='px-4 py-3 rounded-full bg-orange-300 font-semibold text-white'><i className="fa-solid fa-cart-shopping"></i></p></Link>
        </div>
    </div>
  )
}

export default Nav
