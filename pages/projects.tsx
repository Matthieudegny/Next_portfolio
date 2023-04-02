"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import styles from "../styles/Projects.module.scss";

const projects = () => {
  //exemple pour inview
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("isInView", isInView);
  }, [isInView]);
  return (
    <motion.div
      animate={{ x: "0%" }}
      //at the unmount of the compo => exit
      exit={{ opacity: 1 }}
      initial={{ x: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={styles.testProject}
    >
      <h1>Projects</h1>
      <Link href="/projects/1">Prjet num 1</Link>
      <Link href="/">Home</Link>
      <div className={styles.testcontainer}>
        <h1>Skills</h1>
        <Link href="/">Home</Link>
        <div className={styles.bouchon}></div>

        <div ref={ref} className={styles.testcontainerskills}>
          Ceci est un test
          <div
            className={`${styles.testcontainerskillsRightLine} ${
              ref ? styles.rightAnimation : ""
            }`}
          ></div>
          <div
            className={`${styles.testcontainerskillsBottomLine} ${
              ref ? styles.bottomanimation : ""
            }`}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default projects;
