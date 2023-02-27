import React, { useState, useEffect } from "react";

const NeonButton = ({ label, float = "left", transparent = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`relative bg-cyan-${transparent ? 0 : 500} text-${
        transparent ? "cyan-800" : "white"
      } float-${float} font-bold py-2 px-4 rounded mt-[1rem] overflow-hidden shadow-md hover:shadow-lg focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-cyan`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <span
        className={`absolute inset-0 rounded-md transition-all duration-300 ${
          isHovered ? "opacity-50" : "opacity-0"
        }`}></span>
      <span
        className={`absolute inset-0 rounded-md transition-all duration-300 ${
          isHovered ? "opacity-75" : "opacity-0"
        }`}></span>
      <span
        className={`absolute inset-0 rounded-md transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}></span>
      <span
        className={`${
          isHovered || transparent ? "text-cyan-800" : "text-white"
        }`}>
        {label}
      </span>
    </button>
  );
};

export default NeonButton;
