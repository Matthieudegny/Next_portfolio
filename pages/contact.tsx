import React, { useRef, useEffect, useState, RefObject } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import { IconContext } from "react-icons";
import { SlSocialGithub } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";

//components
import LayoutText from "../components/LayoutText";
import AnimationButton from "@/components/contact/AnimationButton";
import Footer from "@/components/Footer";

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
  const [aniamtionButton, setaniamtionButton] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const refSectionFormContact = useRef<HTMLInputElement>(null);
  const isInViewSectionProjects = useInView(refSectionFormContact, {
    amount: 1,
    once: true,
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

  const styleDivInput = "flex flex-col mb-10 relative";
  const styleInput = "placeholder:text-gray-500 outline-none h-12 pt-4 pb-4 pl-4 bg-black focus:bg-black";
  const getNavStyles = (delay: number) => ({
    width: isInViewSectionProjects ? "100%" : "0%",
    transition: `width 1s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
  });
  const styleAnimation = {
    width: isInViewSectionProjects ? "100%" : "0%",
    transition: "width 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
  return (
    <form autoComplete="off" className="flex flex-col p-20 pb-10" onSubmit={handleSubmit}>
      <div ref={refSectionFormContact} className={styleDivInput}>
        <label>Your Name:</label>
        <input
          className={styleInput}
          placeholder="John Doe"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="absolute bottom-0 h-1px w-full bg-gray-400" style={getNavStyles(1.6)}></div>
      </div>

      <div className={styleDivInput}>
        <label>Your Email:</label>
        <input
          className={styleInput}
          placeholder="JohnDoe@gmail.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="absolute bottom-0 h-1px w-full bg-gray-400" style={getNavStyles(2)}></div>
      </div>

      <div className="flex flex-col relative">
        <label>Your Message:</label>
        <textarea
          className="placeholder:text-gray-500  bg-black resize-none outline-none  pt-4 pb-4 pl-4 min-h-15v"
          placeholder="Hello Matthieu..."
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="absolute bottom-0 h-1px w-full bg-gray-400" style={getNavStyles(2.4)}></div>
      </div>

      <button type="submit" className="mt-20">
        <div
          className="overflow-hidden h-8"
          onMouseEnter={() => setaniamtionButton(true)}
          onMouseLeave={() => setaniamtionButton(false)}
        >
          <AnimationButton Anim={aniamtionButton}>SEND MESSAGE</AnimationButton>
        </div>
      </button>
    </form>
  );
}
const Contact = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const customAnimationProps = { x, y };

  return (
    <motion.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 w-full h-screen  overflow-y-auto bg-black text-white"
    >
      <main className="relative min-h-screen w-screen  font-Montserrat_regular">
        <h1 className="font-NotoSansGeorgian min-h-30v mb-20 xl:mb-0 w-4/5 xl:w-4/5   md:tracking-widest text-2xl p-1 pr-8 sm:pr-0 md:text-3xl pl-5  sm:px-5rem px-24 pt-14 ">
          <LayoutText delay={0.5} timeAnimation={0.02} animationColor={false}>
            Ready to collaborate with you! Whether you have an idea in mind, a project to discuss, or just
            want to explore potential opportunities, please feel free to get in touch with me. I'll be happy
            to connect with you and respond to your queries as promptly as I can.
          </LayoutText>
        </h1>

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
        <div className="flex flex-col lg:flex-row  justify-between">
          <div className="w-full lg:w-4/6 lg:pl-20">
            <ContactForm />
          </div>
          <div className="lg:mr-16 pb-24 pt-10 lg:pt-0 lg:pb-0 flex flex-wrap lg:flex-col items-center justify-evenly">
            <Link
              className="p-4 hover:bg-slate-500 rounded-full"
              style={{
                transition: "all 0.4s ease-in-out",
              }}
              href="https://github.com/Matthieudegny"
              target="_blank"
            >
              <SlSocialGithub className="w-20 h-20  cursor-pointer" />
            </Link>
            <Link
              className="p-4 hover:bg-slate-500 rounded-full"
              style={{
                transition: "all 0.4s ease-in-out",
              }}
              href="https://www.linkedin.com/in/matthieu-degny-49060a238/"
              target="_blank"
            >
              <CiLinkedin className="w-20 h-20 cursor-pointer" />
            </Link>
            <Link
              className="p-4 hover:bg-slate-500 rounded-full"
              style={{
                transition: "all 0.4s ease-in-out",
              }}
              href="https://twitter.com/MatthieuDevCode"
              target="_blank"
            >
              <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                <TfiTwitter className="w-20 h-20 cursor-pointer" />
              </IconContext.Provider>
            </Link>
            <Link
              className="p-4 h-28 w-28 flex justify-center items-center hover:bg-slate-500 rounded-full"
              style={{
                transition: "all 0.4s ease-in-out",
              }}
              href="/DegnyMatthieuCV.pdf"
              download
              target="_blank"
            >
              <button className="text-6xl font-Montserrat_thin">CV</button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </motion.main>
  );
};

export default Contact;
