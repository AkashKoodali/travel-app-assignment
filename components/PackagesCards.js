import React from "react";

const PackagesCards = ({img}) => {
  // const bestPackages = [
  //   {
  //     place: "Indonesia",
  //     amount: "500",
  //     des: "Explore the Beauty of the island for 3 days and 2 nights with our travata agency...",
  //     rating: 4.5,
  //     img: "/indonesia.png",
  //   },
  //   {
  //     place: "Indonesia",
  //     amount: "500",
  //     des: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
  //     rating: 4.5,
  //     img: "/indonesia1.png",
  //   },
  //   {
  //     place: "Indonesia",
  //     amount: "500",
  //     des: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
  //     rating: 4.5,
  //     img: "/indonesia2.png",
  //   },
  // ];
  return (
    <>
      <div className="h-[516px] w-[390px] bg-[#FFFFFF] shadow-md rounded-md">
        <img
          className="w-full h-[352px] rounded-t-md"
          src={img}
          alt=""
        />
        <div className="flex p-5 space-x-3">
          <div className="flex justify-between flex-col">
            <h1 className="text-base font-semibold text-[#000000]">
              Indonesia
            </h1>
            <h3 className="text-[#5A5A5A] text-sm font-thin">
              Explore the Beauty of the island for 3 days and 2 nights with our
              travata agency...
            </h3>
          </div>
          <div>
            4.5
          </div>
        </div>
        <div className="flex justify-center">
          <button className="py-2 px-5 bg-[#3282AD] text-white">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default PackagesCards;
