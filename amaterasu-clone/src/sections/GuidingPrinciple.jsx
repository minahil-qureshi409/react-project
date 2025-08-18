import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import "../styles/guiding_principle.scss";
import "../styles/stories.scss";
// import FixedBackground from "../components/FixedBackground";
import {
  startStoryLoader,
  stopStoryLoader,
} from "../animations/cursorAnimation";

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
    text: `“There is so much stigma around mental health that even when i reach out for help, I feel ashamed. The system doesn't support oppeness, which make it harder” Kevin's experience highlights the meotional tall of stigma in seeking mental health support.`,
    author: `Kevin 30 -FINANCE ANALYST `,
  },
  {
    text: `“I've been on a waitlist for month and everyday feels like a battle. Th esystem is so slow to respond that there is no help for people in immediate crisea.” Sarah's experience empasizes the urgency of addressing delays in mental health support`,
    author: `SARAH, 29 -MARKETING PROFESSIONAL`,
  },
  {
    text: `“Every therapist i see has a differnt idea of what's wrong with me, but none seem to get it right. It's exausting to be readdressed constantly without real progress.” John's frustration underscores the challenge of inconsitent diagnosis."`,
    author: `JOHN,35 -SOFTWARE ENGINEER`,
  },
  {
    text: `“I've had to switch therapist multiple times and every time i do it fees like strating from the square one" Emily's experence highlights theinstability and lack of continuity in mental health care.`,
    author: `EMILY, 41 -EDUCATOR`,
  },
  {
    text: `“It's hard to find the therapist who understands my cultural background. I often feel like they don't get the unique pressure i feel, which make i harder to open up." Alex's struggle reflect the need for culturally competent care`,
    author: `ALEX,26 -GRADUATE STUDENT`,
  },
  {
    text: `“The mental health system feels like it's cnstantly playing catch-up. By the time you get the help you need, it's already too late for so many people" Olivia's frustration speaks to the slow response in proviing timely care.`,
    author: `OLIVIA,24 -UNIVERSITY STUDENT`,
  },
];

export default function GuidingPrinciple() {
  const principleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: principleRef,
    offset: ["start start", "end end"], // track only this section
  });

  // Clamp the motion between 0 and 1
  const clampedProgress = useTransform(scrollYProgress, (v) =>
    Math.min(v, 0.9)
  );

  const bigSixY = useTransform(clampedProgress, [0, 1], ["0%", "100%"]);
  const listY = useTransform(clampedProgress, [0, 1], ["0%", "-5%"]);

  // Stories state
  const storiesRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState(null); // which card is sliding out

  // Cycle to next story
  const nextStory = () => {
    setLeavingIndex(current); // trigger slide-left animation
  };

  // Start/stop loader when cursor enters/leaves
  useEffect(() => {
    const section = storiesRef.current;
    if (!section) return;

    const handleEnter = () => {
      document.body.classList.add("stories-active");
      startStoryLoader(nextStory); // when loader finishes, it calls nextStory()
    };
    const handleLeave = () => {
      document.body.classList.remove("stories-active");
      stopStoryLoader();
    };

    section.addEventListener("mouseenter", handleEnter);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mouseenter", handleEnter);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="guiding-principle" ref={principleRef}>
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
      <div className="stories-section" ref={storiesRef}>
        <div className="stories-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Personal <br /> Perspectives
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

        <div className="stories-stack">
          {stories.map((story, index) => {
            const isActive = index === current;
            const isNext = index === (current + 1) % stories.length;
            const isPrev =
              index === (current - 1 + stories.length) % stories.length;
            const isLeaving = index === leavingIndex;

            // keep only active/next/prev + leaving
            if (!isActive && !isNext && !isPrev && !isLeaving) return null;

            // base positions
            let animateTo;
            if (isLeaving) {
              animateTo = {
                x: "-120%", // slide off left
                opacity: 0,
                filter: "blur(8px)",
                zIndex: 4,
              };
            } else if (isActive) {
              animateTo = {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1.2,
                zIndex: 3,
                filter: "blur(0px)",
              };
            } else if (isNext) {
              animateTo = {
                x: 590,
                y: -49,
                opacity: 0.6,
                scale: 0.7,
                zIndex: 2,
                filter: "blur(4px)",
              };
            } else {
              // prev
              animateTo = {
                x: 320,
                y: -260,
                opacity: 0.6,
                scale: 0.5,
                zIndex: 2,
                filter: "blur(4px)",
              };
            }

            return (
              <motion.div
                key={index}
                className="story-card"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={animateTo}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ pointerEvents: isLeaving ? "none" : "auto" }}
                onAnimationComplete={() => {
                  // when the leaving card finishes its slide, switch current
                  if (isLeaving) {
                    setCurrent((prev) => (prev + 1) % stories.length);
                    setLeavingIndex(null); // reset
                  }
                }}
              >
                <p className="quote">{story.text}</p>
                <p className="author">{story.author}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
