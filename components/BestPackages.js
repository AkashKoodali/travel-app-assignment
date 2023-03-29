import PackagesCards from "./PackagesCards";


const BestPackages = (collections) => {
  console.log(collections);
  // const bestPackages = [
  //   {
  //     place: "Indonesia",
  //     amount: "₹500",
  //     des: "Explore the Beauty of the island for 3 days and 2 nights with our travata agency...",
  //     rating: 4.5,
  //     img: "/indonesia.png",
  //   },
  //   {
  //     place: "Indonesia",
  //     amount: "₹500",
  //     des: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
  //     rating: 4.5,
  //     img: "/indonesia1.png",
  //   },
  //   {
  //     place: "Indonesia",
  //     amount: "₹500",
  //     des: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
  //     rating: 4.5,
  //     img: "/indonesia2.png",
  //   },
  // ];
  return (
    <>
      <div className="flex flex-col items-center mt-10 md:mt-0 justify-center w-full mx-auto gap-5">
        <h1 className="text-xl md:text-2xl font-semibold text-[#3A3A3A]">
          Best Packages For You
        </h1>
        <p className="text-sm font-sans text-[#5A5A5A] w-fit mx-2">
          This is a unique experience on ship, sea and land, exploring different
          coral islands of Lakshadweep.
        </p>

        <div className="w-full bg-white h-[50px] text-xs md:text-base md:h-[78px] max-w-7xl mx-2 flex flex-row border justify-center mt-10 shadow-md rounded-md overflow-hidden">
          <button className="h-full w-full border-r bg-[#3282AD] text-white">
            Maldives
          </button>
          <button className="h-full w-full border-r text-[#3282AD]">
            Samudram
          </button>
          <button className="h-full w-full border-r text-[#3282AD]">
            Cordelia
          </button>
          <button className="h-full w-full border-r text-[#3282AD]">
            Agatti
          </button>
          <button className="h-full w-full text-[#3282AD]">More</button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 m-10 mx-auto">
    {
      collections.collections.map((collection) => (
        // console.log(collection)
        <PackagesCards key={collection.length} {...collection}/>
      ))
    }
        {/* <PackagesCards /> */}
      
      </div>
      </div>
    </>
  );
};

export default BestPackages;

