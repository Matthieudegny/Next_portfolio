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

  const styleNav =
    "inline-block text-3xl font-playfair leading-9 h-9 mr-4 overflow-hidden";

  return (
    <motion.nav className="absolute z-50 right-5 top-16 ">
      <Link
        onMouseEnter={() => setHome(true)}
        onMouseLeave={() => turnOffAnimation(setHome)}
        className={styleNav}
        href="/"
      >
        <LayoutNav Anim={Home}>
          <h1>HOME</h1>
        </LayoutNav>
      </Link>
      <Link
        onMouseEnter={() => setProjects(true)}
        onMouseLeave={() => turnOffAnimation(setProjects)}
        className={styleNav}
        href="/projects"
      >
        <LayoutNav Anim={Projects}>
          <h1>PROJECTS</h1>
        </LayoutNav>
      </Link>

      <Link
        onMouseEnter={() => setContact(true)}
        onMouseLeave={() => turnOffAnimation(setContact)}
        className={styleNav}
        href="/contact"
      >
        <LayoutNav Anim={Contact}>
          <h1>CONTACT</h1>
        </LayoutNav>
      </Link>
    </motion.nav>
  );
};

export default Nav;
