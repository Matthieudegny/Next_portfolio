import React, { useRef, useEffect, useState } from "react";
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
        duration: 0.7,
        ease: "easeOut",
      }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <motion.h1>Contact</motion.h1>
      <Link href="/">Home</Link>
    </motion.main>
  );
};

export default Contact;
