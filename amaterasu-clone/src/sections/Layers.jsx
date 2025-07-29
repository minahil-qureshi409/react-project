import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "../styles/layers.scss";

const layers = [
  { id: 1, title: "Chaos → Order", content: "Emergence from disorder…" },
  { id: 2, title: "Digital Twin", content: "Your mirrored model…" },
  { id: 3, title: "Quantum Simulation", content: "Mental states running…" },
  { id: 4, title: "Treatment Insight", content: "Clarity forms…" },
];

export default function Layers() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 2.2]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const smoothX = useSpring(x, { stiffness: 50, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0.18, 0.25], [0, 1]);

  const [cursorActive, setCursorActive] = useState(false);
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  // ✅ Change layer index + number ring on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const layerIndex = Math.floor(latest * layers.length);
      setActiveLayerIndex(layerIndex);

      // Update number in cursor ring
      document.body.dataset.cursorLayer = `${String(layerIndex + 1).padStart(2, "0")}`;
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // ✅ Use semicircle scale to trigger ring/text activation
  useEffect(() => {
    const unsubscribe = scale.on("change", (s) => {
      const shouldShow = s > 0.87; // ⬅️ adjust this threshold to match visual scale
      setCursorActive(shouldShow);

      if (shouldShow) {
        document.body.classList.add("cursor-ring-active");
      } else {
        document.body.classList.remove("cursor-ring-active");
      }
    });

    return () => unsubscribe();
  }, [scale]);

  return (
    <section className="layers-section" ref={ref}>
      {/* ⬆️ Semicircle that scales on scroll */}
      <motion.div className="layer-semicircle" style={{ scale }} />

      {/* ⬅️ Horizontal scroll track */}
      <div className="layers-scroll-container">
        <motion.div className="layers-track" style={{ x: smoothX, opacity }}>
          {layers.map((layer) => (
            <div key={layer.id} className="layer">
              <div className="layer-content">
                <h2>{layer.title}</h2>
                <p>{layer.content}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ⬇️ Bottom left text appears when cursorActive is true */}
      {cursorActive && (
        <div className="bottom-left-text d-flex flex-column ">Our minds are a deep reflection of nature, yet our internal world has driven too far from natural order.</div>
      )}
    </section>
  );
}
