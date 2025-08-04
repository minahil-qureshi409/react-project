import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.2 + i * 0.3, duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function Technologies() {
  return (
    <section className="technologies-section">
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
      </div>
    </section>
  );
}
