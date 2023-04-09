import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/router";

//components
import LayoutText from "../components/LayoutText";
import { useEffect, useRef } from "react";
import React, { Fragment } from "react";
import { dataSkills } from "@/utils/skillsData";

import { useState } from "react";

import { articleSkills } from "@/models/typesIndex";

const ArticleSkillsComponent = ({ title, image, text }: articleSkills) => {
  const refText = useRef<HTMLInputElement>(null);
  const isInViewText = useInView(refText, { once: true });

  const refImage = useRef<HTMLInputElement>(null);
  const isInViewImage = useInView(refImage, { once: true });

  const [offsetY, setoffsetY] = useState<number>(250);
  const [offsetX, setoffsetX] = useState<number>(205);

  let indiceRotationX = (offsetY - 250) / -12.5;
  let indiceRotationY = (offsetX - 210) / 10.5;
  return (
    <article className="flex justify-evenly  min-h-40v mb-52 ">
      <main
        ref={refText}
        className=" flex flex-col justify-center -mt-4  w-6/12"
        style={{
          transform: isInViewText ? "none" : "translateX(-200px)",
          opacity: isInViewText ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h3 className="text-3xl mb-4 ml-4">{title}:</h3>
        {text?.map((text, index) => {
          return (
            <React.Fragment key={index}>
              <h4 className=" text-2xl leading-10 m-2">{text}</h4>
            </React.Fragment>
          );
        })}
      </main>
      <div
        ref={refImage}
        style={{
          transform: isInViewImage ? "none" : "translateX(200px)",
          opacity: isInViewImage ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div
          ref={refImage}
          className=" relative "
          style={{
            perspective: "1000px",
            perspectiveOrigin: "50% 50%",
            transform: "rotate3d(0, 0.8, 0, 34deg)",
            width: "500px",
            height: "500px",
          }}
          onMouseMove={(event) => {
            setoffsetY(event.nativeEvent.offsetY);
            setoffsetX(event.nativeEvent.offsetX);
          }}
          onMouseLeave={() => {
            setoffsetY(250);
            setoffsetX(205);
          }}
        >
          {image ? (
            <img
              src={image}
              alt="my_image"
              style={{
                borderRadius: "10px",
                transform: `rotateX(${indiceRotationX}deg) rotateY(${indiceRotationY}deg)`,
                transition: "all 0.5s ease",
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
};

const ContainerLinkAnimated = ({
  title,
  linkImage,
}: {
  title: string;
  linkImage: string;
}) => {
  const reftest = useRef<HTMLInputElement>(null);
  const [animationOn, setAnimationOn] = useState<boolean>(false);

  const refText = useRef<HTMLInputElement>(null);
  const isInViewText = useInView(refText, { once: true });
  const refBorder = useRef<HTMLInputElement>(null);
  const isInViewBorder = useInView(refBorder, { once: true });

  return (
    <div className="h-20v w-screen overflow-hidden relative -ml-48 cursor-pointer">
      <img
        src={linkImage}
        alt="desk"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      />
      <div
        ref={reftest}
        className="h-20v w-full bg-orange-500 absolute top-0 left-0 z-10 transition-transform duration-700 "
      ></div>
      <div
        ref={refText}
        onMouseEnter={() => {
          // setAnimationOn(true);
          reftest.current.style.transform = "translateY(-200px)";
        }}
        onMouseLeave={() => {
          // setAnimationOn(false);
          reftest.current.style.transform = "translateY(0px)";
        }}
        style={{
          transform: isInViewText ? "none" : "translateY(50px)",
          opacity: isInViewText ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex  items-center h-20v w-full absolute top-0 left-0 z-10 ml-20 text-4xl tracking-widest"
      >
        {title}
      </div>
      <div
        ref={refBorder}
        style={{
          width: isInViewBorder ? "100%" : "0%",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="absolute h-0.5 w-full bottom-0 left-0 bg-black z-50"
      ></div>
    </div>
  );
};

export default function Home() {
  const router = useRouter();

  return (
    <motion.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="text-gray-900 fixed top-0 left-0 w-full h-screen bg-orange-400 overflow-y-auto"
    >
      <Head>
        <title>PortFolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" relative min-h-screen w-screen flex flex-col justify-center bg-orange-400 lg:px-48 px-16  ">
        <div className="w-3/5 h-40v mt-8 text-4xl font-playfair">
          <LayoutText delay={1} lineHeight={5} timeAnimation={0.08}>
            Hello, I'm Matthieu, a front-end developer specialized, with modern
            technologies built around the Javascript framework.
          </LayoutText>
        </div>

        <div className="min-w-full h-40v mt-8 pl-80 text-3xl">
          <LayoutText delay={1} lineHeight={4} timeAnimation={0.05}>
            As a front-end developer with expertise in React, Next.js, and
            TypeScript, I'm passionate about crafting user-friendly interfaces
            that bring ideas to life.
          </LayoutText>
        </div>

        <div className="text-3xl mb-28">What i can bring to you:</div>

        {dataSkills?.map((skill: articleSkills, index) => {
          return (
            <ArticleSkillsComponent
              key={index}
              title={skill.title}
              image={skill.image}
              text={skill.text}
            />
          );
        })}
        <ContainerLinkAnimated
          title={"Projects / works"}
          linkImage={"/homeMin.png"}
        />
        <ContainerLinkAnimated title={"Contact"} linkImage={"/homeMin.png"} />
        <div className="min-w-full h-10v flex items-end justify-end">
          <div className="">
            ©2023 <span>Available for work from July</span>
          </div>
        </div>
      </main>
    </motion.main>
  );
}
