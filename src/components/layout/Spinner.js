import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img src={spinner} alt="spinner" className="spinner"/>
    </div>
  );
};

export default Spinner;
