import React from "react";

const Footer = () => {
  return (
    <div className=" h-20v flex flex-col place-items-center mt-5 justify-evenly lg:flex-row  ">
      <div className="tracking-widest text-2xl ">©2023</div>
      <div className="tracking-widest text-2xl text-center ">
        Designed & Developed by <strong style={{ fontWeight: "normal" }}>Matthieu DEGNY</strong>
      </div>
    </div>
  );
};

export default Footer;
