import React, { useRef, useEffect } from "react";
import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";
import "../styles/technologies.scss";

const textVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.2 + i * 0.3,
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

export default function Technologies() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Angle: from 0 (your right) to PI (your left)
  const angle = useTransform(scrollYProgress, [0, 0.55],[Math.PI * (120 / 180), Math.PI * (-75 / 180)]);

  const radius = -500;

  // Position: Arc from your right to your left
  const x = useTransform(angle, (a) => radius * Math.cos(a));
  const y = useTransform(angle, (a) => radius * Math.sin(a) - radius );

  // Rotation: rotate clockwise as it moves left
  const rotate = useTransform(angle, (a) => a * (287 / Math.PI)); // negative = clockwise

  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "20px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.03, 1]);

  return (
    <section className="technologies-section" ref={containerRef}>
      {/* Invisible SVG path for triangle animation */}
      {/* <svg width="0" height="0">
        <path
          ref={pathRef}
          id="trianglePath"
          d="M 90 800 C 100 400, 400 100, 300 -100"
          fill="none"
        />
      </svg> */}

      <div className="inner-container">
        {["Innovating", "the future of", "mental health"].map((line, i) => (
          <motion.h2
            key={i}
            className="tech-heading"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
          >
            {line}
          </motion.h2>
        ))}

        <motion.div
          className="tech-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="dot" />
          FRONTIER TECHNOLOGIES
        </motion.div>

        <motion.p
          className="tech-description"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Amaterasu pioneers research at the intersection of quantum computing,
          neuroscience, and non-linear dynamics toward a frontier-pushing mental
          health care ecosystem.
        </motion.p>

        {/* Animated Triangle */}
        <motion.div
          className="floating-triangle"
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
            transform: "translate(50%, 50%)",
            // translateX: -117.123,
            // translateY: -858.829
          }}
        >
          <button className="triangle-button">
            <div className="inner">
              <svg
                viewBox="0 0 350 251"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="technology-svg"
              >
                <path
                  fill="currentColor"
                  d="M150.995 4.24999L286.528 239C289.415 244 285.806 250.25 280.033 250.25H8.96703C3.19353 250.25 -0.414931 244 2.47182 239L138.005 4.25001C140.892 -0.749992 148.108 -0.750008 150.995 4.24999Z"
                />
              </svg>
            </div>
            <div className="hover" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
