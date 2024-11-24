import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-fit md:h-[100vh] bg-gray-100 flex flex-col justify-between items-center'>
            <div className="overlay-footer h-fit md:h-screen bg-black shadow-sm shadow-gray-600 w-full md:w-[90%] relative top-40 pl-4 py-12 md:py-24">
                <div className="w-full md:w-4/5 mx-auto h-full grid grid-cols-1 md:grid-cols-4 md:gap-2 gap-12">
                    <div className=" flex flex-col gap-4 md:gap-10 items-start md:items-center justify-start ">
                        <h2 className='text-2xl md:text-3xl font-semibold text-white md:font-funky font-header md:font-bold'>About Us</h2>
                        <p className='w-[90%] md:w-full text-gray-300 font-normalText'>Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.</p>
                        <div className="btns w-full  flex items-start md:items-center justify-start md:justify-center gap-2 md:gap-4 ">
                            <button className='px-4  py-3 rounded-2xl bg-gray-800'><i className="fa-brands fa-facebook text-white"></i></button>
                            <button className='px-4  py-3 rounded-2xl bg-gray-800'><i className="fa-brands fa-facebook text-white"></i></button>
                            <button className='px-4  py-3 rounded-2xl bg-gray-800'><i className="fa-brands fa-facebook text-white"></i></button>
                            <button className='px-4  py-3 rounded-2xl bg-gray-800'><i className="fa-brands fa-facebook text-white"></i></button>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2 md:gap-7  items-start md:items-center justify-start">
                        <h2 className='text-2xl md:text-3xl text-white md:font-funky font-header font-semibold md:font-bold'>Explore</h2>
                        <div className="">
                            <p className='text-gray-200 font-normalText my-4'>About</p>
                            <p className='text-gray-200 font-normalText my-4'>Contact</p>
                            <p className='text-gray-200 font-normalText my-4'>Menu</p>
                            <p className='text-gray-200 font-normalText my-4'>Home</p>
                            <p className='text-gray-200 font-normalText my-4'>Order Online</p>
                        </div>

                    </div>
                    <div className=" flex flex-col gap-2 md:gap-10  items-start md:items-center justify-start">
                        <h2 className='text-2xl md:text-3xl text-white md:font-funky font-header font-semibold md:font-bold'>Contact Info</h2>
                        <div className="text-white flex flex-col gap-5">
                            <p>Gundecha trillion, Thakur Village Kandivali, Mumbai 400101</p>
                            <p className='grid gap-1'><span>+91 34598768</span>
                                <span>+91 34598734</span></p>
                            <p>food@restro.com</p>
                        </div>

                    </div>
                    <div className=" flex flex-col gap-4 md:gap-10  items-start md:items-center justify-start">
                        <h2 className='text-2xl md:text-3xl text-white md:font-funky font-header font-semibold md:font-bold'>Newsletter</h2>
                        <p className='text-gray-200'>Join our subscribers list to get the latest news and special offers.</p>
                        <input type="text" placeholder='Your email' className='w-[90%] bg-transparent text-white border border-b-white border-t-0 border-r-0 border-l-0' />
                    </div></div>
            </div>
            <div className="w-full h-[50vh] px-4 pb-10 md:pb-0 py-5 bg-gray-900 flex flex-col md:flex-row justify-end md:justify-between items-center gap-4 md:gap-0 md:items-end text-white">
                <h2 className='text-4xl font-funky font-semibold'>Restro</h2>
                <p className='text-base md:text-lg font-normal font-normalText md:font-semibold '>© Copyright 2024 Restro. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
