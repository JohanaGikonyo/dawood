import React from "react";
import CallIcon from "@mui/icons-material/Call";
import Search from "./Search";
import logo from "../../../public/logodawoodweb.png";
import Image from "next/image";

function Header() {
  return (
    <header className="p-4 bg-gradient-to-b from-teal-100 to-teal-50 shadow-md ">
      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Website Logo"
            width={80}
            height={80}
            // className="rounded-full border-2 border-teal-400 shadow-md hover:shadow-lg transition-all"
          />
          <div className="flex flex-col">
            <p className="text-lg lg:text-2xl font-bold text-red-400 tracking-wide">
            DAMIL  FURNITURES DESIGN
            </p>
            <h1 className="text-sm lg:text-lg font-semibold text-gray-800">
              <span className="text-teal-600">Your Furniture</span> Design
            </h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:block w-1/3">
          <Search />
        </div>

        {/* Call Us Button */}
        <div className="lg:flex items-center gap-0 hidden ">
          <button className="flex items-center justify-center bg-teal-500 text-white font-medium rounded-l-full px-3 py-2 hover:bg-teal-600 transition-all">
            <CallIcon className="w-5 h-5" />
          </button>
          <button className="bg-teal-500 text-white font-medium rounded-r-full px-4 py-2 hover:bg-teal-600 transition-all">
            <a href="tel:+254710434297" className="ml-1">
              Call Us
            </a>
          </button>
        </div>

        {/* Responsive Search Bar */}
        <div className="block lg:hidden w-full">
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;
