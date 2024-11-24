import React from 'react'
import Nav from './Nav'


const Hero = () => {
  return (
    <div className='md:h-screen h-[80vh] relative bg-[url("https://assets.lummi.ai/assets/Qmf6tzic2ry2PtQbTtrovSdxVfU4zk61cEgtGS1aePRqSW?auto=format&w=1500")] bg-no-repeat bg-cover bg-center w-full'>
      <div className="absolute bg-black top-0 right-0 h-full w-full opacity-40"></div>
      <Nav home={true}/>
      <div className="hero-container relative h-[70vh] w-full  flex flex-col items-center justify-center gap-4">

        <h2 className='w-4/5 md:w-full text-center text-2xl  md:text-4xl font-funky font-semibold text-white'>Rich Healthy and Authentic Indian Natural Food</h2>

        <div className="flex md:w-[40%] w-4/5">
          <input type="text" className="w-full py-2 px-2 rounded-md bg-transparent border-2 border-white my-4" placeholder='Get Your Taste at Home' />
          <button className='text-2xl text-white font-semibold placeholder-white -ml-[40px] md:-ml-[55px]'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="flex gap-10">
          <button className='px-5 py-2 border border-yellow-400 text-yellow-400 my-5 bg-transparent shadow rounded-full font-semibold font-header '>Order Online</button>
          <button className='px-5 py-2 border border-yellow-400 bg-yellow-500 textwhite text-white my-5  shadow rounded-full font-semibold font-header '>View Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
