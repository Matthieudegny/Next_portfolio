import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";

const ContainerLinkAnimated = ({
  title,
  linkImage,
  index,
  mobileVersion,
}: {
  title: string;
  linkImage: string;
  index: number;
  mobileVersion: boolean;
}) => {
  const reftest = useRef<HTMLInputElement>(null);
  const [animationOn, setAnimationOn] = useState<boolean>(false);

  const refText = useRef<HTMLInputElement>(null);
  const isInViewText = useInView(refText, { once: true });
  const refBorder = useRef<HTMLInputElement>(null);
  const isInViewBorder = useInView(refBorder, { once: true });

  return (
    <div
      ref={refBorder}
      className="h-20v w-screen overflow-hidden relative sm:-ml-5rem xl:-ml-48 cursor-pointer"
    >
      {/* animation line top */}
      {index === 1 ? (
        <div
          className="absolute h-0.5 w-full top-0 left-0 bg-white z-50 transition-all duration-1000"
          style={{
            willChange: "width",
            width: isInViewBorder ? "100%" : "0%",
            transition: `width ${mobileVersion ? "0.5" : "1.5"}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
          }}
        ></div>
      ) : (
        ""
      )}
      {/* animation line bottom */}
      <div
        className="absolute h-0.5 w-full bottom-0 left-0 bg-white z-50 transition-all duration-1000"
        style={{
          willChange: "width",
          width: isInViewBorder ? "100%" : "0%",
          transition: `width  ${mobileVersion ? "0.5" : "1.5"}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
        }}
      ></div>

      <img
        src={linkImage}
        alt="desk"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
      <div
        ref={reftest}
        className="h-20v w-full bg-black absolute top-0 left-0 z-10 transition-transform duration-700 "
      ></div>
      <div
        ref={refText}
        onMouseEnter={() => {
          setAnimationOn(true);
          if (reftest.current && index === 1) reftest.current.style.transform = "translateY(-200px)";
          if (reftest.current && index === 2) reftest.current.style.transform = "translateY(200px)";
        }}
        onMouseLeave={() => {
          setAnimationOn(false);
          if (reftest.current) reftest.current.style.transform = "translateY(0px)";
        }}
        style={{
          willChange: "transform, opacity, color",
          transform: isInViewText ? "none" : "translateY(50px)",
          opacity: isInViewText ? 1 : 0,
          color: !animationOn ? "white" : "black",
          transition:
            "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s,color 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
        className={` flex  items-center h-20v w-full absolute top-0 left-0 z-10 ml-8 sm:ml-16 lg:ml-48 font-NotoSansGeorgian  text-2xl lg:text-5xl tracking-widest`}
      >
        {title}
      </div>
    </div>
  );
};

export default ContainerLinkAnimated;
