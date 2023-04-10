import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import LayoutNav from "./LayoutNav";

const Nav = () => {
  const [Home, setHome] = useState(false);
  const [Projects, setProjects] = useState(false);
  const [Skills, setSkills] = useState(false);
  const [Contact, setContact] = useState(false);

  const turnOffAnimation = (setstate: Function) => {
    const timeOutOffAnimation = setTimeout(() => {
      setstate(false);
    }, 600);
  };

  //a function to know the size width of the screen
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
    "inline-block translate-x-full opacity-0 leading-9 h-9 mr-4 overflow-hidden mb-7 ";

  return (
    <motion.nav className="fixed flex flex-col z-50 right-10 top-14">
      {width === "desktopWidth" ? (
        <>
          <Link
            onMouseEnter={() => setHome(true)}
            onMouseLeave={() => turnOffAnimation(setHome)}
            className={
              styleNav + "animate-[0.5s_slideinNav_0.7s_ease-out_forwards]"
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
              styleNav + " animate-[0.5s_slideinNav_0.9s_ease-out_forwards]"
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
              styleNav + " animate-[0.5s_slideinNav_1.1s_ease-out_forwards]"
            }
            href="/contact"
          >
            <LayoutNav Anim={Contact}>
              <h1>CONTACT</h1>
            </LayoutNav>
          </Link>
        </>
      ) : (
        ""
      )}
    </motion.nav>
  );
};

export default Nav;
