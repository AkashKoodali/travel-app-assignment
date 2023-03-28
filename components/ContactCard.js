import React from 'react'

const ContactCard = () => {
  return (
    <>
         <div className="mt-32 mb-32 md:mx-auto h-[261px] bg-[#42A7C3] flex items-center justify-between p-10 rounded-md max-w-7xl mx-2">
        <div className="flex flex-col text-white">
          <h1 className="text-white text-4xl font-bold ">
            Let’s Ready to Explore The World With Us.
          </h1>
          <h2 className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque efficitur ac quam in congue.{" "}
          </h2>
        </div>
        <img
          className="absolute md:relative w-[453px] h-[189px] bg-cover"
          src="/map2.png"
          alt=""
        />
        <button className="px-6 py-3 rounded-md bg-white text-black inline z-10">
          Contact
        </button>
      </div>
    </>
  )
}

export default ContactCard