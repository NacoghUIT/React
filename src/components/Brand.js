import React, { useState, useEffect } from "react";

export function Brand() {
  const [brands, setBrands] = useState([
    { name: "Apple", count: 20 },
    { name: "Android", count: 18 },
    { name: "Samsung", count: 15 },
    { name: "Google", count: 12 },
    { name: "Microsoft", count: 10 },
    { name: "HP", count: 100 },
    { name: "GE", count: 1 },
    { name: "Sony", count: 50 },
    { name: "KitchenAir", count: 3 },
    { name: "Whirlpool", count: 14 },
    // Add more brands here
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  // Sort the brands by product count in descending order
  const sortedBrands = [...brands].sort((a, b) => b.count - a.count);

  // Filter the brands based on the search term
  const filteredBrands = searchTerm
    ? sortedBrands.filter((brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : sortedBrands.slice(0, 5);

  return (
    <div className="p-4 w-64">
      <h3 className="text-gray-800 font-semibold mb-4 text-left">Brands</h3>
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-3 py-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search brands"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        {filteredBrands.map((brand) => (
          <div key={brand.name} className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-800">{brand.name}</span>
            <span class="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-md ml-2">
              {brand.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Brand;
