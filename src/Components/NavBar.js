import React from "react";
import { NavLink } from "react-router-dom";
import spaloonlogo from "../assets/SpaloonImages/spaloonlogo.png";

const NavBar = () => {
  return (
    // ----------------- Style NavBar -----------------
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-gray-600 p-4 gap-4 sm:gap-6 md:gap-100">
      {/* Logo */}
      <NavLink className="flex justify-center w-24 sm:w-32 md:w-36" to="/">
        <img src={spaloonlogo} alt="Spaloon Logo" />
      </NavLink>

      {/* Pages */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
        <NavLink
          to="/"
          className="text-white font-bold text-base sm:text-lg md:text-xl"
        >
          Home
        </NavLink>
        <NavLink
          to="BookNow"
          className="text-white font-bold text-base sm:text-lg md:text-xl"
        >
          Book Now
        </NavLink>
        <NavLink
          to="Menu"
          className="text-white font-bold text-base sm:text-lg md:text-xl"
        >
          Menu
        </NavLink>
        <NavLink
          to="Locations"
          className="text-white font-bold text-base sm:text-lg md:text-xl"
        >
          Locations
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
