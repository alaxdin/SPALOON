import React, { useState } from "react";
import EmployeesData from "./EmployeesData";
import CardsofEmployees from "./CardsofEmployees";
import Title from "./Title";

const EmployeeList = () => {
  const [searchquery, setsearchQuery] = useState("");
  const handelChange = (event) => {
    setsearchQuery(event.target.value);
  };
  // ----------------- Search Box -----------
  const searchBox = EmployeesData.filter((EmployeesData) =>
    EmployeesData.nameofemployee
      .toLowerCase()
      .includes(searchquery.toLowerCase())
  );

  const EmployeeList = searchBox.map((employee) => {
    return (
      <CardsofEmployees
        nameofemployee={employee.nameofemployee}
        workofemployee={employee.workofemployee}
      />
    );
  });

  return (
    <div>
      <div className="titlestyle">
        <Title TitleName="SPALOON" />
        {/* ----------- Search Box -------------- */}
        <input onChange={(event) => handelChange(event)} />
      </div>

      <div className="colorgraund">{EmployeeList}</div>
    </div>
  );
};

export default EmployeeList;
