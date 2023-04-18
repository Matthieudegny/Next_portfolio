"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll } from "framer-motion";

//components
import LayoutText from "../components/LayoutText";

//data
import { projectsItems } from "../data/itemsProjects";

const ItemProject = ({
  image,
  link,
  index,
  title,
  marginBottom,
}: {
  image: string;
  link: string;
  index: number;
  title: string;
  marginBottom: boolean;
}) => {
  const [animationON, setanimationON] = useState(false);
  return (
    <div className={`h-70v w-full flex justify-center ${marginBottom ? "mb-64" : "mb-0"} p-10 `}>
      <div className="w-2/6 h-full flex flex-col justify-center  ">
        <Link href={link} className="w-full cursor-pointer">
          <h4>Project n° {index} :</h4>
          <h2 className="text-5xl ">{title}</h2>
        </Link>
      </div>

      <div
        onMouseEnter={() => {
          setanimationON(true);
        }}
        onMouseLeave={() => {
          setanimationON(false);
        }}
        className="h-full w-2/6 relative "
      >
        <Link href={link} className="cursor-pointer h-4/6">
          <img
            src={image}
            alt="my_image"
            className="hover:scale-105 absolute top-0 left-0 h-full w-full rounded-xl z-30"
            style={{
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
            }}
          />
        </Link>
        <div
          style={{
            left: "-10%",
            top: animationON ? "60%" : "-10%",
            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
          className="absolute h-50% w-50% bottom-0 rounded-xl border-4 border-gray-700 z-10 "
        ></div>
        <div
          style={{
            right: "-10%",
            bottom: animationON ? "60%" : "-10%",
            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
          className="absolute h-50% w-50% bottom-0 rounded-xl border-4 border-gray-700 z-10 "
        ></div>
      </div>
    </div>
  );
};

const projects = () => {
  const reftest = useRef<HTMLInputElement>(null);

  return (
    <motion.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 w-full h-screen  overflow-y-auto"
    >
      <main className="relative bg-orange-100 text-gray-900 min-h-screen w-screen  font-Montserrat_regular pb-36">
        <h1 className="font-NotoSansGeorgian h-80v tracking-widest text-2xl w-full p-2 pr-8 sm:pr-0 md:text-3xl  xl:w-4/5  sm:px-5rem xl:px-48 xl:pt-48 ">
          <LayoutText delay={1} timeAnimation={0.04} animationColor={false}>
            As a web developer, I thrive on combining purposeful design with powerful user interfaces,
            continually pushing the boundaries of what's possible through my deep understanding of JavaScript
            concepts and my ability to work on full-stack projects
          </LayoutText>
        </h1>

        <section className="w-screen h-full">
          {projectsItems?.map((item, index) => (
            <ItemProject
              key={item.title}
              image={item.image}
              link={item.link}
              title={item.title}
              index={index + 1}
              marginBottom={item.marginBottom}
            />
          ))}
        </section>
      </main>
    </motion.div>
  );
};

export default projects;
