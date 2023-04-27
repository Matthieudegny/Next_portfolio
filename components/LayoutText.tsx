import React, { useState } from "react";

const Letter = ({ letter }: { letter: string }) => {
  const [colorLetter, setColorLetter] = useState<string>("text-gray-500");

  const animatioColor = "text-sky-600";

  const turnOffAnimation = () => {
    const timeOutOffAnimation = setTimeout(() => {
      setColorLetter("text-sky-500");
    }, 200);
    const timeOutOffAnimation2 = setTimeout(() => {
      setColorLetter("text-sky-400");
    }, 400);
    const timeOutOffAnimation3 = setTimeout(() => {
      setColorLetter("text-sky-300");
    }, 600);
    const timeOutOffAnimation4 = setTimeout(() => {
      setColorLetter("text-sky-200");
    }, 800);
    const timeOutOffAnimation5 = setTimeout(() => {
      setColorLetter("text-gray-300");
    }, 1000);
    const timeOutOffAnimation6 = setTimeout(() => {
      setColorLetter("text-gray-500");
    }, 1200);
    return () => {
      clearTimeout(timeOutOffAnimation),
        clearTimeout(timeOutOffAnimation2),
        clearTimeout(timeOutOffAnimation3),
        clearTimeout(timeOutOffAnimation4),
        clearTimeout(timeOutOffAnimation5),
        clearTimeout(timeOutOffAnimation6);
    };
  };
  return (
    <span
      onMouseEnter={() => setColorLetter(animatioColor)}
      onMouseLeave={turnOffAnimation}
      className={`inline-block cursor-pointer transition-transform   duration-100 ${colorLetter}`}
      style={{
        willChange: "transform",
        transition: " 0.2s color 0s ease-out",
      }}
    >
      {letter}
    </span>
  );
};

const Display_Letter_With_Animation = ({ word }: { word: string }) => {
  const letters = word.split("");

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
            <div key={index} className="inline-block  overflow-hidden md:leading-65px">
              <span
                className="inline-block transition-transform translate-y-full animate-[slidein_0.5s_ease-out_forwards] duration-100"
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
