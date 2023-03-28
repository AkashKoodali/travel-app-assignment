import Image from "next/image";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { categories } from "../data/constants.js";

import NavLink from "./NavLink.js";

const NavBar = () => {

  const pathname = usePathname();

  const isActive = (path) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <header className="flex p-5 md:p-10 md:px-20 top-0 items-center justify-between ">
      <Link href={"/"}>
        <Image src="/logo.png" alt="logo" width={80} height={50} />
      </Link>
      <div className="hidden md:flex md:space-x-5 xl:space-x-10 text-[#3A3A3A] ">
        {
          categories.map((category) => (
            <NavLink isActive={isActive(category)} category={category} key={category} />
          ))
        }
      </div>
      <div className="flex space-x-5">
        <button className="font-semibold text-[#3282AD]">Login</button>
        <button className="text-white font-semibold px-4 py-2 bg-[#3282AD] rounded-full">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default NavBar;
