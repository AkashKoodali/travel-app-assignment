import IslandStays from "./IslandStays"
import PackagesCards from "./PackagesCards";


const Island = () => {
  const bestPackages = [
    {
      place: "Indonesia",
      des: "Explore the Beauty of the island for 3 days and 2 nights with our travata agency...",
      rating: 4.5,
      img: "/island/is1.png",
    },
    {
      place: "Indonesia",
      des: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
      rating: 4.5,
      img: "/island/is2.png",
    },
    {
      place: "Indonesia",
      des: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
      rating: 4.5,
      img: "/island/is3.png",
    },
    {
      place: "Indonesia",
      des: "Explore the Beauty of the island for 3 days and 2 nights with our travata agency...",
      rating: 4.5,
      img: "/island/is4.png",
    },
    {
      place: "Indonesia",
      des: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
      rating: 4.5,
      img: "/island/is5.png",
    },
    {
      place: "Indonesia",
      des: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
      rating: 4.5,
      img: "/island/is6.png",
    },

  ];
  return (
    <>
      <div className="flex flex-col items-center mt-28 justify-center w-full mx-auto gap-5">
        <h1 className="text-xl md:text-2xl font-semibold text-[#3A3A3A]">
        Island Stays
        </h1>
        <p className="text-sm font-sans text-[#5A5A5A] w-fit mx-2">
        One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious
 modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 m-10 mx-auto">
      {
      bestPackages.map((data, index) => (
        <IslandStays key={index} {...data}/>
        ))
        }
      </div>
      </div>
    </>
  );
};

export default Island