import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-black body-font bg-blue-600">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
      
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      
      <span className="ml-3 text-xl">MY PORTFOLIO</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"#/"}className="mr-10 hover:text-white">Home</Link>
      <Link href ={ "#skills" }className="mr-10 hover:text-white">Skills</Link>
      <Link href ={ "#Contact" } className="mr-10 hover:text-white">Contact</Link>
      <Link href ={ "#aboutme" } className="mr-10 hover:text-white">About</Link>
    </nav>
    <a href= '\my cv.JPG'>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0"> 
    
      Download CV  
    </button>
    </a>
  </div>
</header>
    
</div>  )
}

export default Navbar
