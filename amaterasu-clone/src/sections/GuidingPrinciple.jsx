import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/guiding_principle.scss";
import "../styles/stories.scss";
// import FixedBackground from "../components/FixedBackground";

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
    title: "Synergy with nature",
    description:
      "We closely partner with nature and deeply advocate for a relationship that embodies not only complete synergies within our innovation, but also to our approach to minimizing the use of compute resources to only as fundamentally required.",
  },
  {
    // number: "02",
    title: "Mental World Models",
    description:
      "We relentlessly pursue to model complexities across all levels of mental abstractions, towards a holistic unified view of your personality, even the abstractions and archetypes that might be confrontational. ",
  },
  {
    // number: "03",
    title: "Interconnected Systems",
    description:
      "We believe in empowering you with the ability to completely integrate transformational technologies in personalized ways that are meaningful and unique to you, accessible always, all of the time, and forever.",
  },
  {
    // number: "04",
    title: "Dynamic Diversity",
    description:
      "We move away from traditional categorical approaches to mental health-care and progress towards a true view of you. You are more than a categorical label, and we embrace the complexity associated with this.",
  },
  {
    // number: "05",
    title: "Pioneering Evolution",
    description:
      "We are dedicated to advancing the state of the art before it arrives, ensuring our innovations stay ahead of life’s challenges. By anticipating needs and championing continuous growth, we empower individuals with tools that unlock their future potential.",
  },
  {
    // number: "06",
    title: "Eternity",
    description:
      "We strive to solve mental-health unequivocally, relentlessly, and for all time, and will not deviate from this vision until it is complete.",
  },
];

// Stories data
const stories = [
  {
    text: `“It's hard to find a therapist who understands my cultural background. I often feel like they don’t get the unique pressures I face, which makes it harder to open up.”`,
    author: `Alex's struggle reflects the need for culturally competent care.`,
  },
  {
    text: `“There’s so much stigma around mental health that even when I reach out for help, I feel ashamed. The system doesn’t support openness, which makes it harder.”`,
    author: `Kevin’s experience highlights the emotional toll of stigma in seeking mental health support.`,
  },
  {
    text: `“Finding affordable mental health care feels impossible. It shouldn’t be a privilege to get help.”`,
    author: `Maria’s story emphasizes the importance of accessibility.`,
  },
];

export default function GuidingPrinciple() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // track only this section
  });

  // Clamp the motion between 0 and 1
  const clampedProgress = useTransform(scrollYProgress, (v) => Math.min(v, 0.9));

  const bigSixY = useTransform(clampedProgress, [0, 1], ["0%", "100%"]);
  const listY = useTransform(clampedProgress, [0, 1], ["0%", "-5%"]);

  // Stories state
  const [current, setCurrent] = useState(0);
  const nextStory = () => setCurrent((prev) => (prev + 1) % stories.length);
  const prevStory = () =>
    setCurrent((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <section className="guiding-principle" ref={sectionRef}>
      {/* <FixedBackground /> */}
      <div className="container">
        {/* Big Translucent 6 */}
        <motion.div
          className="big-six"
          style={{ y: bigSixY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          6
        </motion.div>

        {/* Right Side Content */}
        <motion.div className="principle-content" style={{ y: listY }}>
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
                key={index}
                className="principle-item"
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(5px)", // start blurred
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)", // clear blur
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="principle-text">
                  <span>
                    <span className="principle-dot"></span>
                    <h3>{item.title}</h3>
                  </span>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Next Stories Section */}
      <div className="stories-section">
        <div className="stories-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Perspectives
          </motion.h2>
          <motion.p
            className="stories-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Collective voices of human beings sharing their experiences with the
            current mental health care system. This is why we do what we do.
          </motion.p>
        </div>

        <div className="stories-content">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
            transition={{ duration: 0.8 }}
            className="story-text"
          >
            <p className="quote">{stories[current].text}</p>
            <p className="author">{stories[current].author}</p>
          </motion.div>

          <div className="stories-controls">
            <button onClick={prevStory}>&uarr;</button>
            <button onClick={nextStory}>&darr;</button>
          </div>
        </div>
      </div>
    </section>
  );
}
