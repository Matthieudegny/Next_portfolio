import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <div
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f0eeb9",
      }}
    >
      <motion.h1>Contact</motion.h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Contact;
