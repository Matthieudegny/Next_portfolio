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

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("There was an error sending your message. Please try again later.");
      }

      console.log(await response.json());
      alert("Your message has been sent!");
    } catch (error) {
      console.error(error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
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
        {/* <motion.div
          ref={ref}
          className="w-20 h-20 bg-gray-900  rounded-full "
          animate={customAnimationProps}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 300,
            restDelta: 0.001,
          }}
        /> */}
        <ContactForm />
        <motion.h1>Contact</motion.h1>
        <Link href="/">Home</Link>
      </main>
    </motion.main>
  );
};

export default Contact;
