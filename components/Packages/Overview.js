import { AiOutlineMail } from "react-icons/ai";
import { FiUmbrella } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { TbPhonePlus } from "react-icons/tb";
import { HiOfficeBuilding, HiOutlineCalendar } from "react-icons/hi";

const Overview = () => {
  return (
    <>
         <div className="max-w-7xl mt-20 mx-auto flex gap-3 flex-col md:flex-row md:justify-between">
        <div className="w-[699px] flex flex-col gap-5">
          <div
            className="w-full h-[64px] p-5
        text-[#3A3A3A] flex justify-start items-center space-x-5 uppercase bg-white shadow-xl"
          >
            <span className="text-base font-normal">Overview</span>
            <span className="text-base font-normal">ITINERARY</span>
            <span className="text-base font-normal">ADDITIONAL INFO</span>
          </div>
          <img
            className="w-full h-[400px]"
            src="/person/Rectangle4.png"
            alt=""
          />

          <h1 className="text-lg font-medium text-[#3A3A3A]">
            Package Overview
          </h1>
          <span className="text-xs font-sans text-[#5A5A5A] space-y-1 leading-5 ">
            Experience World-class Service at Kandima Maldives - Escape the
            ordinary Located on the largest island in Dhaalu Atoll, Kandima
            Maldives has the longest outdoor swimming pool in the Maldives, an
            abundance of water-sports, the largest beach club and tennis and
            basketball courts. It offers a marine biology centre, an art studio
            and cooking classes. Located at a 30-minute flight from Male’ and
            followed by a 20-minute boat ride to the island, the resort offers
            studios and villas with a private terrace and private pool. They
            offer endless tropical views. For fitness lovers, Kandima Maldives
            has a gym with personal trainers and provides classes like
            anti-gravity yoga, Zumba, aqua-bike classes and POUND® fitness
            lessons. Guests can hire bikes or electric scooters. Guests can
            choose among the 10 restaurants and bars the property offers. Sea
            Dragon serves authentic Chinese cuisine while Forbidden Bar plays
            live music in the night. Start the day at Aroma with fresh beverages
            and baked goods. For total relaxation, choose from massages, facials
            and a range of Signature local treatments. The Kandima Kids Club is
            run by a multilingual team of certified child care-givers. We speak
            your language! Kandima Maldives - Escape the ordinary...
          </span>

          <hr className="h-px border-t-0 bg-[#A2A8AB]" />
        </div>

        {/* right */}
        <div className="w-[392px] space-y-5">
          <div className="w-full bg-white h-[64px] shadow-sm flex items-center justify-center gap-3">
            <span>Starting from</span>
            <span className="text-[#3282AD]">₹50,999</span>
          </div>

          <div className="bg-[#F6FDFF] h-[79px] shadow-sm flex flex-col items-center justify-center">
            <span>Want to Go For A Memorable Holiday?</span>
            <span className="font-thin text-xs mt-2 text-[#3A3A3A]">
              Provide Your Details to Know Best Holiday Deals
            </span>
          </div>

          <div className="p-8 bg-white mx-auto shadow-lg flex flex-col items-center justify-center gap-7">
            <div className="w-full space-y-3">
              <span className="text-[#3A3A3A] text-base">Package Name</span>
              <div className="w-full h-[42px] border-[#A2A8AB] rounded-md border flex items-center justify-start pl-2 gap-2">
                <FiUmbrella className="text-[#9A9A9A] h-[15px] w-[15px]" />
                <input
                  className="font-thin text-sm outline-none bg-transparent"
                  type="text"
                  placeholder="Explore Maldives"
                />
              </div>
            </div>

            <div className="w-full space-y-3">
              <span className="text-[#3A3A3A] text-base">
                City of Departure
              </span>
              <div className="w-full h-[42px] border-[#A2A8AB] rounded-md border flex items-center justify-start pl-2 gap-2">
                <HiOfficeBuilding className="text-[#9A9A9A] h-[15px] w-[15px]" />
                <input
                  className="font-thin text-sm outline-none bg-transparent"
                  type="text"
                  placeholder="City of Departure"
                />
              </div>
            </div>

            <div className="w-full space-y-3">
              <span className="text-[#3A3A3A]">Date of Departure</span>
              <div className="w-full h-[42px] border-[#A2A8AB] rounded-md border flex items-center justify-start pl-2 gap-2">
                <HiOutlineCalendar className="text-[#9A9A9A] h-[15px] w-[15px]" />
                <input
                  className="font-thin text-sm outline-none bg-transparent"
                  type="text"
                  placeholder="Date of Departure"
                />
              </div>
            </div>

            <div className="w-full space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-[#3A3A3A]">Contact Deails</span>
                <hr className="h-px w-32 border-t-0 bg-[#A2A8AB]" />
              </div>
              <div className="w-full h-[42px] border-[#A2A8AB] rounded-md border flex items-center justify-start pl-2 gap-2">
                <BsFillPersonFill className="text-[#9A9A9A] h-[15px] w-[15px]" />
                <input
                  className="font-thin text-sm outline-none bg-transparent"
                  type="text"
                  placeholder="Your Name"
                />
              </div>

              <div className="w-full h-[42px] border-[#A2A8AB] rounded-md border flex items-center justify-start pl-2 gap-2">
                <AiOutlineMail className="text-[#9A9A9A] h-[15px] w-[15px]" />
                <input
                  className="font-thin text-sm outline-none bg-transparent"
                  type="text"
                  placeholder="Your E-mail Address"
                />
              </div>

              <div className="flex h-[42px] gap-1">
                <div className="w-fit  border-[#A2A8AB] rounded-md border px-3 flex items-center">
                  +91
                </div>

                <div className="w-full h-[42px] border-[#A2A8AB] rounded-md border flex items-center justify-start pl-2 gap-2">
                    <TbPhonePlus className="text-[#9A9A9A] h-[15px] w-[15px]" />
                  <input
                    className="font-thin text-sm outline-none bg-transparent"
                    type="text"
                    placeholder="Mobile No."
                  />
                </div>
              </div>
            </div>

            <button className="w-full px-5 py-3 rounded-md font-medium border text-base text-[#3282AD] border-[#3282AD]">
              Sent Query
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview;