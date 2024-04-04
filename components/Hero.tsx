import React from 'react'
import { NavText, Navbar, HeroContent } from '.'

const Hero = () => {
  return (
    <>
    <div className='flex justify-between mx-3 my-2'>
        <img src="https://www.rotaract3201.org/assets/images/165x50mm01.png" alt="Logo" className='w-56' />


        <div className='d-flex flex-col text-center'>
            <NavText />
        </div>
      
        
        <img src="https://www.rotaract3201.org/assets/images/165x50mm02.png" alt="Logo" className='w-56' />
    </div>
    
      <Navbar />
 
        


      {/* Landing page */}
    <div className='static'>
    <HeroContent />
    </div>
      

    </>
    
  )
}

export default Hero