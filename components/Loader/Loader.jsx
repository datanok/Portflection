import React from "react";
import "./Loading.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50">
      <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-[2px]"></div>
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
