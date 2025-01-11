import React from "react";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import img1 from "../../../public/introdawoodimage.jpeg";
import Image from "next/image";

function Section1Intro() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-10 px-4 bg-gradient-to-t from-teal-100 to-teal-50">
      <div className="text-left space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-teal-500 mr-1">Quality Furniture</span>Designers
        </h1>
        <h2 className="text-xl text-gray-600">Get Your Desired Furniture Design!</h2>
        <div className="lg:flex md:flex gap-4 flex-wrap hidden">
          <a
            href="tel:+254710434297"
            className="flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
          >
            <CallIcon fontSize="small" className="mr-2" />
            +254 710 434297
          </a>
          <a
            href="https://wa.me/+254710434297"
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
          >
            <WhatsAppIcon fontSize="small" className="mr-2" />
            WhatsApp Us
          </a>
          <a
            href="mailto:dawoodfurnitures@gmail.com"
            className="flex items-center border border-black text-gray-800 px-4 py-2 rounded-full hover:bg-slate-900 hover:text-slate-50"
          >
            <EmailIcon fontSize="small" className="mr-2" />
            Email Us
          </a>
        </div>
      </div>
      <div className="relative">
        <Image
          src={img1}
          alt="Dawood Furnitures (Introduction to Dawood Furniture)"
          width={600}
          height={400}
          layout="responsive" // Use layout="responsive" for Next.js Image
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}

export default Section1Intro;
