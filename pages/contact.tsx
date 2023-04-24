import React, { useRef, forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../styles/Contact.module.scss";

const Contact = () => {
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
        <motion.h1>Contact</motion.h1>
        <Link href="/">Home</Link>
      </main>
    </motion.main>
  );
};

export default Contact;
