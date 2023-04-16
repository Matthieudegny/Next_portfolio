import React, { useState } from "react";
import { itemsSkills } from "@/models/typesIndex";

const DiplayContainerh4 = ({ title, text, items }: { title: string; text: string; items?: itemsSkills }) => {
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
  console.log("items", items);
  return (
    <div
      onMouseEnter={() => {
        if (!animationWorking) setshowskillsitems(true);
        else {
          waitOffaniamtionandshow();
        }
      }}
      onMouseLeave={hideskillsitems}
      className="group/item cursor-pointer  rounded-xl overflow-hidden "
    >
      <h4>
        <span className="block">{title}</span>
        {text}
      </h4>
      <div className="leading-7 h-7 ">
        {items?.titles?.map((item, index) => {
          return (
            <span
              key={index}
              className={`inline-block text-sm sm:text-lg   ${items.colors[index]}  ml-6 overflow-hidden`}
              style={{
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
