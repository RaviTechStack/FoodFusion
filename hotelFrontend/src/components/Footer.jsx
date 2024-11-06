import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[100vh] bg-gray-100 flex flex-col justify-between items-center'>
            <div className="overlay-footer h-screen bg-black w-[90%] relative top-40 py-24">
                <div className="w-4/5 mx-auto h-full grid grid-cols-4 gap-2">
                    <div className=" flex flex-col gap-10  items-center justify-start">
                        <h2 className='text-3xl text-white font-funky font-bold'>About Us</h2>
                        <p className='text-gray-300 font-normalText'>Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.</p>
                        <div className="btns w-full  flex items-center justify-center gap-4">
                            <button className='px-4 rounded-sm py-3 bg-gray-800'><i className="fa-brands fa-facebook text-white"></i></button>
                            <button className='px-4 rounded-sm py-3 bg-gray-800'><i className="fa-brands fa-facebook text-white"></i></button>
                            <button className='px-4 rounded-sm py-3 bg-gray-800'><i className="fa-brands fa-facebook text-white"></i></button>
                            <button className='px-4 rounded-sm py-3 bg-gray-800'><i className="fa-brands fa-facebook text-white"></i></button>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-7  items-center justify-start">
                        <h2 className='text-3xl text-white font-funky font-bold'>Explore</h2>
                        <div className="">
                            <p className='text-gray-200 font-normalText my-3'>About</p>
                            <p className='text-gray-200 font-normalText my-3'>Contact</p>
                            <p className='text-gray-200 font-normalText my-3'>Menu</p>
                            <p className='text-gray-200 font-normalText my-3'>Home</p>
                            <p className='text-gray-200 font-normalText my-3'>Order Online</p>
                        </div>

                    </div>
                    <div className=" flex flex-col gap-10  items-center justify-start">
                        <h2 className='text-3xl text-white font-funky font-bold'>Contact Info</h2>
                        <div className="text-white flex flex-col gap-5">
                            <p>Gundecha trillion, Thakur Village Kandivali, Mumbai 400101</p>
                            <p className='grid gap-1'><span>+91 34598768</span>
                                <span>+91 34598734</span></p>
                            <p>food@restro.com</p>
                        </div>

                    </div>
                    <div className=" flex flex-col gap-10  items-center justify-start">
                        <h2 className='text-3xl text-white font-funky font-bold'>Newsletter</h2>
                        <p className='text-gray-200'>Join our subscribers list to get the latest news and special offers.</p>
                        <input type="text" placeholder='Your email' className='w-[90%] bg-transparent border border-b-white border-t-0 border-r-0 border-l-0' />
                    </div></div>
            </div>
            <div className="w-full h-[50vh] px-4 py-5 bg-gray-900 flex justify-between items-end text-white">
                <h2 className='text-4xl font-funky font-semibold'>Restro</h2>
                <p className='text-lg font-header font-semibold '>© Copyright 2024 Restro. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
