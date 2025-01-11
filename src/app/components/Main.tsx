import React from "react";
import Section1Intro from "./Section1Intro";
import Section2Items from "./Section2Items";
import { useSearchParams, useRouter } from "next/navigation";

function Main() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");

  // Function to handle navigation
  const handleNavigation = (category: string) => {
    router.push(`/products?category=${category}`);
  };
  return (
    <div>
      <Section1Intro />
      <nav className="sticky top-0 bg-gradient-to-r from-teal-100 to-teal-50  overflow-x-auto no-scrollbar z-10 px-5 pr-14 ">
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
                  : " border-2 border-teal-200 text-teal-500 hover:bg-teal-400 hover:text-white"
              } transition`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
      <Section2Items />
    </div>
  );
}

export default Main;
