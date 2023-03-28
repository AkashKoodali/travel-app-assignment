import React from "react";

const ContactCard = () => {
  return (
    <>
      <div className="relative h-[400px] w-screen mt-20 md:h-[261px] max-w-7xl rounded-md bg-[#42A7C3] mx-2">
        <div className="absolute w-full h-full flex flex-col md:flex-row items-center justify-evenly p-10">
          <img className="w-full h-full bg-cover" src="/map2.png" alt="" />
          <div className="absolute text-white p-5 md:p-10 top-0 w-full h-full flex flex-col justify-center items-start gap-2">
            <h1 className="text-2xl md:text-4xl font-bold z-20">
              Let’s Ready to Explore The World With Us.
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur ac qam in congue.{" "}
            </p>
          </div>

          <button className="px-6 py-3 h-[50px] rounded-md whitespace-nowrap bg-white text-black z-10">
            Contact{" "}Us
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
