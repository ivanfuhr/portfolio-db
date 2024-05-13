"use client";
import { Variants, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ScoreItemProps = {
  active: boolean;
};

const scoreVariants: Variants = {
  visible: {
    backgroundColor: "#EAB53D",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
  hidden: {
    backgroundColor: "#FFF",
  },
};

export function ScoreItem({ active }: ScoreItemProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="h-5 w-5 rounded-full border-2 border-yellow-default"
      variants={scoreVariants}
      animate={inView && active ? "visible" : "hidden"}
    />
  );
}
