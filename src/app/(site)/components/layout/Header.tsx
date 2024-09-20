"use client";
import React from "react";
import logo from "/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { Input } from "../ui/input";
import { navigations } from "../Hamburger";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Hamburger from "../Hamburger";

const Header = () => {
  const cartValue = useSelector(
    (state: RootState) => state.counter.totalQuantity
  );

  return (
    <div className="flex justify-between items-center px-8 py-6 ">
      <Link href={"/"}>
        {" "}
        <Image src={logo} alt="logo" className="w-32 md:w-36 lg:w-40 xl:w-48" />
      </Link>
      <nav className="flex justify-evenly mx-4 items-center md:text-lg   gap-x-4 lg:gap-x-10  max-md:hidden  ">
        {navigations.map((item, idx) => (
          <li className="list-none  hover:border-purple-400" key={idx}>
            {" "}
            <Link href={item.link}>{item.name}</Link>{" "}
          </li>
        ))}
      </nav>
      <div className="flex  justify-center items-center gap-x-2 sm:gap-x-3 md:gap-x-5">
        <div className=" hidden sm:block  rounded-xl border-2  border-black hover:border-gray-400 ">
          <div className="flex content-center w-64 justify-center items-center">
            <Search className="h-7   sm:border-r-2 border-black hover:border-gray-400" />
            <Input
              type="input"
              placeholder="What you looking for"
              className=" h-7  border-0  rounded-r-xl  "
            />
          </div>
        </div>

        <div className="relative h-10 w-10 rounded-full  bg-gray-200 flex justify-center items-center">
          <span className="absolute right-1 top-0 rounded-full bg-red-500 px-1 py-0.5 text-sx text-white">
            {cartValue}
          </span>
          <ShoppingCart className="h-6 w-6" />
        </div>
        <div className="relative sm:hidden mr-4">
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Header;
