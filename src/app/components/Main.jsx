import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Section1Intro from "./Section1Intro";
import Section2Items from "./Section2Items";
import ChooseUs from "./ChooseUs";

function Main() {
  const [category, setCategory] = useState(""); // Default category
  const router = useRouter();

  // Get the current category from the URL (safe for SSR)
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [location]); // Re-run when the location (search params) change

  // Function to handle navigation
  const handleNavigation = (category) => {
    setCategory(category);
    router.push(`/products?category=${category}`);
  };

  return (
    <div>
      {/* Intro Section */}
      <Section1Intro />

      {/* Navigation Bar */}
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
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl font-medium text-sm transition ${
                category === item.value
                  ? "bg-teal-500 text-white shadow-lg"
                  : "border-2 border-teal-200 text-teal-600 hover:bg-teal-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Items Section */}
      <Section2Items category={category} />

      {/* Why Choose Us Section */}
      <ChooseUs />
    </div>
  );
}

export default Main;