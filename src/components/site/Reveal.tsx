import { type ElementType, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

/** Scroll-triggered fade/slide reveal using framer-motion. */
export function Reveal({ children, as, delay = 0, className = "" }: RevealProps) {
  const Tag = (as ?? "div") as any;
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ 
        duration: 0.9, 
        delay: delay / 1000, // delay is passed in ms usually, framer-motion uses seconds
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
