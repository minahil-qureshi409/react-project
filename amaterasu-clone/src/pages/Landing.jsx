import React, { useEffect } from "react";
import "../styles/landing.scss";
import { runLandingAnimation } from "../animations/landingAnimation";

const Landing = ({ onEnter }) => {
  useEffect(() => {
    runLandingAnimation();
  }, []);

  return (
    <div className="landing">
      <div className="circle center" onClick={onEnter}>
        <span>CLICK TO ENTER</span>
      </div>

      {/* 8 Outer Circles */}
      <div className="circle top" />
      <div className="circle bottom" />
      <div className="circle left"  />
      <div className="circle right"  />
      <div className="circle top-left"/>
      <div className="circle top-right" />
      <div className="circle bottom-left" />
      <div className="circle bottom-right"  />
    </div>
  );
};

export default Landing;
