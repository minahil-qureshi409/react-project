import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  // Scale range chosen so circle starts small and gradually fills viewport
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 2.2]);

  return (
    <section className="layers-section" ref={ref}>
     <motion.div className="layer-semicircle" style={{ scale }} />
      {layers.map((layer) => (
        <div key={layer.id} className="layer">
          <div className="layer-content">
            <h2>{layer.title}</h2>
            <p>{layer.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
