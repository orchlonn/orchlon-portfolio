"use client";

import { motion, type Transition, type Variants } from "framer-motion";
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
  const Tag = motion[as];

  /* Server and client must render the same element. This used to bail out to
     plain markup when motion was reduced, but only the client knows that: the
     server still sent the hidden state as inline opacity:0, React does not
     patch attributes on a hydration mismatch, and every revealed section
     stayed invisible with Reduce Motion on. globals.css now pins
     [data-reveal] visible under reduced motion instead. */
  return (
    <Tag
      data-reveal=""
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
