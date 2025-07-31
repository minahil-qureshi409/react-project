import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "../styles/layers.scss";
import { setCursorScrollProgress } from "../animations/cursorAnimation";

const LAYER_START = 0.87;
const LAYER_END = 1.1;

export default function Layers() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 2.2]);
  // const smoothScale = useSpring(scale, { damping: 30, stiffness: 100 });

  const x = useTransform(scrollYProgress, [0.3, 1], ["0%", "-300%"]);
  const smoothX = useSpring(x, { stiffness: 50, damping: 10 });
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const progress = useTransform(
    scrollYProgress,
    [LAYER_START, LAYER_END],
    [0, 1]
  );
  const [cursorActive, setCursorActive] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    const unsubscribe = scale.on("change", (s) => {
      const shouldShow = s > LAYER_START;
      setCursorActive(shouldShow);
      document.body.classList.toggle("cursor-ring-active", shouldShow);

      if (shouldShow) {
        let progressVal = 0;

        if (s > LAYER_START && s <= LAYER_END) {
          // Layer 1 progress
          progressVal = (s - LAYER_START) / (LAYER_END - LAYER_START);
          setActiveLayer(1);
          document.body.dataset.cursorLayer = "01";
        } else if (s > LAYER_END && s <= 1.33) {
          // Layer 2 progress
          progressVal = (s - LAYER_END) / (1.33 - LAYER_END);
          setActiveLayer(2);
          document.body.dataset.cursorLayer = "02";
        } else if (s > 1.33 && s <= 1.56) {
          // Layer 3 progress
          progressVal = (s - 1.33) / (1.56 - 1.33);
          setActiveLayer(3);
          document.body.dataset.cursorLayer = "03";
        } else if (s > 1.56 && s <= 1.79) {
          // Layer 4 progress
          progressVal = (s - 1.56) / (1.79 - 1.56);
          setActiveLayer(4);
          document.body.dataset.cursorLayer = "04";
        }

        setCursorScrollProgress(Math.min(1, Math.max(0, progressVal))); // ✅ ENABLE THIS
      }
    });

    return () => unsubscribe();
  }, [scale]);

  // useEffect(() => {
  //   return scrollYProgress.on("change", (latest) => {
  //     const layerIndex = Math.min(
  //       Math.floor(((latest - 0.3) * layers.length) / 0.7),
  //       layers.length - 1
  //     );
  //     setActiveLayerIndex(layerIndex);
  //     if (cursorActive) {
  //       document.body.dataset.cursorLayer = `${String(layerIndex + 2).padStart(
  //         2,
  //         "0"
  //       )}`;
  //     }
  //   });
  // }, [scrollYProgress, cursorActive]);

  return (
    <section className="layers-section" ref={ref}>
      {/* Semicircle */}
      <motion.div className="layer-semicircle" style={{ scale }} />

      {/* Bottom Text for Layer 1 */}
      {cursorActive && activeLayer === 1 && (
        <motion.div
          className="bottom-left-text"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {"Our minds are a deep reflection of nature, yet our internal world has driven too far from natural order."
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                className="word"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </motion.div>
      )}

      {/* Layer 2 Content */}
      {cursorActive && activeLayer === 2 && (
        <motion.div
          className="bottom-left-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {"Its now our duty to restore balance and hormony."
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                className="word"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </motion.div>
      )}

      {/* Layer 3 */}
      {cursorActive && activeLayer === 3 && (
        <>
          {/* Paragraph */}
          <motion.div
            className="bottom-left-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {"Modern mental health care operates in a linear way, isolating insights over long periods of time, with little consideration or ability to map a full view of the mind."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  className="word"
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
          </motion.div>

          {/* Animated Circles */}
          <motion.div
            className="layer3-timeline"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <div className="timeline-row">
              {[...Array(2)].flatMap((_, repeatIndex) =>
                [
                  { label: "UNDERSTAND THE PATIENT", size: 260 },
                  { label: "INITIAL ASSESSMENT", size: 260 },
                  { label: "EVALUATION", size: 260 },
                  { label: "ASSESSMENT CONTINUED", size: 260 },
                  { label: "DIAGNOSTIC", size: 260 },
                  { label: "RE-DO INITIAL ASSESSMENT", size: 260 },
                ].map((circle, i) => (
                  <React.Fragment key={`${repeatIndex}-${i}`}>
                    <div
                      className="timeline-circle"
                      style={{ width: circle.size, height: circle.size }}
                    >
                      <span>{circle.label}</span>
                    </div>
                    <div className="timeline-arrow mx-3">→</div>
                  </React.Fragment>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}

      {/* Layer 4 Content */}
      {cursorActive && activeLayer === 4 && (
  <>
    <motion.div
      className="bottom-left-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {"Amaterasu moves beyond the linear leverage non linear dynamics to capture fully connected consious mind, toward holistic dynamic, and interconnected"
        .split(" ")
        .map((word, i) => (
          <motion.span
            key={i}
            className="word"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
    </motion.div>

    <div className="layer4-flower">
      {[
        { x: 0, y: 0, text: "HUMAN" }, // center
        { x: -130, y: -130 }, // top-left
              { x: 130, y: -130 }, // top-right
              { x: -130, y: 130 }, // bottom-left
              { x: 130, y: 130 }, // bottom-right
              { x: 0, y: -220 }, // top
              { x: 0, y: 220 }, // bottom
              { x: -230, y: 0 }, // left
              { x: 230, y: 0 }, // right
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="flower-circle"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: pos.x, y: pos.y, opacity: 1 }}
          transition={{
            delay: i * 0.08,
            duration: 2,
            ease: [0.25, 1.1, 0.5, 1],
          }}
        >
          {pos.text && <span className="center-text">{pos.text}</span>}
        </motion.div>
      ))}
    </div>
  </>
)}

    </section>
  );
}
