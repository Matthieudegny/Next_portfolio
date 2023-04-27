import React, { useState } from "react";
import { itemsSkills } from "@/models/typesIndex";

const DiplayContainerh4 = ({
  title,
  text,
  items,
  isInViewrefSection3,
}: {
  title: string;
  text: string;
  items?: itemsSkills;
  isInViewrefSection3: boolean;
}) => {
  const [showskillsitems, setshowskillsitems] = useState(false);
  const [animationWorking, setanimationWorking] = useState(false);

  const hideskillsitems = () => {
    setanimationWorking(true);
    const timeout = setTimeout(() => {
      setshowskillsitems(false);
      setanimationWorking(false);
    }, 700);
    return () => {
      clearTimeout(timeout);
    };
  };

  const waitOffaniamtionandshow = () => {
    const timeout = setTimeout(() => {
      setshowskillsitems(true);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <div
      onMouseEnter={() => {
        if (!animationWorking) setshowskillsitems(true);
        else {
          waitOffaniamtionandshow();
        }
      }}
      onMouseLeave={hideskillsitems}
      className="group/item cursor-pointer  overflow-hidden "
    >
      <h4>
        <span className="relative inline-block mb-2 text-3xl tracking-wider">
          {title}
          <span
            style={{
              width: showskillsitems ? "100%" : "0%",
              transition: `width 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s`,
            }}
            className={`absolute bottom-0 left-0 h-1px ${isInViewrefSection3 ? "bg-white" : "bg-black"}`}
          ></span>
        </span>
        <span className="block">{text}</span>
      </h4>
      <div className="leading-7 h-7 ">
        {items?.titles?.map((item, index) => {
          return (
            <span
              key={index}
              className={`inline-block text-sm sm:text-lg ml-6 overflow-hidden`}
              style={{
                color: items.colors[index],
                transition: `transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${items.delays[index]}`,
                transform: !showskillsitems ? "translateY(120%)" : "translateY(-20%)",
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DiplayContainerh4;
