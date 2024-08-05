import React from "react";

export function Filters() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-1/5 border-b py-8">
        <div>Filters</div>
        <div>Clear filters</div>
      </div>
      <div className="flex justify-end border-b py-8 w-full ml-12">
        <select className="mr-4">
          <option value="1">Sort by feature</option>
          <option value="2">Price ascending</option>
          <option value="3">Price descending</option>
        </select>
        <select className="">
          <option value="1">16 hits per page</option>
          <option value="2">32 hits per page</option>
          <option value="3">48 hits per page</option>
        </select>
      </div>
    </div>
  );
}
export default Filters;
