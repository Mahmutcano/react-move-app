import Example from "./Dropdown/DropdownMenu";
import React from "react";


const Header = () => {
  return (
    <div className="bg-brand-dark-color h-[64px]">
      <div className="h-11 flex relative items-center gap-1">
        <div className="w-[80px] p-3">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#F2F4F8"
              d="M32.2,-50.7C38,-52.4,36.5,-36.3,42.2,-24.9C47.9,-13.5,60.9,-6.7,56.2,-2.7C51.6,1.4,29.3,2.7,17.2,3.1C5.1,3.4,3.1,2.7,2,18.7C0.8,34.7,0.4,67.3,-3.8,73.9C-7.9,80.4,-15.9,60.9,-20,46.6C-24.2,32.3,-24.5,23.3,-34.6,16.4C-44.8,9.5,-64.8,4.8,-74.7,-5.7C-84.6,-16.2,-84.4,-32.4,-70.5,-32.9C-56.7,-33.3,-29.1,-17.9,-15,-11.4C-1,-5,-0.5,-7.4,6.3,-18.4C13.2,-29.4,26.4,-48.9,32.2,-50.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <Example />
      </div>
      </div>
  );
};

export default Header;
