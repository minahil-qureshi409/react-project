import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/hero.scss";
import girlbgImage from "../assets/girlbg.png";

const Hero = () => {

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // 👇 fade out scroll text within first 2% of hero section scroll
  const scrollTextOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

  useEffect(() => {
    // Cursor outer circle
    const outerCursor = document.querySelector(".cursor-outer");
    const button = document.querySelector(".start-journey-btn");

    if (outerCursor && button) {
      const handleEnter = () => {
        outerCursor.classList.add("hovering-button");
      };
      const handleLeave = () => {
        outerCursor.classList.remove("hovering-button");
      };

      button.addEventListener("mouseenter", handleEnter);
      button.addEventListener("mouseleave", handleLeave);

      return () => {
        button.removeEventListener("mouseenter", handleEnter);
        button.removeEventListener("mouseleave", handleLeave);
      };
    }
  }, []);

  return (
    <div className="hero-outer-wrapper" ref={scrollRef}>
      <div className="hero-fixed-image" />
      <motion.section className="hero-scroll-wrapper" style={{ y, opacity }}>
        {/* Blobs */}
        {/* <div className="blobs">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
        </div> */}

        {/* Sticky Content */}

        <motion.div className="content-wrapper text-white d-flex flex-column justify-content-center align-items-end px-2">
          {["Empower", "your mental", "health journey"].map((line, index) => (
            <motion.h1
              key={index}
              className="hero-title display-3 mb-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.4,
                ease: "easeOut",
              }}
            >
              {line}
            </motion.h1>
          ))}

          <motion.button
            className="start-journey-btn mt-3"
            data-text="START YOUR JOURNEY"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <span className="btn-text">START YOUR JOURNEY</span>
          </motion.button>



        </motion.div>

        {/* Bottom Right Text Box */}
        <motion.div
          className="hero-bottom-box position-absolute p-3"
          style={{
            zIndex: 5,
            bottom: "9rem",
            right: "30px",
            // borderRadius: "12px",
            color: "white",
            maxWidth: "280px",
            fontSize: "0.9rem",
          }}
        >
          <p className="mb-0">
            Amaterasu is a physics cognition lab working at the intersection
            of technology and nature to transform mental health.
          </p>
        </motion.div>

      </motion.section>
      {/* Hollow Circle with Wave Line */}
      <div
        className="hero-wave-circle"
        style={{
          position: "fixed",
          bottom: "3.5rem",
          right: "45px",
          width: "60px",
          height: "60px",
          border: "1px solid",
          color: "rgba(255,255,255,0.5)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999, // Optional, to ensure it's above other content
        }}
      >
        <svg
          width="24"
          height="10"
          viewBox="0 0 24 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5 Q5 0 8 6 T14 5 T20 5"
            // d="M2 6 Q6 0 10 6 T18 6 T26 6"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>



      {/* Scroll to Explore */}
      <motion.div className="hero-scroll-text text-white text-uppercase small " style={{ opacity: scrollTextOpacity }}>
        Scroll to explore
        <span>↓</span>
      </motion.div>

    </div>
  );
};

export default Hero;
