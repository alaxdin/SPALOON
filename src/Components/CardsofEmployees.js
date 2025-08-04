import React, { useState } from "react";

const CardsofEmployees = ({ nameofemployee, workofemployee }) => {
  // ---------------- for Button and Counter +1  -----------------
  const [counter, setCounter] = useState(0);

  const clickToBook = () => {
    setCounter(counter + 1);
    alert("Welcome to spaloon");
  };
  return (
    <div className="cardStyle">
      {/*  ------------------------------------ image ---------------------- */}

      {/* <img className="imgemployee" src={EmployeesData[0].image} /> */}

      {/* <img>{imgofemployee}</img> */}
      <h2>{nameofemployee} </h2>
      <h3>{workofemployee} </h3>
      {/* ------------------------------------------- Button ----------- */}
      <div className="ButtonBookNow">
        <button onClick={clickToBook}>Book Now</button>
      </div>
    </div>
  );
};

export default CardsofEmployees;
