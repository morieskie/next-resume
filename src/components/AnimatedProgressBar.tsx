"use client";
import { motion } from "motion/react";
const AnimatedProgressBar = ({
  level,
}: {
  level: number
}) => {
  if (level > 100 || level < 0)
    throw new Error("invalid values, level should be  0 <= level <= 100");
  return (
    <motion.div
      initial={{ width: `0%` }}
      animate={{ width: `${level}%` }}
      className="skill-percentage"
    ></motion.div>
  );
};

export default AnimatedProgressBar;
