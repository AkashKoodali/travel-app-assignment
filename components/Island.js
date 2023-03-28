import IslandStays from "./IslandStays"


const Island = () => {
  return (
    <>
         <div className="flex flex-col items-center justify-center mx-auto mt-32 md:px-56 gap-5">
        <h1 className="text-xl mx-auto md:text-2xl font-semibold text-[#3A3A3A]">
          Island Stays
        </h1>
        <h3 className="text-sm mx-1 font-sans text-[#5A5A5A] md:mx-20">
          One can choose from a variety of beautiful coral islands which offers
          different staying experiences from thatched huts to luxurious modern
          properties. Every island offers a wider range of water sports and
          beach activities for you to enjoy.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-fit mx-auto gap-x-10 gap-y-10 mt-10 max-w-7xl">
        <IslandStays />
        <IslandStays />
        <IslandStays />
        <IslandStays />
        <IslandStays />
        <IslandStays />
      </div>
    </>
  )
}

export default Island