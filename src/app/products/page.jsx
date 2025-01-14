"use client";

import React, { useEffect, useState } from "react";
import Ready from "../components/Ready";
import Recliners from "../components/Recliners";
import NewFurniture from "../components/NewFurniture";
import Beds from "../components/Beds";
import Office from "../components/Office";
import Repair from "../components/Repair";
import Pillows from "../components/Pillows";

import Antics from "../components/Antics";

import { useRouter } from "next/navigation";
import SouthIcon from "@mui/icons-material/South";

function Page() {
  const router = useRouter();
  const [category, setCategory] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category") || "ready"; // Default to "ready"
    setCategory(cat);
  }, []);

  // Function to handle navigation
  const handleNavigation = (category) => {
    router.push(`/products?category=${category}`);
    setCategory(category); // Update state manually
  };

  // Render the appropriate section
  const renderSection = () => {
    switch (category) {
      case "ready":
        return <Ready />;
      case "new":
        return <NewFurniture />;
      case "repair":
        return <Repair />;
      case "recliners":
        return <Recliners />;
      case "office":
        return <Office />;
      case "beds":
        return <Beds />;
      case "pillows":
        return <Pillows />;
      case "antics":
        return <Antics />;
      default:
        return <Ready />; 
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-100 to-teal-50 min-h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="sticky top-0 bg-gradient-to-r from-teal-100 to-teal-50  z-10 ">
        <div className="flex justify-around lg:justify-center overflow-x-auto no-scrollbar py-4 gap-5 px-5">
         {[
          { label: "Ready", value: "ready" },
          { label: "Antics", value: "antics" },

          { label: "New", value: "new" },
          { label: "Repair", value: "repair" },
          { label: "Recliners", value: "recliners" },
          { label: "Office", value: "office" },
          { label: "Pillows", value: "pillows" },

          { label: "Beds", value: "beds" },

        ].map((item) => (
          <button
            key={item.value}
            onClick={() => handleNavigation(item.value)}
            className={`px-2 py-1 rounded-xl font-medium text-sm ${
              category === item.value
                ? "bg-teal-600 text-white"
                : "border-2 border-teal-200 text-teal-500 hover:bg-teal-400 hover:text-white"
            } transition`}
          >
            {item.label}
          </button>
        ))}
        </div>

      </nav>
      {/* Main Content */}
      <div className="flex-1">
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Item
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            From New furniture, repairs ex UK, recliner imported, dining tables
            and chairs, office table & chairs, church & restaurant benches, to beds.
          </p>
          <div className="mt-8">
            <SouthIcon className="text-blue-500" />
          </div>
        </div>
        {renderSection()}
      </div>
    </div>
  );
}

export default Page;
