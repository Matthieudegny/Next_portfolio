"use client";
import React, { useState,forwardRef } from "react";
import Link from "next/link";

//type
import { ItemProjectProps } from "@/models/typesIndex";

const ItemProject = forwardRef<HTMLDivElement, ItemProjectProps>((props, ref) => {
    return (
      <div 
        ref={ref}
        className={`relative h-60v w-full flex justify-center ${props.marginBottom ? "mb-10" : "mb-0"} p-10 `}
      >
        <div className="w-full flex justify-center items-center z-50">
          <Link href={props.link} className="w-full font-Ultra cursor-pointer flex justify-center items-center">
            <h2 className="text-5xl ">{props.title}</h2>
          </Link>
        </div>
  
        <div
          className="absolute top-0 left-50% h-full w-2/6 "
        >
          <Link href={props.link} className="cursor-pointer h-4/6">
            <img
              src={props.image}
              alt="my_image"
              className="hover:scale-105 absolute top-0 left-0 h-full w-full rounded-xl z-30"
              style={{
                opacity: props.isInView ? "0.6" :"0",
                transform: `scaleX(${props.isInView ? 1 : 0})`,
                transition: "transform 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s,opacity 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
            />
          </Link>
       
        </div>
      </div>
    );
  });
  
  export default ItemProject;