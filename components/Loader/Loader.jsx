import React from "react";
import "./Loading.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
