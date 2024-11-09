 "use client"
 
 import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';
import pic from '../../../public/hero.jpeg'
const Hero = () => {
  return (
    
      <section className="text-gray-800 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className=" text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">

 
        Welcome My Website
        <br/>
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['I am Web Developer', 'I am UI & UX Designer','I am GIAIC Student'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-[40px]h-[30px]'></div>
      <div className="flex justify-center">
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={pic}
        height={600}
        width={400}
      />
    </div>
  </div>
</section>

    
  )
}

export default Hero
