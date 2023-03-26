import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <header className="flex p-5 md:p-10 md:px-20 top-0 items-center justify-between ">
      <Image src="/logo.png" alt="logo" width={80} height={50} />
      <div className="hidden md:flex space-x-10 text-[#3A3A3A] ">
        <h1 className="text-base">Find Reservation</h1>
        <h1 className="text-base">Packages</h1>
        <h1 className="text-base">About Lakshadeep</h1>
        <h1 className="text-base">About Us</h1>
        <h1 className="text-base">Gol</h1>
        <h1 className="text-base">Support</h1>
      </div>
      <div className="flex space-x-5">
        <button className="font-semibold text-[#3282AD]">Login</button>
        <button className="text-white font-semibold px-4 py-2 bg-[#3282AD] rounded-full">Sign Up</button>
      </div>
    </header>
  );
};

export default NavBar;
