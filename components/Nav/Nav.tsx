import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import LayoutNav from "../LayoutNav/LayoutNav";

import styles from "../../styles/Nav.module.scss";

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
  return (
    <motion.nav>
      <Link
        onMouseEnter={() => setHome(true)}
        onMouseLeave={() => turnOffAnimation(setHome)}
        className="inline-block text-4xl font-playfair leading-78px h-20 mr-4 overflow-hidden  "
        href="/contact"
      >
        <LayoutNav Anim={Home}>
          <h1>HOME</h1>
        </LayoutNav>
      </Link>
      <Link
        onMouseEnter={() => setProjects(true)}
        onMouseLeave={() => turnOffAnimation(setProjects)}
        className="inline-block text-4xl font-playfair leading-78px h-20 mr-4 overflow-hidden  "
        href="/projects"
      >
        <LayoutNav Anim={Projects}>
          <h1>PROJECTS</h1>
        </LayoutNav>
      </Link>
      <Link
        onMouseEnter={() => setSkills(true)}
        onMouseLeave={() => turnOffAnimation(setSkills)}
        className="inline-block text-4xl font-playfair leading-78px h-20 mr-4 overflow-hidden  "
        href="/skills"
      >
        <LayoutNav Anim={Skills}>
          <h1>SKILLS</h1>
        </LayoutNav>
      </Link>
      <Link
        onMouseEnter={() => setContact(true)}
        onMouseLeave={() => turnOffAnimation(setContact)}
        className="inline-block text-4xl font-playfair leading-78px h-20 mr-4 overflow-hidden  "
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
