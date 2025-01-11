import React, { useEffect, useState } from "react";
import Section1Intro from "./Section1Intro";
import Section2Items from "./Section2Items";
import { useRouter } from "next/navigation";

function Main() {
  const [category, setCategory] = useState("ready"); // Default category
  const router = useRouter();

  // Get the current category from the URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [window.location.search]); // Re-run when the URL search params change

  // Function to handle navigation
  const handleNavigation = (category) => {
    setCategory(category);
    router.push(`/products?category=${category}`);
  };

  return (
    <div>
      <Section1Intro />
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
              className={`flex flex-col items-center gap-1 px-2 py-1 rounded-xl font-medium text-sm ${
                category === item.value
                  ? "bg-teal-400 text-white"
                  : "border-2 border-teal-200 text-teal-500 hover:bg-teal-400 hover:text-white"
              } transition`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
      <Section2Items category={category} />
    </div>
  );
}

export default Main;
