import React, { useEffect } from "react";
import "../styles/landing.scss";
import { runLandingAnimation } from "../animations/landingAnimation";

const Landing = ({ onEnter }) => {
  useEffect(() => {
    runLandingAnimation();
  }, []);

  return (
    <div className="landing">
      <div className="circle center loader" onClick={onEnter}>
        <span>CLICK TO ENTER</span>
      </div>

      {/* 8 Outer Circles */}
      <div className="circle outer top" />
      <div className="circle outer bottom" />
      <div className="circle outer left"  />
      <div className="circle outer right"  />
      <div className="circle outer top-left"/>
      <div className="circle outer top-right" />
      <div className="circle outer bottom-left" />
      <div className="circle outer bottom-right"  />
    </div>
  );
};

export default Landing;