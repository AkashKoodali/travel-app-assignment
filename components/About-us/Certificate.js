

const Certificate = () => {
  return (
    <>
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
    </>
  )
}

export default Certificate