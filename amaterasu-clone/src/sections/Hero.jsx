import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion } from "framer-motion";
// import HeroGirlModel from "../components/HeroGirlModel";
import "../styles/hero.scss";
import girlbgImage from "../assets/girlbg.png";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="hero-container position-relative overflow-hidden d-flex align-items-center"
      style={{
        height: "100vh",
        backgroundImage: `url(${girlbgImage})`,
        backgroundSize: "49%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      {/* Background Blobs */}
      <div className="blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>

      {/* Hero Text Content */}
      <div
        className="content-wrapper text-white d-flex flex-column justify-content-center align-items-end px-2"
        style={{ width: "50vw" }}
      >
        {["Empower", "your mental", "health journey"].map((line, index) => (
          <motion.h1
            key={index}
            className="hero-title display-3 mb-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.4, ease: "easeOut" }}
          >
            {line}
          </motion.h1>
        ))}

        <motion.button
          className="btn btn-primary mt-4 px-5 py-3 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          START YOUR JOURNEY
        </motion.button>
      </div>

      {/* Bottom Right Text Box */}
      <motion.div
        className="hero-bottom-box position-absolute p-3"
        style={{
          bottom: "9rem",
          right: "30px",
          // backgroundColor: "rgba(255, 255, 255, 0.08)",
          // border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "12px",
          color: "white",
          // backdropFilter: "blur(10px)",
          maxWidth: "280px",
          fontSize: "0.9rem",
        }}
        // initial={{ opacity: 0, y: 30 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ delay: 2, duration: 0.5 }}
      >
        {/* <h6 className="mb-2 fw-semibold">Need Help?</h6> */}
        <p className="mb-0">
          Amaterasu is a physics cognition lab working at the intersection of
          technology and nature to transform mental health.
        </p>
      </motion.div>
      {/* Hollow Circle with Wave Line */}
  <div
  className="hero-wave-circle position-absolute"
  style={{
    bottom: "3.5rem",
    right: "45px",
    width: "60px",
    height: "60px",
    border: "1px solid white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <svg
    width="18"
    height="8"
    viewBox="0 0 18 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="wave-svg"
  >
    <path
      className="wave-path"
      d="M1 4C3 0 5 8 7 4C9 0 11 8 13 4C15 0 17 8 17 4"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
</div>


      {/* Bottom Left Scroll Text */}
      <div
        className="hero-scroll-text position-absolute text-white text-uppercase small"
        style={{
          bottom: "3rem",
          left: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.8rem",
          letterSpacing: "1px",
        }}
      >
        Scroll to explore
        <span style={{ fontSize: "1rem",padding:"0",margin:"0" }}>↓</span>
      </div>
    </section>
  );
};

export default Hero;
