"use client";
import React, { useState, forwardRef, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

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
      className={`relative h-50v w-full flex justify-center ${props.marginBottom ? "mb-10" : "mb-0"} p-10 `}
    >
      <div className="w-full flex justify-center items-center z-50">
        <Link
          href={props.link}
          className="w-full font-Playfair  cursor-pointer flex justify-center items-center"
        >
          <h2
            ref={ref}
            className="text-7xl "
            style={{
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

      <div className="absolute -top-10 left-50% h-120% w-2/6 ">
        <Link href={props.link} className="cursor-pointer h-4/6">
          <img
            src={props.image}
            alt="my_image"
            className="hover:scale-105 absolute top-0 left-0 h-full w-full rounded-xl z-30"
            style={{
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