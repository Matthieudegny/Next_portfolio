import React, { useState, useEffect } from "react";

const CubeSkillFrontMobile = ({
  isInViewrefSection3,
  transformCube,
  transformFace,
  secondColor,
  background,
  title,
  text,
  listItems,
}: {
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
  const [mobileVersion, setmobilVersion] = useState(false);

  const updateWidth = () => {
    if (window.innerWidth < 640) {
      setmobilVersion(true);
    } else {
      setmobilVersion(false);
    }
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
        className="relative w-full h-full cursor-pointer "
      >
        {/* front faace */}
        <div
          style={{
            left: animationOn ? "-100%" : 0,
            color: !animationOn ? secondColor : background,
            transition:
              "background-color 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0s, color 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className={`absolute w-full h-full bg-primary-color`}
        >
          <div className="h-full flex text-center justify-center items-center text-6xl">{title}</div>
        </div>
        {/* other */}
        <div
          style={{
            left: animationOn ? "100%" : 0,
            background: animationOn ? secondColor : background,
            transition: `${animationOn ? "2.5" : "1"}s background 0s`,
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
      ""
    )
  );
};

export default CubeSkillFrontMobile;
