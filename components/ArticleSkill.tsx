import React from "react";

const ArticleSkill = ({ title, texts }: { title: string; texts: string[] }) => {
  return (
    <div className="pt-4 pb-4">
      <h3>{title}</h3>
      {texts?.map((text, index) => {
        return <h4>{text}</h4>;
      })}
    </div>
  );
};

export default ArticleSkill;
