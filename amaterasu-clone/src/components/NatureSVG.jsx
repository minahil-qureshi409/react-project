// components/NatureSVG.jsx
import React from "react";
import "../styles/nature-svg.scss";

const NatureSVG = ({ className = "", style = {} }) => {
  return (
    <svg
      className={`nature-svg ${className}`}
      style={style}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="white" strokeOpacity="0.9" strokeWidth="1">
        {/* Core concentric circles */}
        <circle cx="720" cy="450" r="100" />
        <circle cx="720" cy="450" r="200" />
        <circle cx="720" cy="450" r="400" />
        <circle cx="720" cy="450" r="600" />
        <circle cx="720" cy="450" r="800" />

        {/* Additional small offset circles for styling */}
        <circle cx="1120" cy="300" r="40" />
        <circle cx="1320" cy="450" r="120" />
        <circle cx="1240" cy="600" r="20" />
        <circle cx="300" cy="200" r="300" />
      </g>
    </svg>
  );
};

export default NatureSVG;
