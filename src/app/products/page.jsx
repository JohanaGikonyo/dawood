"use client";

import React, { Suspense } from "react";
import Ready from "../components/Ready";
import Recliners from "../components/Recliners";
import NewFurniture from "../components/NewFurniture";
import Beds from "../components/Beds";
import Office from "../components/Office";
import Repair from "../components/Repair";
import { useSearchParams, useRouter } from "next/navigation";
import SouthIcon from "@mui/icons-material/South";

function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");

  // Function to handle navigation
  const handleNavigation = (category) => {
    router.push(`/products?category=${category}`);
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
      default:
        return <Ready />; // Default to Ready section
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-gradient-to-r from-teal-100 to-teal-50 min-h-screen flex flex-col">
        {/* Top Navigation */}
        <nav className="flex justify-center gap-4 py-4 sticky top-0 bg-gradient-to-r from-teal-100 to-teal-50 overflow-x-auto no-scrollbar z-10 px-10 pl-64">
          {[
            { label: "Ready", value: "ready" },
            { label: "New", value: "new" },
            { label: "Repair", value: "repair" },
            { label: "Recliners", value: "recliners" },
            { label: "Office", value: "office" },
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
        </nav>

        {/* Main Content */}
        <div className="flex-1">
          <div className="text-center py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Choose Your Item
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              From New furniture, repairs ex UK, recliner imported, dining
              tables and chairs, office table & chairs to beds.
            </p>
            <div className="mt-8">
              <SouthIcon className="text-blue-500" />
            </div>
          </div>
          {renderSection()}
        </div>
      </div>
    </Suspense>
  );
}

export default Page;
