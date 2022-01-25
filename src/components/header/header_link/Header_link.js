import React from "react";
import { Link } from "react-router-dom";
function Header_link() {
  return (
    <div>
      <ul className="flex items-center text-white font-bold text-[17px] justify-center">
        <li className="header_link">How it works</li>
        <li className="header_link">Pricing</li>
        <li className="header_link">Contact us</li>
        <li className="header_link ">More</li>
        <li className="header_link ">Merch</li>
      </ul>
    </div>
  );
}

export default Header_link;
