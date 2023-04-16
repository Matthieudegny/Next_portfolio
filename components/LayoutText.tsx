import React, { useState } from "react";
import { motion } from "framer-motion";

const Letter = ({ letter }: { letter: string }) => {
  const [colorLetter, setColorLetter] = useState<string>("text-gray-500");
  const randomColor = () => {
    const colors = [
      "text-blue-500",
      "text-red-500",
      "text-green-500",
      "text-yellow-500",
      "text-purple-500",
      "text-pink-500",
      "text-gray-500",
    ];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };
  const turnOffAnimation = () => {
    const timeOutOffAnimation = setTimeout(() => {
      setColorLetter("text-gray-500");
    }, 600);
    return () => clearTimeout(timeOutOffAnimation);
  };
  return (
    <span
      onMouseEnter={() => setColorLetter(randomColor())}
      onMouseLeave={turnOffAnimation}
      className={`inline-block cursor-pointer transition-transform  duration-100 ${colorLetter}`}
      style={{
        willChange: "transform",
      }}
    >
      {letter}
    </span>
  );
};

const Display_Letter_With_Animation = ({ word }: { word: string }) => {
  const letters = word.split("");
  console.log(letters);
  return (
    <>
      {letters.map((letter: string, index: number) => (
        <Letter key={index} letter={letter} />
      ))}
    </>
  );
};

const LayoutText = ({
  children,
  delay,
  timeAnimation,
  animationColor,
}: {
  children: string;
  delay: number;
  timeAnimation: number;
  animationColor: boolean;
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
            <div key={index} className="inline-block  overflow-hidden">
              <span
                className="inline-block transition-transform translate-y-full  animate-[slidein_0.5s_ease-out_forwards] duration-100"
                style={{
                  animationDelay: `${timeAnimation * index + delay}s`,
                  willChange: "transform",
                }}
              >
                {animationColor ? <Display_Letter_With_Animation word={word} /> : word}
                &nbsp;
              </span>
            </div>
          ))
        : ""}
    </div>
  );
};

export default LayoutText;
