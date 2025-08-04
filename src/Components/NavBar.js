import React from "react";
import { NavLink } from "react-router-dom";
import spaloonlogo from "../assets/SpaloonImages/spaloonlogo.png";

const NavBar = () => {
  return (
    // ----------------- Style NavBar -----------------
    <div className="flex gap-10 justify-center items-center  w-[100%] lg:w-[100%]  h-50 bg-gray-600 ">
      {/* ------------------  image logo in NavBar ------------- */}
      <NavLink className="flex justify-left object-cover w-36" to="/">
        <img src={spaloonlogo} />
      </NavLink>

      {/* -------------------------- Pages in NavBar -------------- */}
      <NavLink to="/" style={{ color: "white" }}>
        <h1 className="font-bold text-xl">Home</h1>
      </NavLink>
      <NavLink to="BookNow" style={{ color: "white" }}>
        <h1 className="font-bold text-xl">Book Now</h1>
      </NavLink>
      <NavLink to="ContactUs" style={{ color: "white" }}>
        <h1 className="font-bold text-xl">Contact Us</h1>
      </NavLink>
      <NavLink to="Locations" style={{ color: "white" }}>
        <h1 className="font-bold text-xl">Locations</h1>
      </NavLink>
    </div>
  );
};

export default NavBar;
