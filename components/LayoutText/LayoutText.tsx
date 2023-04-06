import React from "react";
import styles from "./LayoutText.module.scss";
import { motion } from "framer-motion";
const LayoutText = ({
  children,
  delay,
  lineHeight,
  timeAnimation,
}: {
  children: any;
  delay: number;
  lineHeight: number;
  timeAnimation: number;
}) => {
  let words: string[] = [];

  if (children) {
    const text = children;
    words = text.split(" ");
  }

  return (
    <motion.h1>
      {words.length > 0
        ? words.map((word: string, index: number) => (
            <div
              key={index}
              className="inline-block overflow-hidden"
              style={{ lineHeight: `${lineHeight}rem` }}
            >
              <span
                className="inline-block transition-transform translate-y-3/4 animate-[slidein_1s_ease-out_forwards] duration-100"
                style={{
                  animationDelay: `${timeAnimation * index + delay}s`,
                  willChange: "transform",
                }}
              >
                {word}
                &nbsp;
              </span>
            </div>
          ))
        : ""}
    </motion.h1>
  );
};

export default LayoutText;
