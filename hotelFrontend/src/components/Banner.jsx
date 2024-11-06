import React from 'react'

const Banner = ({img, heading, background}) => {
  return (
    <div className={`w-[80%] h-[85vh] mx-auto ${background} flex items-center shadow-lg mt-10 justify-center gap-10 rounded-2xl`}>
      <div className="w-full h-full  flex items-center justify-center">
      <img src={`${img}`} alt="" className='w-[90%]'/>

      </div>
        <div className={`w-full flex flex-col gap-3 ${background == "bg-black"? "text-white": "text-black"}`}>
            <h2 className='text-4xl font-funky font-semibold'>Today Special Offer</h2>
            <h1 className='text-6xl font-funky font-semibold '>{heading}</h1>
            <p className='w-4/5 leading-normal font-normalText '>Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.</p>
            <button className={`py-2  px-4 rounded-full ${background == "bg-black"? "text-white bg-yellow-700": "text-white bg-black"}  text-white w-[30%] font-normalText font-semibold`}>Order Now</button>
        </div>
      
    </div>
  )
}

export default Banner
