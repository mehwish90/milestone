import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo1.jpeg'
const Footer = () => {
  return (
    <div>
      
  
  <footer className="text-black body-font bg-blue-500">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
       <Image  className="object-cover object-center rounded" 
       alt='logo'
       src={logo}
       height={70}
       width={70}
       />
        <span className="ml-3 text-xl">MY PORTFOLIO</span>
      </a>
      <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 Mehwish Kashif  
      
     
      </p>
    </div>
  </footer>


    </div>
  )
}

export default Footer
