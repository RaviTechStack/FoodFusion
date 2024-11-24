import React from 'react'

const Banner = ({ img, heading, background }) => {
  return (
    <div className={`w-[95%] md:w-[80%] h-fit py-8 md:py-4 md:h-[85vh] mx-auto ${background} flex flex-col md:flex-row items-center shadow-lg mt-10 justify-center gap-10 rounded-2xl`}>
      <div className="w-full md:h-full h-1/2  flex items-center justify-center">
        <img src={`${img}`} alt="" className='w-[90%]' />

      </div>
      <div className={`w-full flex pl-2 flex-col items-center md:items-start  gap-1 md:gap-3 ${background == "bg-black" ? "text-white" : "text-black"}`}>
        <h2 className='text-3xl md:text-4xl font-funky font-semibold'>Today Special Offer</h2>
        <h1 className=' text-5xl md:text-6xl font-funky text-center md:text-start font-semibold w-3/5'>{heading}</h1>
        <p className='w-full my-4 md:my-0 md:w-4/5   leading-normal text-center md:text-start font-normalText '>Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.</p>
        <button className={`py-2  px-4 rounded-full ${background == "bg-black" ? "text-white bg-yellow-700" : "text-white bg-black"}  text-white w-[30%] font-normalText font-semibold`}>Order Now</button>
      </div>

    </div>
  )
}

export default Banner
