import { AiFillStar } from "react-icons/ai";

const IslandStays = (props) => {
  return (
    <>
      <>
        <div className="w-[296px] h-[400px] md:h-[516px] pb-4 md:w-[390px] bg-[#FFFFFF] flex-1 flex justify-between flex-col shadow-md rounded-md">
          <div className="relative">
            <img
              className="w-full h-[200px] md:h-[352px] rounded-t-md"
              src={props.img}
              alt=""
            />
          </div>
          <div className="flex p-5 space-x-3">
            <div className="flex justify-between flex-col">
              <h1 className="text-base font-semibold text-[#000000]">
                {props.place}
              </h1>
              <h3 className="text-[#5A5A5A] text-sm font-thin">{props.des}</h3>
            </div>
          </div>
          <div className="flex items-center justify-between px-5">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-1">
              <div className="flex items-center space-x-1">
                <AiFillStar className="text-[#42A7C3]" /> 
                <span>{props.rating}</span>
              </div>

              <span className="text-sm font-thin text-gray-500">(1.5K Reviews)</span>
            </div>
            <button className="py-2 px-5 bg-[#3282AD] text-white rounded-md whitespace-nowrap">
              Explore More
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default IslandStays;
