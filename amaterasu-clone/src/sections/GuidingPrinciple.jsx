import React from "react";
import { motion } from "framer-motion";
import "../styles/guiding_principle.scss";

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

const principles = [
  {
    // dot: "01",
    title: "Transparency",
    description:
      "We believe in open communication and clarity in everything we do.",
  },
  {
    // number: "02",
    title: "Innovation",
    description: "We embrace creativity and challenge the status quo.",
  },
  {
    // number: "03",
    title: "Collaboration",
    description: "We work together to achieve extraordinary results.",
  },
  {
    // number: "04",
    title: "Integrity",
    description:
      "We uphold honesty and strong moral principles in every action.",
  },
  {
    // number: "05",
    title: "Empathy",
    description: "We listen and understand before acting.",
  },
  {
    // number: "06",
    title: "Excellence",
    description: "We strive for the highest quality in all our work.",
  },
];

export default function GuidingPrinciple() {
  return (
    <section className="guiding-principle">
      <div className="container">
        {/* Big Translucent 6 */}
        <motion.div
          className="big-six"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          6
        </motion.div>

        {/* Right Side Content */}
        <div className="principle-content">
          <div>
            {["Guiding", "Principles"].map((line, i) => (
              <motion.h2
                key={i}
                className="guiding-heading"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={textVariant}
              >
                {line}
              </motion.h2>
            ))}
            <p className="guiding-para">
              Through the seamless integration of our 6 guiding principles, we
              set in motion our relentless culture, focus, and ethics.
            </p>
          </div>

          <div className="principle-list">
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                className="principle-item"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false }}
              >
                <div className="principle-text">
                  <span >
                    <span className="principle-dot"></span>
                    <h3>{item.title}</h3>
                  </span>

                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
