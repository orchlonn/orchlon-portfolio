"use client";

import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* `as const` plus the explicit Transition annotation are load-bearing: since
   framer-motion v11 the `ease` field is a narrow union, and a bare object
   literal widens to `string` and fails under `strict`. */
const EASE = [0.16, 1, 0.3, 1] as const;

const transition: Transition = { duration: 0.5, ease: EASE };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition },
};

type RevealTag = "div" | "li" | "section";

interface RevealProps {
  children: ReactNode;
  as?: RevealTag;
  delay?: number;
  className?: string;
}

/* Deliberately NOT wrapped in <LazyMotion features={domAnimation}>: that bundle
   is animations + gestures only, and framer-motion 13 ships no public bundle
   containing the `inView` feature. Under LazyMotion `whileInView` never fires
   and every element stays stranded at opacity 0. */
export function Reveal({ children, as = "div", delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  /* Bail out to plain markup rather than a zeroed transition — content must
     never be left stranded at opacity 0 when motion is reduced. */
  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ ...transition, delay }}
    >
      {children}
    </Tag>
  );
}
