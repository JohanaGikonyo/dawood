import React,{useState} from "react";

import SouthIcon from "@mui/icons-material/South";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {itemsCategory} from "../helpers/helpers";
// import Ready from './Ready'
import Image from "next/image";
import { useRouter } from "next/navigation";
function Section2Items() {
  const router=useRouter();
  const [category, setCategory]=useState("ready");
  const handleClick=(item)=>{
     setCategory(item.category)
     router.push(`/products?category=${item.category}`);
  }
  return (
    <div>
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Item</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          From New furniture,antics sofa's, repairs ex UK sofa's & imported recliner,local sofa's office table  and chairs,church & restaurant  benches , to beds & pillows
        </p>
        <div className="mt-8">
          <SouthIcon className="text-blue-500" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-9 gap-10">
  {itemsCategory.map((item) => (
    <div
      key={item.id}
      onClick={()=>handleClick(item)}
      className="flex hover:cursor-pointer  justify-between items-center lg:p-3 bg-gradient-to-l from-teal-100 to-teal-50 rounded-md   md:col-span-3 md:flex-row"
    >
      {/* Left Section: Title and Button */}
      <div className="flex-1 flex flex-col items-start ml-2">
        <p className="text-base font-semibold text-gray-800">{item.title}</p>
        <button className="flex items-center mt-2 text-sm font-medium text-blue-600 hover:text-blue- hover:bg-teal-50 border-blue-300  border-2 px-2 py-1  rounded-2xl"       onClick={()=>handleClick(item)} 
        >
          {item.button} <ArrowRightAltIcon className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* Right Section: Image */}
      <div className=" flex-shrink-0 right-0 mr-0">
        <Image
          src={item.img}
          alt="item image"
          className="w-40 lg:w-auto lg:h-40  h-full object-cover  rounded-md"
        />
      </div>
    </div>
  ))}
</div>
{/* <Ready/> */}

    </div>
  );
}

export default Section2Items;
