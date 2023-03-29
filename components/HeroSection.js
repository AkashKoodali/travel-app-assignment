import { FaCompass } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative w-full mx-auto flex flex-col-reverse items-start justify-center lg:flex-row md:items-center">

      {/* left */}
      <div className="ml-10 md:ml-20 lg:ml-30 ">
        <div className="w-[177px] rounded-full bg-[#b3e1f1] h-[54px] flex items-center justify-center gap-4 cursor-pointer">
        <button className="text-2xl font-light">Visit</button>
        <FaCompass className="w-[35px] h-[35px]" />
        </div>
        
        <motion.div 
         initial={{
          y: 50,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }} 
        className="flex flex-col text-4xl mt-10 md:10 font-bold md:text-7xl text-[#3A3A3A] space-y-3 md:space-y-10">
        <h1>
          The Exotic
        </h1>
        <span className="text-[#3282AD]">Lakshadweep</span>
        <h1>Island</h1>
        </motion.div>
        <button className="px-8 mt-10 md:px-5 py-3 rounded-md font-semibold border-2 
        text-base text-[#3282AD] border-[#3282AD]">Discover Now</button>
      </div>

       {/* right */}
       <motion.div 
        initial={{
          x: 50,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }} 
       className="h-full sm:w-screen lg:w-[950px] lg:h-[800px] flex justify-center">
        <img className="w-full h-full mx-auto bg-cover " src="/map.png" alt=""/>
        <div className="absolute top-8 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden">
          <img className=" w-full overflow-hidden h-full object-contain z-10" src="/bg.png" alt="" />
          <img className="absolute w-full overflow-hidden h-full object-fill bottom-3 right-3 top-1 z-30" src="/people.png" alt="" />
        </div>
      </motion.div>

    </div>
  );
};

export default HeroSection;
