import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
      <section className="text-black body-font relative bg-gray-100">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.369003201249!2d67.03304119999999!3d24.885391900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e4fbf9c9649%3A0x84b4faaf132f90a5!2sGarden%20East%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731004296057!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
           Garden east,karachi
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">kashifmehwish861gmail.com</a>
          <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">03334141206</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-gray-100 flex flex-col md:ml-auto w-full md:py-9 mt-9 md:mt-0">
      <h2 className="text-6xl font-bold text-black">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Feel free to contact
      </p>
      <form>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-black">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>
      
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
       required />
      </div>
      <div className="relative mb-4">
        <label htmlFor="subject" className="leading-7 text-sm text-black">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        required/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Send message
      </button>
      </form>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact
