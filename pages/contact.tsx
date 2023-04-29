import React, { useRef, useEffect, useState } from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import { IconContext } from "react-icons";
import { SlSocialGithub } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";

//components
import LayoutText from "../components/LayoutText";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactLink from "@/components/contact/ContactLink";

const Contact = () => {
  const refSectionLinksContact = useRef<HTMLInputElement>(null);
  const isInViewSectionLinksContact = useInView(refSectionLinksContact, {
    amount: 1,
    once: true,
  });

  useEffect(() => {
    console.log(isInViewSectionLinksContact);
  }, [isInViewSectionLinksContact]);

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

        <div className="flex flex-col lg:flex-row  justify-between">
          <div className="w-full lg:w-4/6 lg:pl-20">
            <ContactForm />
          </div>
          <div
            ref={refSectionLinksContact}
            className="lg:mr-16 pb-24 pt-10 lg:pt-0 lg:pb-0 flex flex-wrap lg:flex-col items-center justify-evenly"
          >
            <ContactLink
              href={"https://github.com/Matthieudegny"}
              logo={SlSocialGithub}
              isInViewSectionLinksContact={isInViewSectionLinksContact}
              delay={1.7}
            />
            <ContactLink
              href={"https://www.linkedin.com/in/matthieu-degny-49060a238/"}
              logo={CiLinkedin}
              isInViewSectionLinksContact={isInViewSectionLinksContact}
              delay={2.1}
            />
            <ContactLink
              href={"https://twitter.com/MatthieuDevCode"}
              logo={TfiTwitter}
              isInViewSectionLinksContact={isInViewSectionLinksContact}
              delay={2.5}
            />
            <Link
              className="p-4 h-28 w-28 flex justify-center items-center hover:bg-gray-950 rounded-lg"
              style={{
                transform: isInViewSectionLinksContact ? "none" : `translateX(200px)`,
                opacity: isInViewSectionLinksContact ? 1 : 0,
                transition: `transform 1s ease-in-out,opacity 2.9s ease-in-out,opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.9s,background 0.4s ease-in-out`,
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
