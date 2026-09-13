import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionSpan = motion.span;
export const MotionP = motion.p;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;

// A generic fade-in container that triggers when scrolled into view
export const FadeIn = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; direction?: "up" | "down" | "left" | "right" | "none" }) => {
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Container for staggering children animations
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = "",
  ...props
}: HTMLMotionProps<"div"> & { staggerDelay?: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// A child element for StaggerContainer
export const StaggerItem = ({
  children,
  className = "",
  direction = "up",
  ...props
}: HTMLMotionProps<"div"> & { direction?: "up" | "down" | "left" | "right" | "none" }) => {
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directions[direction] },
        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
