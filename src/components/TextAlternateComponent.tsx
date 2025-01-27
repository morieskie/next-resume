"use client"
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

const TextAlternateComponent = ({ content }: { content: string[] }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextIndex((prev) => (prev + 1) % content.length);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [textIndex, content.length]);
  return (
    <AnimatePresence>
      <motion.div
        key={textIndex}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 2, delay: 0.5 },
        }}
        exit={{ opacity: 0, transition: { delay: 1 }, scale: 0.1 }}
        transition={{ duration: 2, ease: ["easeInOut"] }}
      >
        {content[textIndex]}
      </motion.div>
    </AnimatePresence>
  );
};

export default TextAlternateComponent;
