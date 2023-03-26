'use client'

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-full mx-auto flex flex-col-reverse items-start justify-center md:flex-row md:items-center">

      {/* left */}
      <div className="ml-10 md:ml-20 lg:ml-30 ">
        <button className="px-8 md:px-10 py-3 rounded-full bg-[#b3e1f1]">Visit</button>
        <div className="flex flex-col text-4xl mt-10 md:10 font-bold md:text-7xl text-[#3A3A3A] space-y-3 md:space-y-10">
        <h1>
          The Exotic
        </h1>
        <span className="text-[#3282AD]">Lakshadweep</span>
        <h1>Island</h1>
        </div>
        <button className="px-8 mt-10 md:px-5 py-3 rounded-md font-semibold border-2 text-base text-[#3282AD] border-[#3282AD]">Discover Now</button>
      </div>

       {/* right */}
       <div className="w-screen h-full md:w-[950px] md:h-[800px] flex justify-center">
        <img className="w-full h-full bg-cover " src="/map.png" alt=""/>
        <div className="absolute top-8 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]">
          <img className="absolute w-full h-full object-contain z-10" src="/bg.png" alt="" />
          <img className="absolute w-full h-full object-fill bottom-3 right-3 top-1 z-30" src="/people.png" alt="" />
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
