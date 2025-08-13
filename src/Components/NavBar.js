import React from "react";
import { NavLink } from "react-router-dom";
import spaloonlogo from "../assets/SpaloonImages/spaloonlogo.png";

const NavBar = () => {
  return (
    // ----------------- Style NavBar -----------------
    <div className="flex gap-10 justify-center items-center bg-gray-600 ">
      {/* ------------------  image logo in NavBar ------------- */}
      <NavLink className="flex justify-left object-cover w-36" to="/">
        <img src={spaloonlogo} />
      </NavLink>

      {/* -------------------------- Pages in NavBar -------------- */}
      <NavLink to="/" style={{ color: "white" }}>
        <h1 className="font-bold text-xl">Home</h1>
      </NavLink>
      <NavLink to="BookNow" style={{ color: "white" }}>
        <h1 className="font-bold text-xl w-full md:w-auto ">Book Now</h1>
      </NavLink>
      <NavLink to="Menu" style={{ color: "white" }}>
        <h1 className="font-bold text-xl">Menu</h1>
      </NavLink>
      <NavLink to="Locations" style={{ color: "white" }}>
        <h1 className="font-bold text-xl">Locations</h1>
      </NavLink>
    </div>
  );
};

export default NavBar;
