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
      className={styles.testContact}
    >
      <motion.h1>Contact</motion.h1>
      <Link href="/">Home</Link>
    </motion.div>
  );
};

export default Contact;
