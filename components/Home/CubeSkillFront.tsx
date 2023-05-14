import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CubeSkillFront = ({
  mobileVersion,
  isInViewrefSection3,
  transformCube,
  transformFace,
  secondColor,
  background,
  title,
  text,
  listItems,
}: {
  mobileVersion: boolean;
  isInViewrefSection3: boolean;
  transformCube: string;
  transformFace: string;
  secondColor: string;
  background: string;
  title: string;
  text: string;
  listItems: string[];
}) => {
  const [animationOn, setAnimationOn] = useState(false);

  const turnAnimationOff = () => {
    const timeOut = setTimeout(() => {
      setAnimationOn(false);
    }, 400);
    return () => clearTimeout(timeOut);
  };

  return (
    // cube
    !mobileVersion ? (
      <div
        onMouseEnter={() => {
          setAnimationOn(true);
        }}
        onMouseLeave={() => {
          turnAnimationOff();
        }}
        style={{
          willChange: "transform transformStyle",
          transformStyle: "preserve-3d",
          transform: animationOn ? transformCube : "perspective(1000px)",
          transition: "transform 1s",
        }}
        className="relative w-600px h-300px m-14 cursor-pointer "
      >
        {/* font face */}
        <div
          style={{
            willChange: "transform background color",
            transform: "translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
            color: !animationOn ? secondColor : background,
            transition:
              "background-color 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0s, color 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className={`absolute w-600px h-300px  ${isInViewrefSection3 ? "bg-black" : "bg-primary-color"}`}
        >
          <div className="h-full flex text-center justify-center items-center text-6xl">{title}</div>
        </div>
        <div
          style={{
            willChange: "transform background",
            transform: transformFace,
            background: animationOn ? secondColor : background,
            transition: `${animationOn ? "2" : "1"}s background 0s`,
          }}
          className="absolute w-600px h-300px rounded-md animate-[gradient_7s_ease_infinite]"
        >
          <div className="h-full p-3 text-white flex flex-col text-center justify-center items-center text-2xl">
            <div className="leading-10">{text}</div>
            <div className="flex mt-5">
              {listItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      color: secondColor,
                      boxShadow: "0px 0px 6px white",
                    }}
                    className="p-1 m-2 bg-primary-color hover:bg-white duration-200 hover:scale-110 rounded-lg text-xl font-semibold "
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div
        onMouseEnter={() => {
          setAnimationOn(true);
        }}
        onMouseLeave={() => {
          turnAnimationOff();
        }}
        className="relative w-screen overflow-hidden h-96 cursor-pointer "
      >
        {/* <div
          style={{
            willChange: "transform background-color color",
            transform: animationOn ? "translateX(-100%)" : "translateX(0%)",
            color: !animationOn ? secondColor : background,
            transition: `transform 1s,background-color 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0s, color  0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
          }}
          className={`absolute w-full h-full`}
        >
          <div className="h-full flex flex-col text-center justify-center items-center text-3xl">
            {title}
            <BsFillArrowRightCircleFill className="mt-6" />
          </div>
        </div> */}
        {/* <div
          style={{
            willChange: "transform opacity background",
            transform: animationOn ? "translateX(0%)" : "translateX(100%)",
            opacity: animationOn ? 1 : 0,
            background: secondColor,
            transition: `transform 1s,opacity 0.5s,0s background 0s`,
          }}
          className="absolute w-full h-full animate-[gradient_7s_ease_infinite]"
        >
          <div className="h-full p-3 text-white flex flex-col text-center justify-center items-center text-xl">
            <div className="leading-10">{text}</div>
            <div className="flex flex-wrap justify-center mt-5">
              {listItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      color: secondColor,
                      boxShadow: "0px 0px 6px white",
                    }}
                    className="p-1 m-2 bg-primary-color hover:bg-white duration-200 hover:scale-110 rounded-lg text-xl font-semibold "
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
      </div>
    )
  );
};

export default CubeSkillFront;
