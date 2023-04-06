import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import styles from "../styles/Skills.module.scss";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("isInView", isInView);
  }, [isInView]);

  return (
    <motion.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%",
        backgroundColor: "#f0eeb9",
      }}
    >
      <div className={styles.SkillsRelativePage}>
        <Link href="/">Home</Link>
        <h2>
          I received full-stack training, but I've honed my skills and gained
          extensive experience as a front-end developer, with a focus on
          creating engaging and user-friendly interfaces.
        </h2>

        <div ref={ref} className={styles.containerSkill}>
          <section>
            <h3>Front end:</h3>
            <p>
              {` UI/UX and responsive design: Experienced in creating visually
              appealing and user-friendly interfaces using Figma and CSS`}
            </p>
            <p>
              {` Performance optimization: Skilled in optimizing application
              performance with React and dynamic DOM, including reusable
              components and dynamic updates.`}
            </p>
            <p>
              {`  SEO: Skilled in optimizing website content for search engines
              using Next.js and server-side rendering to ensure optimal
              performance and search engine rankings.`}
            </p>
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
          </section>
          <section></section>
        </div>

        <h2>Backend</h2>
        {`  <p>
          API creation: Experienced in building robust and scalable APIs using
          Node.js and Express.js, with a deep understanding of RESTful API
          design principles and best practices.
        </p>
        <p>
          Database basics: Familiar with designing and implementing database
          schemas and queries using SQL. Experienced in working with PostgreSQL
          with SupaBase (relational database) and MongoDB(document database),
          ensuring efficient and optimized data storage and retrieval.
        </p>`}

        <h2>Clean code</h2>
        {`   <p>
          Clean coding: Skilled in writing maintainable and scalable code using
          the MVC design pattern and TypeScript, ensuring code reliability and
          type safety.
        </p>`}

        <h2>Version Control and Deployment</h2>
        <p>
          {`   Experienced in using Git, GitHub, and Azur for version control,
          ensuring efficient collaboration with team members and maintaining
          codebase integrity. Proficient in managing repositories, branches, and
          pull requests, and skilled in deploying applications to various
          platforms such as Netlify, vercel with SAAS solutions.`}
        </p>

        <h2>Current Focus</h2>
        {` <p>
          working on improving my skills in Continuous Integration and
          Deployment (CI/CD) by learning Docker and how to use it to create and
          manage containers for various applications.
        </p>`}
      </div>
    </motion.div>
  );
};

export default Skills;
