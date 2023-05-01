"use client";
import React, { forwardRef, useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";

//type
import { ItemProjectProps } from "@/models/typesIndex";

const ItemProject = forwardRef<HTMLDivElement, ItemProjectProps>((props, ref) => {
  const projectTitle = useRef<HTMLInputElement>(null);
  const isInViewprojectTitlte = useInView(projectTitle, {
    margin: "750px 100px -50px 0px",
    amount: 1,
    once: true,
  });

  return (
    <div
      className={`relative h-45v sm:h-50v w-full flex justify-center ${
        props.marginBottom ? "mb-14 md:mb-10" : "mb-0"
      } p-10 `}
    >
      <div className="w-full flex justify-center items-center ">
        <Link
          href={{
            pathname: `projects/${props.id}`,
          }}
          as={`projects/${props.id}`}
          className="w-full font-Playfair  cursor-pointer flex justify-center items-center"
        >
          <h2
            ref={ref}
            className="text-3xl sm:text-5xl xl:text-7xl cursor-pointer z-50 "
            style={{
              willChange: "transform, opacity",
              opacity: isInViewprojectTitlte ? "1" : "0",
              transform: `scaleX(${isInViewprojectTitlte ? 1 : 0})`,
              transition:
                "transform 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0s,opacity 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
            }}
          >
            {props.title}
          </h2>
        </Link>
        <span ref={projectTitle}></span>
      </div>

      <div className="absolute -top-0  sm:-top-10 h-full  sm:h-120% w-4/6 lg:w-2/6 ">
        <Link href={props.link} className="cursor-pointer h-4/6">
          <img
            src={props.image}
            alt="my_image"
            className="hover:scale-105 absolute top-0 left-0 h-full w-full rounded-md z-30 cursor-pointer"
            style={{
              willChange: "transform opacity",
              opacity: props.isInView ? "0.6" : "0",
              transform: `scaleX(${props.isInView ? 1 : 0})`,
              transition: "transform 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0s,opacity 0.8s ease-in-out 0.1s",
            }}
          />
        </Link>
      </div>
    </div>
  );
});

export default ItemProject;
