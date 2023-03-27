import NavBar from "../../components/NavBar";

const index = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#c4ebf7] h-[100vh] opacity-80-100 to-[#FFFFFF]/10">
      <NavBar />

      {/* hero */}
      <div className="top-[128px] z-1 flex justify-center items-center mx-auto">
        <img
          className="w-[896.39px] h-[445.34px] object-cover"
          src="/vector.png"
          alt=""
        />
        <h1 className="text-[#3A3A3A] text-2xl md:text-5xl absolute font-bold z-10">
          About Us
        </h1>
      </div>

      {/* our team */}
      <div
        className="relative z-10 
        bg-[#F6FDFF] mt-36 p-10 max-w-7xl mx-auto h-[216px] flex flex-col items-center justify-center space-y-7"
      >
        <h1 className="text-[#3A3A3A] text-2xl md:text-3xl font-normal">
          Our Team
        </h1>
        <h3 className="text-base font-thin">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos.
        </h3>
      </div>
      {/*  */}
      <div className="max-w-7xl mx-auto flex mt-10 h-[420px] space-x-10">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="w-[64px] h-[64px]">
            <img
              className="h-full w-full object-cover"
              src="/person/Oval.png"
              alt=""
            />
          </div>
          <div className="w-[64px] h-[64px]">
            <img
              className="h-full w-full object-cover"
              src="/person/Oval1.png"
              alt=""
            />
          </div>
          <div className="w-[64px] h-[64px]">
            <img
              className="h-full w-full object-cover"
              src="/person/Oval3.png"
              alt=""
            />
          </div>
          <div className="w-[64px] h-[64px]">
            <img
              className="h-full w-full object-cover"
              src="/person/Oval4.png"
              alt=""
            />
          </div>
          <div className="w-[64px] h-[64px]">
            <img
              className="h-full w-full object-cover"
              src="/person/Oval5.png"
              alt=""
            />
          </div>
        </div>

        <div className="md:flex justify-between md:space-x-10">
          <img
            className="h-full object-cover w-[598px] "
            src="/person/Rectangle.png"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="text-xl font-semibold text-[#3282AD]">
              Sebastian Bennett
            </h1>
            <h4 className="text-lg font-semibold text-black mt-7 mb-10">
              Founder, LEad Photographer, CEO
            </h4>
            <span className="text-sm font-light text-[#5A5A5A]">
              Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his
              dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera
              integre suavitate per an, alienum phaedrum te sea. Ex sea causae
              dolores, nam et doming dicunt feugait. Ea mel scripta aperiri
              postulant. Ut sed affert audire.
            </span>
          </div>
        </div>
      </div>

      {/* Certificate */}
      <div className="max-w-7xl bg-[#F5F5F5] mx-auto mt-20 flex flex-col items-center p-10">
        <h1 className="text-[#3A3A3A] text-2xl md:text-3xl font-normal mx-auto">
          Certificate
        </h1>
        <h4 className="text-sm font-light mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id turpis
          sodales, facilisis massa at, rutrum eros.
        </h4>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 mt-7 ">
          <img
            className="h-[355px] w-[601px] object-cover rounded-md"
            src="/person/video.png"
            alt=""
          />
          <img
            className="h-[355px] w-[601px] object-cover rounded-md"
            src="/person/video.png"
            alt=""
          />
          <img
            className="h-[355px] w-[601px] object-cover rounded-md"
            src="/person/video.png"
            alt=""
          />
          <img
            className="h-[355px] w-[601px] object-cover rounded-md"
            src="/person/video.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default index;
