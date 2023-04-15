import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-10v flex flex-col place-items-center mt-5 justify-evenly md:flex-row sm:-ml-16 xl:-ml-48 ">
      <div className="tracking-widest text-2xl p-2">©2023</div>
      <div className="tracking-widest text-2xl text-center p-2">
        Designed & Developed by{" "}
        <strong style={{ fontWeight: "normal" }}>Matthieu DEGNY</strong>
      </div>
    </div>
  );
};

export default Footer;