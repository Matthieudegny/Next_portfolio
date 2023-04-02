import React from "react";
import styles from "./LayoutText.module.scss";

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
  console.log("children", children);
  if (children) {
    const text = children.props.children;
    words = text.split(" ");
    console.log("words", words);
  }

  return (
    <children.type>
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
    </children.type>
  );
};

export default LayoutText;
