import React, { useEffect } from "react";
import "../styles/hero.scss";
import { registerScrollAnimations } from "../animations/scrollAnimations";

const Hero = () => {
  useEffect(() => {
    registerScrollAnimations();
  }, []);

  return (
    <section className="section hero" id="hero">
      <div className="container">
        <h1 className="hero-title">Welcome to Amaterasu</h1>
        <p className="hero-subtitle">A clone built from scratch with magic ✨</p>
      </div>
    </section>
  );
};

export default Hero;
