import React, { useState } from "react";

const Letter = ({ letter }: { letter: any }) => {
  const [animationOn, setanimationOn] = useState(false);

  const turnOffAnimation = () => {
    const timeout = setTimeout(() => {
      setanimationOn(false);
    }, 1000);
    return () => clearTimeout(timeout);
  };
  return (
    <span
      onMouseEnter={() => setanimationOn(true)}
      onMouseLeave={turnOffAnimation}
      className="inline-block cursor-pointer"
      style={{
        willChange: "transform perspective",
        perspective: "1000px",
        transform: animationOn ? "rotate(1080deg)" : "rotateY(0deg)",
        transition: "transform 1s ease-in-out",
      }}
    >
      {letter}
    </span>
  );
};

const LayoutH3 = ({ children }: { children: string }) => {
  function splitWordIntoLetters(word: string) {
    const wordsplited = word.split("");
    const spans = wordsplited.map((letter, index) => {
      return <Letter key={index} letter={letter} />;
    });
    return spans;
  }

  let letters = splitWordIntoLetters(children);

  return <h3>{letters}</h3>;
};

export default LayoutH3;
