import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/vision.scss";

const Vision = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-10% 0px", once: true });

    const text =
        "We empower humanity with the tools, knowledge, and wisdom to face mental health challenges from a position of unprecedented resilience.";

    const words = text.split(" ");

    return (
        <section className="vision-wrapper">
            <span className="vision-label p-5 mt-5">
                <span className="vision-dot"></span> VISION
            </span>

            <h2 className="vision-section-text pt-5" ref={ref}>
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        className="word"
                        initial={{ filter: "blur(8px)", opacity: 0 }}
                        animate={
                            isInView
                                ? { filter: "blur(0px)", opacity: 1 }
                                : { filter: "blur(8px)", opacity: 0 }
                        }
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: i * 0.05, // 👈 stagger delay per word
                        }}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </h2>
        </section>
    );
};

export default Vision;
