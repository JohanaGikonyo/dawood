import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Section1Intro from "./Section1Intro";
import Section2Items from "./Section2Items";
import ChooseUs from "./ChooseUs";

function Main() {
  const [category, setCategory] = useState(""); // Default category
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the current category from the URL (safe for SSR)
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [searchParams]); // Re-run when the searchParams change

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
      <nav className="sticky top-0 bg-gradient-to-r from-teal-100 to-teal-50 overflow-x-auto no-scrollbar z-10 px-5 pr-14">
        <div className="flex justify-around lg:justify-center py-4 gap-5">
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
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl font-medium text-sm transition ${
                category === item.value
                  ? "bg-teal-500 text-white shadow-lg"
                  : "border-2 border-teal-200 text-teal-600 hover:bg-teal-400 hover:text-white"
              } focus:outline-none focus:ring-2 focus:ring-teal-300`}
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
