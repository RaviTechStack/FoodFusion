import React from 'react'

const Info = () => {
  return (
    <div className='w-[90%] md:w-[40%]  h-[60vh] static md:relative z-50 -top-16 bg-white shadow-xl -left-10 px-5 py-5 flex flex-col  items-start'>
      <h2 className='text-4xl font-bold font-funky my-4'>Opening Hours</h2>
      <p className='text-gray-400 font-normalText w-4/5 font-light my-3'>A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..</p>
      <div className="time w-full flex flex-col gap-3 my-2">
        <div className="weektime flex justify-between ">
            <p className='font-header font-semibold'>Sunday To Tuesday:</p> <p className='font-header font-semibold'>10:00 - 09:00</p>
        </div>
        <div className="weektime flex justify-between">
            <p className='font-header font-semibold'>Wednesday To Thursday:</p> <p className='font-header font-semibold'>11:30 - 10:30</p>
        </div>
        <div className="weektime flex justify-between">
            <p className='font-header font-semibold'>Friday and Saturday:</p> <p className='font-header font-semibold'>09:00 - 10:00</p>
        </div>
      </div>
      <div className="call flex gap-2 text-2xl mt-10 items-center ">
        <p className='py-2 px-3 rounded-full bg-yellow-800'><i className="fa-solid fa-phone text-white"></i></p>
        <p className='font-header font-semibold'>+91 9545657459</p>
      </div>
    </div>
  )
}

export default Info
