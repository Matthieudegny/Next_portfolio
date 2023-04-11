import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import LayoutNav from "./LayoutNav";

const Nav = ({ hideNav }: { hideNav: boolean }) => {
  console.log("hideNav: ", hideNav);
  const [Home, setHome] = useState(false);
  const [Projects, setProjects] = useState(false);
  const [Contact, setContact] = useState(false);
  const [menuNavMobile, setmenuNavMobile] = useState(false);

  const turnOffAnimation = (setstate: Function) => {
    const timeOutOffAnimation = setTimeout(() => {
      setstate(false);
    }, 600);
  };

  const [width, setWidth] = useState<string>("");
  const updateWidth = () => {
    if (window.innerWidth < 1280) {
      setWidth("mobileWidth");
    } else {
      setWidth("desktopWidth");
    }
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const styleNav =
    "inline-block translate-x-full opacity-0 leading-9 h-9 overflow-hidden mb-3 ";

  return (
    <>
      <motion.nav className="fixed flex flex-col z-50 right-7 top-7">
        {width === "desktopWidth" && !hideNav ? (
          <>
            <Link
              onMouseEnter={() => setHome(true)}
              onMouseLeave={() => turnOffAnimation(setHome)}
              className={
                styleNav + "animate-[0.7s_slideinNav_0.1s_ease-out_forwards]"
              }
              href="/"
            >
              <LayoutNav Anim={Home}>
                <h1>HOME</h1>
              </LayoutNav>
            </Link>

            <Link
              onMouseEnter={() => setProjects(true)}
              onMouseLeave={() => turnOffAnimation(setProjects)}
              className={
                styleNav + " animate-[0.7s_slideinNav_0.2s_ease-out_forwards]"
              }
              href="/projects"
            >
              <LayoutNav Anim={Projects}>
                <h1>PROJECTS</h1>
              </LayoutNav>
            </Link>

            <Link
              onMouseEnter={() => setContact(true)}
              onMouseLeave={() => turnOffAnimation(setContact)}
              className={
                styleNav + " animate-[0.7s_slideinNav_0.3s_ease-out_forwards]"
              }
              href="/contact"
            >
              <LayoutNav Anim={Contact}>
                <h1>CONTACT</h1>
              </LayoutNav>
            </Link>
          </>
        ) : !hideNav ? (
          <div>
            <Link
              href=""
              className="font-NotoSansGeorgian"
              onClick={() => setmenuNavMobile((prev) => !prev)}
            >
              <div className="flex flex-col opacity-1 leading-9 h-9 mb-3 overflow-hidden ">
                <div
                  className={`inline-block leading-9 h-9 transition-transform duration-500   text-3xl ${
                    menuNavMobile ? "-translate-y-full" : ""
                  }`}
                  style={{
                    color: menuNavMobile ? "white" : "black",
                  }}
                >
                  Menu
                </div>
                <div
                  className={`inline-block text-white leading-9 h-9 transition-transform duration-500  text-3xl   ${
                    menuNavMobile ? "-translate-y-full " : ""
                  }`}
                >
                  Close
                </div>
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}
      </motion.nav>

      {/* {menuNavMobile ? ( */}
      <div
        className="fixed h-screen w-0 z-40 right-0 top-0 bg-black "
        style={{
          transition: "width 1s ease-in-out",
          width: menuNavMobile ? "100%" : "0%",
        }}
      >
        <button className="text-white">X</button>
      </div>
      {/* // ) : (
      //   ""
      // )} */}
    </>
  );
};

export default Nav;
