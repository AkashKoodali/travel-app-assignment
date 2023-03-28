import React from 'react'
import ClientCard from './ClientCard'

const ClientSays = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center mx-auto mt-32 gap-2">
        <h1 className="text-xl mx-auto md:text-2xl font-semibold text-[#3A3A3A]">
          What Our Clients Says
        </h1>
        <h1 className="text-xl mx-auto md:text-2xl font-semibold text-[#3A3A3A]">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 justify-center items-center md:flex-row max-w-7xl mx-auto mt-10 gap-x-8 ">
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </div>
    </>
  )
}

export default ClientSays