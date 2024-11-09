import Image from 'next/image'
import pic from '../../../public/hero.jpeg'
import React from 'react'

const About = () => {
  return (
    <div id='aboutme'>
      <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
  <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={pic}
        height={600}
        width={400}
      />
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="text-6xl font-bold text-black">
        About me
      </h1>
      <p className="mb-8 leading-relaxed">
       I am skilled web developer with expertise in Next.js, known for his strong grasp of modern web technologies and dedication to creating fast, user-friendly websites and applications. Leveraging Next.js’s powerful features, he builds high-performance web solutions that are optimized for both users and search engines, ensuring seamless experiences and robust functionality. His approach to development includes a focus on modularity, scalability, and responsive design, which allows him to tailor solutions that meet diverse client needs.
      </p>
      <p className="mb-8 leading-relaxed">
      With a commitment to staying current with the latest advancements in the Next.js ecosystem, Usman continually refines his skills and adopts best practices to improve his craft. He enjoys working through challenges in server-side rendering, dynamic routing, and API integration, creating web applications that are both technically sound and visually appealing. Whether working independently or as part of a team, I am consistently delivers quality work that aligns with modern web standards and client expectations.
      </p>
      <div className="flex w-full justify-center items-end">
        
          
         
      <a href= '\my cv.JPG'>
        <button className="items-center inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Download CV
        </button>
        </a>
      </div>
    
      
      
    </div>
  </div>
</section>

    </div>
  )
}

export default About
