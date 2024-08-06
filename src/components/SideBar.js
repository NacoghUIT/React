import React from "react";
import CategoryDropDown from "./CategoryDropDown";
import Brand from "./Brand";
import Sliders from "./Sliders";
import FreeShip from "./FreeShip";
import Rating from "./Rating";
export function SideBar() {
  return (
    <div className="w-64">
      <CategoryDropDown />
      <hr className=""></hr>
      <Brand />
      <hr className="pb-4"></hr>
      <Sliders />
      <br></br>
      <hr className="pb-4"></hr>
      <FreeShip />
      <hr className="pb-4"></hr>
      <Rating />
    </div>
  );
}
export default SideBar;
