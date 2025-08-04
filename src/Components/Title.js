import React from "react";

const Title = ({ TitleName }) => {
  return (
    <div
      style={{
        display: "flex",
        justifycontent: "center",
        alignitems: "center",
        backgoundcolor: "red",
        flexDirection: "column",
      }}
    >
      <h1> {TitleName} </h1>
    </div>
  );
};

export default Title;
