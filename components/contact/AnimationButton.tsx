import React from "react";

const AnimationButton = ({ children, Anim }: { children: any; Anim: boolean }) => {
  const string = children;

  const getLettersAndSpaces = (str: string): string[] => {
    return string.split("");
  };

  const array = getLettersAndSpaces(string);

  return (
    <>
      <div>
        {array.map((item: string, index: number) => {
          return (
            <span
              key={index}
              className={`text-white inline-block transition-transform duration-500  font-Montserrat_thin font-light text-3xl ${
                Anim ? "-translate-y-full" : ""
              }`}
              style={{
                transition: `transform 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                  index * 0.03
                }s,color 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
              }}
            >
              {item === " " ? <>&nbsp;</> : item}
            </span>
          );
        })}
      </div>
      <div>
        {array.map((item: string, index: number) => (
          <span
            key={index}
            className={`text-white inline-block tracking-wider transition-transform duration-500 font-NotoSansGeorgian text-3xl    ${
              Anim ? "-translate-y-full " : ""
            }`}
            style={{
              transition: `transform 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                index * 0.03
              }s,color 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
            }}
          >
            {item === " " ? <>&nbsp;</> : item}
          </span>
        ))}
      </div>
    </>
  );
};

export default AnimationButton;
