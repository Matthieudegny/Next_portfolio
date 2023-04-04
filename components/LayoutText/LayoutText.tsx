import React from "react";
import styles from "./LayoutText.module.scss";
import { motion } from "framer-motion";
const LayoutText = ({
  children,
  delay,
  lineHeight,
  timeAnimation,
  type,
}: {
  children: any;
  delay: number;
  lineHeight: number;
  timeAnimation: number;
  type: any;
}) => {
  let words: string[] = [];
  console.log("children", children);
  if (children) {
    const text = children.props.children;
    words = text.split(" ");
    console.log("words", words);
  }

  return (
    <motion.h1>
      {words.length > 0
        ? words.map((word: string, index: number) => (
            <div
              key={index}
              className={styles.LayoutText_Container}
              style={{ lineHeight: `${lineHeight}rem` }}
            >
              <span
                className={styles.LayoutText}
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
