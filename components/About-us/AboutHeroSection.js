import Circles from "../Circles";

const AboutHeroSection = () => {
  return (
    <>
        <div className="top-[128px] z-1 flex justify-center items-center mx-auto">
        <img
          className="w-[896.39px] h-[445.34px] object-cover"
          src="/vector.png"
          alt=""
        />
        <div className="absolute flex flex-col mx-auto items-center gap-10">
          <h1 className="text-[#3A3A3A] mt-20 text-2xl md:text-5xl font-bold whitespace-nowrap z-10">
            About Us
          </h1>
          <Circles />
        </div>
      </div>
    </>
  )
}

export default AboutHeroSection;
