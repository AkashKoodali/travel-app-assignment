import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="relative h-[800px] mt-36 flex flex-col items-center bg-transparent">
      <div className="absolute bg-black mx-20 h-fit py-10 md:py-0 md:w-[800px]  lg:w-[1226px] md:h-[311.13px] top-0 md:mx-auto z-30 
      rounded-lg flex flex-col md:flex-row justify-between items-center px-16">
        <section className="text-white space-y-10">
          <h1 className="text-4xl font-bold">Download Our App</h1>
          <p className="text-base font-normal">The best travel in the world</p>
          <button className="w-[213px] h-[62px] bg-[#1A6892] rounded-md flex items-center p-4 border border-white">
            <img
              className="h-[39px] w-[39px] z-50 object-cover"
              src="/footer/google.png"
              alt=""
            />
            <section className="space-x-3">
              <p className="text-xs">GET IN ON</p>
              <h2 className="text-lg">Google Play</h2>
            </section>
          </button>
        </section>

        <img className="hidden lg:block h-full opacity-20" src="/footer/Group42.png" alt="" />

        <div className="hidden md:flex w-[254px] h-[254px] rounded-full bg-gradient-to-r from-[#44A4BE] to-[#D6F1FF] 
        justify-center">
          <img className="absolute md:bottom-[55px] md:h-[292.71px] w-[135.65px]" src="/footer/Frame.png" alt="" />
        </div>
      </div>

      {/*  */}
      <div className="absolute bottom-0 h-[610px] w-full ">
        <img
          className="h-full w-full object-cover"
          src="/Rectangle14.png"
          alt=""
        />

        <div className="absolute top-[186px] w-full gap-3 flex flex-col overflow-auto md:flex-row md:justify-between mx-auto">
          <div className="flex-1 flex flex-col w-[314px] mx-2 items-baseline gap-y-6 md:gap-y-10 md:ml-20">
            <img className="w-[100px] h-[52px]" src="/footer/gol.png" alt="" />
            <section className="flex-1 mx-2 text-white">
              <p className="text-xs line-clamp-7">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
            </section>
            <div className="flex justify-start  md:mt-20 space-x-5">
              <button className="w-[35px] h-[35px] md:w-[42px] md:h-[42px] bg-white text-[#41A5C1] rounded-full p-1 flex items-center justify-center">
                <BsFacebook className="h-full w-full" />
              </button>
              <button className="w-[35px] h-[35px] md:w-[42px] md:h-[42px] bg-white text-[#41A5C1] rounded-full p-1 flex items-center justify-center">
                <AiFillTwitterCircle className="h-full w-full" />
              </button>
              <button className="w-[35px] h-[35px] md:w-[42px] md:h-[42px] bg-white text-[#41A5C1] rounded-full p-2 flex items-center justify-center">
                <BsLinkedin className="h-full w-full" />
              </button>
              <button className="w-[35px] h-[35px] md:w-[42px] md:h-[42px] bg-white text-[#41A5C1] rounded-full p-1 flex items-center justify-center">
                <AiFillInstagram className="h-full w-full" />
              </button>
            </div>
          </div>

          <div className="flex space-x-10 mt-2 mx-2 md:justify-between text-white md:mr-20 z-20">
            <ul className="space-y-4">
              <li className="font-semibold text-lg">Company</li>
              <li className="cursor-pointer text-sm">Regions</li>
              <li className="cursor-pointer text-sm">Cities</li>
              <li className="cursor-pointer text-sm">District</li>
              <li className="cursor-pointer text-sm">Airports</li>
            </ul>
            <ul className="space-y-4">
              <li className="font-semibold text-lg">About</li>
              <li className="cursor-pointer text-sm">Regions</li>
              <li className="cursor-pointer text-sm">Cities</li>
              <li className="cursor-pointer text-sm">District</li>
              <li className="cursor-pointer text-sm">Airports</li>
            </ul>
            <ul className="space-y-4">
              <li className="font-semibold text-lg">Contact Us</li>
              <li className="cursor-pointer text-sm">Regions</li>
              <li className="cursor-pointer text-sm">Cities</li>
            </ul>
          </div>

          <section className="md:hidden space-y-3 flex-1 flex-col mx-2">
            <hr className="h-px z-30 border-t-0 px-6 bg-white " />
            <p className="text-white font-extralight text-xs mb-2">
              Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.
            </p>
          </section>
        </div>

        <div className="absolute bottom-0 hidden gap-y-7 pb-5 w-screen px-10 md:flex flex-col items-center justify-center">
          <hr className="h-px z-30 w-full border-t-0 bg-white " />

          <p className="text-white">
            Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
