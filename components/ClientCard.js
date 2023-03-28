import { AiFillStar } from "react-icons/ai";

function ClientCard() {
  return (
    <div className="w-[303px] h-[450px] flex flex-col bg-white p-10 items-center space-y-8 rounded-md shadow-lg 
    hover:shadow-2xl">
      <img className="w-[131px] h-[131px] shadow-xl rounded-full" src="/person/Oval.png" alt="" />
      <div className="flex flex-col items-center">
      <h1 className="text-lg font-bold">Roman Rey</h1>
      <h5 className="text-sm font-medium">Toranto, Canada</h5>
      </div>
    
      <span className="text-xs font-normal pt-5 px-18">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        efficitur ac quam in congue.{" "}
      </span>
      <div className="w-full flex mb-7">
        <AiFillStar className="w-[39px] h-[39px] text-[#3282AD]"/>
        <AiFillStar className="w-[39px] h-[39px] text-[#3282AD]"/>
        <AiFillStar className="w-[39px] h-[39px] text-[#3282AD]"/>
        <AiFillStar className="w-[39px] h-[39px] text-[#3282AD]"/>
        <AiFillStar className="w-[39px] h-[39px] text-[#3282AD]"/>
      </div>
    </div>
  );
}

export default ClientCard;
