import React from "react";
import { motion } from "framer-motion";
const LayoutText = ({
  children,
  delay,
  timeAnimation,
}: {
  children: string;
  delay: number;
  timeAnimation: number;
}) => {
  let words: string[] = [];

  if (children) {
    const text = children;
    words = text.split(" ");
  }

  return (
    <div>
      {words.length > 0
        ? words.map((word: string, index: number) => (
            <div key={index} className="inline-block overflow-hidden">
              <span
                className="inline-block transition-transform translate-y-full  animate-[slidein_0.5s_ease-out_forwards] duration-100"
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
    </div>
  );
};

export default LayoutText;
