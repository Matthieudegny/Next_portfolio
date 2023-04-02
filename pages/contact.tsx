import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <motion.div
      animate={{ y: "0%" }}
      //at the unmount of the compo => exit
      exit={{ opacity: 1 }}
      initial={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%",
        backgroundColor: "#f2b82c",
      }}
    >
      <motion.h1>Contact</motion.h1>
      <Link href="/">Home</Link>
    </motion.div>
  );
};

export default Contact;
