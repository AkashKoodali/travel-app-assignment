import { AiFillStar } from "react-icons/ai";

const PackagesCards = (props) => {

  return (
    <>
      <div className="w-[296px] h-[400px] md:h-[516px] pb-4 md:w-[390px] bg-[#FFFFFF] flex-1 flex justify-between flex-col shadow-xl hover:scale-105 
  hover:shadow-2xl transition-all duration-200 ease-out rounded-md">
            <div className="relative">
              <img
                className="w-full h-[200px] md:h-[352px] rounded-t-md"
                src={props.img}
                alt=""
              />
              <span className="absolute top-2 right-2 text-[#3282AD] text-sm font-bold py-1 px-2 bg-white rounded-full">{props.amount}</span>
            </div>
            <div className="flex p-5 space-x-1">
              <div className="flex justify-between flex-col">
                <h1 className="text-base font-semibold text-[#000000]">
                  {props.place}
                </h1>
                <h3 className="text-[#5A5A5A] text-sm font-thin">
                  {props.des}
                </h3>
              </div>
              <AiFillStar className="w-6 h-6 text-[#42A7C3]"/>
              <span>{props.rating}</span>
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
