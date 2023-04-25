import React, { useRef, forwardRef, useEffect, useState, RefObject } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../styles/Contact.module.scss";

function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}

const Contact = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const customAnimationProps = { x, y };
  useEffect(() => {
    console.log("x", x);
  }, [x]);

  return (
    <motion.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 w-full h-screen  overflow-y-auto"
    >
      <main className="relative bg-primary-color text-gray-900 min-h-screen w-screen  font-Montserrat_regular">
        <motion.div
          ref={ref}
          className="w-20 h-20 bg-gray-900 z-50"
          animate={customAnimationProps}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 300,
            restDelta: 0.001,
          }}
        />

        <motion.h1>Contact</motion.h1>
        <Link href="/">Home</Link>
      </main>
    </motion.main>
  );
};

export default Contact;
