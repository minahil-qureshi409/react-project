// src/components/Hero.jsx
// import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.scss"; // assuming your styles are here
// import GirlBg from "../components/GirlBg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="blobs">
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>
  </div>
      <div className="content-wrapper">
        <div className="hero-title">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
           EMPOWER
          </motion.h1>
        </div>
        <div className="hero-title">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
           YOUR MENTAL
          </motion.h1>
        </div>
        <div className="hero-title">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
           HEALTH JOURNEY
          </motion.h1>
        </div>
        {/* <div className="hero-subtitle">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Enlightening minds with technology
          </motion.p>
        </div> */}
      </div>
      
    </section>
    
  );
};

export default Hero;
