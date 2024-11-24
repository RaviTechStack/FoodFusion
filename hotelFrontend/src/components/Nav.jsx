import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ home }) => {
  const [mobileView, setMobileview] = useState(false)
  return (
    <div
      className={`w-full py-10 px-5 md:px-20 flex items-center 
        ${home ? "bg-transparent text-white" : "bg-white shadow-xl text-black"} 
        justify-between z-20 relative`}>
      <h2 className="logo font-header text-2xl font-bold">Restro</h2>
      <p className={` text-3xl block md:hidden`} onClick={() => (setMobileview(true))}><i class="fa-solid fa-bars"></i></p>
      <ul className={`md:flex gap-10 items-center hidden`}>
        <Link to="/">
          <li className={`text-lg  font-semibold font-normalText`}>
            Home
          </li>
        </Link>
        <Link to="/shop">
          <li className={`text-lg  font-semibold font-normalText`}>
            Shop
          </li>
        </Link>
        <li className={`text-lg font-semibold font-normalText`}>
          Menu
        </li>
        <li className={`text-lg font-semibold font-normalText`}>
          Contact
        </li>
        <Link to="/about" className='w-full'>
        <li className={`text-lg font-semibold font-normalText`}>
          About
        </li>
        </Link>
      </ul>

      <div className={`buttond md:flex items-center justify-center gap-4 hidden `}>
        <Link to="/profile">
          <p className="px-4 py-3 rounded-full bg-orange-300 font-semibold text-white">
            <i className="fa-solid fa-user"></i>
          </p>
        </Link>
        <Link to="/cart">
          <p className="px-4 py-3 rounded-full bg-orange-300 font-semibold text-white">
            <i className="fa-solid fa-cart-shopping"></i>
          </p>
        </Link>
      </div>


      {/* MOBILE NAV  */}

      <div className={`absolute top-0 left-0 bg-black opacity-70 w-full  h-screen ${mobileView ? "block" : "hidden"}`}></div>

      <p className={` text-white z-[10001] text-4xl font-header absolute top-10 right-5 ${mobileView ? "block" : "hidden"}`} onClick={() => (setMobileview(false))}><i class="fa-solid fa-xmark"></i></p>

      <div className={`mobileNav absolute top-0 left-0 w-[80vw] ${mobileView ? "translate-x-0" : "-translate-x-[80vw]"}  transition-transform ease-linear duration-100 bg-gray-200 h-screen pl-2 flex flex-col justify-around`}>
        <h1 className='  font-header text-2xl py-8 font-bold  text-black w-full shadow-md text-center'>Restro</h1>
        <ul className="flex flex-col gap-4 items-center">
          <Link to="/" className='w-full'>
            <li className={`text-lg text-black hover:bg-gray-300 font-semibold font-normalText  px-2 py-4 bg-gray-200 shadow-md`}>
              Home
            </li>
          </Link>
          <Link to="/shop" className='w-full'>
            <li className={`text-lg text-black hover:bg-gray-300 font-semibold font-normalText  px-2 py-4 bg-gray-200 shadow-md`}>
              Shop
            </li>
          </Link>
          <li className={`text-lg text-black hover:bg-gray-300 font-semibold font-normalText w-full px-2 py-4 bg-gray-200 shadow-md`}>
            Menu
          </li>
          <li className={`text-lg text-black hover:bg-gray-300 font-semibold font-normalText w-full px-2 py-4 bg-gray-200 shadow-md`}>
            Contact
          </li>
          <Link to="/about" className='w-full'>
            <li className={`text-lg text-black hover:bg-gray-300 font-semibold font-normalText w-full px-2 py-4 bg-gray-200 shadow-md`}>
              About
            </li>
          </Link>
        </ul>
        <div className="buttons flex flex-col gap-3 w-full items-center">
          <Link to="/login" className="w-4/5"><button className="w-full bg-orange-500 text-white font-bold font-header rounded-md shadow-sm px-4 py-3"> Login / signup</button></Link>
          <Link to="/cart" className="w-4/5"><button className="w-full bg-orange-500 text-white font-bold font-header rounded-md shadow-sm px-4 py-3">Go to Cart</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;