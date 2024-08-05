import React, { useState } from "react";
const categories = [
  {
    title: "Audio",
    subcategories: ["Headphones", "Cable & Charges", "Home Audio"],
  },
  {
    title: "Electronics",
    subcategories: ["Laptops", "Desktops", "Tablets"],
  },
  {
    title: "Clothing",
    subcategories: ["Men's", "Women's", "Kids"],
  },
];

export function CategoryDropDown() {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div className="">
      <div className="px-4 py-3">
        <h3 className="font-medium text-gray-800 text-left">Categories</h3>
      </div>
      <div className="">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <div
              className={`flex justify-start items-center px-4 py-3 cursor-pointer ${
                activeCategory === index
                  ? "text-black-900 font-bold"
                  : "text-gray-800"
              }`}
              onClick={() => toggleCategory(index)}
            >
              <svg
                className={`w-4 h-4 text-gray-500 category-icon ${
                  activeCategory === index ? "rotate-180 " : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="text-gray-800 ml-4">{category.title}</span>
              <span class="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-md ml-2">
                10
              </span>
            </div>
            <div
              className={`category-content px-4 space-y-2 ${
                activeCategory === index ? "" : "hidden"
              }`}
            >
              <ul className="space-y-2">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>
                    <div className="flex justify-start items-center px-4 py-1 cursor-pointer">
                      <svg
                        className={`w-4 h-4 text-gray-500 category-icon ${
                          activeCategory === index
                            ? "rotate-180 text-gray-900"
                            : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span className="text-gray-800 ml-4">{subcategory}</span>
                      <span class="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-md ml-2">
                        10
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CategoryDropDown;
