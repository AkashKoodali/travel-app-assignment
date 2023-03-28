import PackagesCards from "./PackagesCards"


const BestPackages = () => {
  return (
    <>
    <div className="flex flex-col items-center mt-28 justify-center mx-auto gap-5">
          <h1 className="text-xl md:text-2xl font-semibold text-[#3A3A3A]">
            Best Packages For You
          </h1>
          <h3 className="text-sm font-sans text-[#5A5A5A] w-fit">
            This is a unique experience on ship, sea and land, exploring
            different coral islands of Lakshadweep.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row max-w-7xl gap-x-10 m-10 mx-auto">
          <PackagesCards img={"/indonesia.png"} />
          <PackagesCards img={"/indonesia1.png"} />
          <PackagesCards img={"/indonesia2.png"} />
        </div>
    </>
  )
}

export default BestPackages