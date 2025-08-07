import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import "../styles/technologies.scss";

const textVariant = {
  hidden: {
    // opacity: 0,
    // y: 60,
    filter: "blur(5px)",
    // scale: 1.05,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    // scale: 1,
    transition: {
      delay: 0.2 + i * 0.3,
      duration: 0.6,
      ease: "easeOut", // try "easeOut" or [0.42, 0, 0.58, 1]
    },
  }),
};

export default function Technologies() {
  const containerRef = useRef(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [activePanel, setActivePanel] = useState(null); // e.g., "quantum", "entropy", "clinical"

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Angle: from 0 (your right) to PI (your left)
  const angle = useTransform(
    scrollYProgress,
    [0, 0.55],
    [Math.PI * (120 / 180), Math.PI * (-75 / 180)]
  );

  const radius = -450;

  // Position: Arc from your right to your left
  const x = useTransform(angle, (a) => radius * Math.cos(a));
  const y = useTransform(angle, (a) => radius * Math.sin(a) - radius);

  // Rotation: rotate clockwise as it moves left
  const rotate = useTransform(angle, (a) => a * (287 / Math.PI)); // negative = clockwise

  const scale = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.03, 2]);
  // const showText = useTransform(scrollYProgress, (v) => v > 0.9); // Adjust as needed
  // Listen to scrollYProgress and update state
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIsTextVisible(v > 0.55); // Adjust this threshold if needed
  });

  return (
    <section className="technologies-section" ref={containerRef}>
      <div className="inner-container">
        {["Innovating", "the future of", "mental health"].map((line, i) => (
          <motion.h2
            key={i}
            className="tech-heading"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariant}
          >
            {line}
          </motion.h2>
        ))}

        <div className="tech-label-wrapper">
          <div className="tech-label">
            <span className="dot" />
            FRONTIER TECHNOLOGIES
          </div>

          <p className="tech-description">
            Amaterasu pioneers research at the intersection of quantum
            computing, neuroscience, and non-linear dynamics toward a
            frontier-pushing mental health care ecosystem.We leverage nature to
            delicer a degree of personalized mental ealth care not yet seen
            before.
          </p>
        </div>

        <div className={`main-content-wrapper ${activePanel ? "shifted" : ""}`}>
          <div class="triangle-wrapper">
            {/* Animated Triangle */}
            <motion.div
              className={`floating-triangle ${
                isTextVisible ? "show-content" : ""
              }`}
              onClick={() => setActivePanel("quantum")}
              style={{
                x,
                y,
                rotate,
                scale,
                filter: blur,
                opacity,
                position: "absolute",
                top: "5%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <button className="triangle-button">
                <div className="inner">
                  <svg
                    viewBox="0 0 350 251"
                    xmlns="http://www.w3.org/2000/svg"
                    className="technology-svg"
                  >
                    <defs>
                      <linearGradient
                        id="triangle-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#024ab0" />
                        <stop offset="100%" stopColor="#002437" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#triangle-gradient)"
                      d="M150.995 4.24999L286.528 239C289.415 244 285.806 250.25 280.033 250.25H8.96703C3.19353 250.25 -0.414931 244 2.47182 239L138.005 4.25001C140.892 -0.749992 148.108 -0.750008 150.995 4.24999Z"
                    />
                  </svg>
                </div>

                {/* ✅ Always rendered, shown only when .show-content is active */}
                <div className="triangle-text">
                  <p>
                    OUR MIND,
                    <br />A QUANTUM WORLD
                  </p>
                </div>
                <span className="plus-icon">+</span>
              </button>
            </motion.div>

            <div
              className={`static-triangles ${isTextVisible ? "visible" : ""}`}
            >
              <div
                className="triangle-button static"
                onClick={() => setActivePanel("entropy")}
              >
                <div className="inner">
                  <svg
                    viewBox="0 0 340 251"
                    xmlns="http://www.w3.org/2000/svg"
                    className="technology-svg"
                  >
                    <defs>
                      <linearGradient
                        id="triangle-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#024ab0" />
                        <stop offset="100%" stopColor="#002437" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#triangle-gradient)"
                      d="M150.995 4.24999L286.528 239C289.415 244 285.806 250.25 280.033 250.25H8.96703C3.19353 250.25 -0.414931 244 2.47182 239L138.005 4.25001C140.892 -0.749992 148.108 -0.750008 150.995 4.24999Z"
                    />
                  </svg>
                </div>
                <div className="triangle-text ">
                  <p>
                    BEAUTY IN
                    <br />
                    NATURE'S ENTROPY
                  </p>
                </div>
                <span className="plus-icon">+</span>
              </div>

              <div
                className="triangle-button static"
                onClick={() => setActivePanel("clinical")}
              >
                <div className="inner">
                  <svg
                    viewBox="0 0 340 251"
                    xmlns="http://www.w3.org/2000/svg"
                    className="technology-svg"
                  >
                    <defs>
                      <linearGradient
                        id="triangle-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#024ab0" />
                        <stop offset="100%" stopColor="#002437" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#triangle-gradient)"
                      d="M150.995 4.24999L286.528 239C289.415 244 285.806 250.25 280.033 250.25H8.96703C3.19353 250.25 -0.414931 244 2.47182 239L138.005 4.25001C140.892 -0.749992 148.108 -0.750008 150.995 4.24999Z"
                    />
                  </svg>
                </div>
                <div className="triangle-text mx-3 ">
                  <p>
                    APPLIED CLINICAL
                    <br />
                    BEST PRACTICES
                  </p>
                </div>
                <span className="plus-icon">+</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`side-panel ${activePanel ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setActivePanel(null)}>
            Close →
          </button>

          {activePanel === "quantum" && (
            <div className="panel-content">
              <h2>The quantum nature of thought</h2>
              <p>
                We are making long term investments in quantum computing
                research...
              </p>
            </div>
          )}

          {activePanel === "entropy" && (
            <div className="panel-content">
              <h2>Beauty in Nature's Entropy</h2>
              <p>
                Nature thrives in complexity, and our approach embraces that
                chaos...
              </p>
            </div>
          )}

          {activePanel === "clinical" && (
            <div className="panel-content">
              <h2>Applied Clinical Best Practices</h2>
              <p>
                We leverage advanced behavioral modeling to enhance real-world
                interventions...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
