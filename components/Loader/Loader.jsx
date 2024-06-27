import React from 'react';
import './Loading.css';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50">
      <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-[2px]" ></div>
      <div className="tetrominos relative z-10">
        <div className="tetromino box1"></div>
        <div className="tetromino box2"></div>
        <div className="tetromino box3"></div>
        <div className="tetromino box4"></div>
      </div>
    </div>
  );
};

export default Loader;