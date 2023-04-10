import React from "react";

const ArticleSkill = ({
  title,
  texts,
  isInViewSkillstLines,
  sideLine,
}: {
  title: string;
  texts: string[];
  isInViewSkillstLines: boolean;
  sideLine: "top" | "bottom" | "none";
}) => {
  const backEndDiv = sideLine === "bottom";
  console.log("backEndDiv", backEndDiv);
  return (
    <div className="relative h-full  pt-4 pb-4 flex flex-col justify-center">
      {sideLine === "top" ? (
        <div
          className="absolute  w-full h-px  top-0 left-0 bg-slate-400 z-50 transition-all duration-1000"
          style={{
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",

            width: isInViewSkillstLines ? "100%" : "0%",
          }}
        ></div>
      ) : (
        ""
      )}

      {sideLine === "bottom" ? (
        <div
          className="absolute  w-full h-px  bottom-0 left-0 bg-slate-400 z-50 transition-all duration-1000"
          style={{
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",

            width:
              isInViewSkillstLines && sideLine === "bottom" ? "100%" : "0%",
          }}
        ></div>
      ) : (
        ""
      )}

      <h3>{title}</h3>
      {texts?.map((text, index) => {
        return <h4>{text}</h4>;
      })}
    </div>
  );
};

export default ArticleSkill;
