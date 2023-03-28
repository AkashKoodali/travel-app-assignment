import { AiOutlineSearch } from "react-icons/ai";

const PackagesHero = () => {
  return (
    <>
    <div className="top-[128px] z-1 flex justify-center items-center mx-auto">
        <img
          className="w-[896.39px] h-[445.34px] object-cover"
          src="/vector.png"
          alt=""
        />
        <div className="absolute flex flex-col mx-auto items-center gap-10">
          <h1 className="text-[#3A3A3A] text-2xl md:text-5xl font-bold z-10">
            Maldives
          </h1>
          <div className="w-[428px] h-[60px] flex items-center justify-between rounded-full overflow-hidden border-2 border-[#979C9E]">
            <input
              className="h-full bg-transparent p-5 outline-none"
              type="text"
              placeholder="Type A destination"
            />
            <div className="m-1 h-[50px] w-[50px] bg-[#3282AD] rounded-full my-1 flex justify-center items-center">
              <AiOutlineSearch className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PackagesHero