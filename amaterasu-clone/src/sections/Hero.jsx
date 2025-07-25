import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/hero.scss";
import girlbgImage from "../assets/girlbg.png";

const Hero = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0,1], ["0%", "-100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

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
              className="btn btn-primary mt-4 px-5 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              START YOUR JOURNEY
            </motion.button>
          </motion.div>

          {/* Bottom Right Text Box */}
          <motion.div
            className="hero-bottom-box position-absolute p-3"
            style={{
               zIndex: 5,
              bottom: "9rem",
              right: "30px",
              borderRadius: "12px",
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
       

        {/* Hollow Circle with Wave Line */}
        <div className="sound hero-wave-circle position-fixed">
          <svg
            width="40"
            height="10"
            viewBox="0 0 40 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" stroke="white" strokeWidth="0.9">
              <animate
                attributeName="d"
                dur="2s"
                repeatCount="indefinite"
                values="
                  M0,5 Q5,0 10,5 T20,5 T30,5 T40,5;
                  M0,5 Q5,14 10,5 T20,5 T30,5 T40,5;
                  M0,5 Q5,0 10,5 T20,5 T30,5 T40,5
                "
              />
            </path>
          </svg>
        </div>

        {/* Scroll to Explore */}
        <div className="hero-scroll-text position-absolute text-white text-uppercase small">
          Scroll to explore
          <span>↓</span>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
