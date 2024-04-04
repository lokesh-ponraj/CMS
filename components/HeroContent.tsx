import React from 'react'
import '../app/globals.css'


const HeroContent = () => {
  return (
    <>
    <div className="flex h-auto bg-no-repeat bg-center relative -z-10  items-center justify-center bg-fixed  bg-[url('https://www.rotaract3201.org/assets/images/banner-img2.jpeg')]">
        <div className='hero__title'>
            <span>E</span>
            <span>L</span>
            <span>E</span>
            <span>V</span>
            <span>A</span>
            <span>T</span>
            <span>E</span>
            <span>.</span>
        </div>
        <div className='flex bg-center z-20 absolute hero__description'>Unleashing our potential,one step at a time on our Endeavour to Elevate.</div>
        
    </div>
    <div className='flex bg-center z-20 absolute mt-80 gap-10 '>
          <button type='button' className='cursor-pointer hover:bg-black hover:text-white rounded-lg bg-white p-2'>Learn More</button>
          <button type='button' className='cursor-pointer rounded-lg bg-red-600 text-white p-2'>Join Now</button>
    </div>
    </>
    
  )
}

export default HeroContent
