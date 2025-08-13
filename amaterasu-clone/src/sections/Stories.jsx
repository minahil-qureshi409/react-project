// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "../styles/stories.scss";

// const stories = [
//   {
//     text: `“It's hard to find a therapist who understands my cultural background. I often feel like they don’t get the unique pressures I face, which makes it harder to open up.”`,
//     author: `Alex's struggle reflects the need for culturally competent care.`,
//   },
//   {
//     text: `“There’s so much stigma around mental health that even when I reach out for help, I feel ashamed. The system doesn’t support openness, which makes it harder.”`,
//     author: `Kevin’s experience highlights the emotional toll of stigma in seeking mental health support.`,
//   },
//   {
//     text: `“Finding affordable mental health care feels impossible. It shouldn’t be a privilege to get help.”`,
//     author: `Maria’s story emphasizes the importance of accessibility.`,
//   },
// ];

// const Stories = () => {
//   const [current, setCurrent] = useState(0);

//   const nextStory = () => {
//     setCurrent((prev) => (prev + 1) % stories.length);
//   };

//   const prevStory = () => {
//     setCurrent((prev) => (prev - 1 + stories.length) % stories.length);
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//     exit: { opacity: 0, y: -40, filter: "blur(8px)", transition: { duration: 0.5 } },
//   };

//   return (
//     <section className="stories-section">
//       <div className="stories-header">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           Perspectives
//         </motion.h2>
//         <motion.p
//           className="stories-subtitle"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           Collective voices of human beings sharing their experiences with the
//           current mental health care system. This is why we do what we do.
//         </motion.p>
//       </div>

//       <div className="stories-content">
//         <motion.div
//           key={current}
//           variants={textVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="story-text"
//         >
//           <p className="quote">{stories[current].text}</p>
//           <p className="author">{stories[current].author}</p>
//         </motion.div>

//         <div className="stories-controls">
//           <button onClick={prevStory}>&uarr;</button>
//           <button onClick={nextStory}>&darr;</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stories;
