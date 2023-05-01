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

const Contact = ({ padVersion }: { padVersion: boolean }) => {
  const refSectionFormContact = useRef<HTMLInputElement>(null);
  const isInViewSectionForm = useInView(refSectionFormContact, {
    amount: padVersion ? 0.5 : 1,
    once: true,
  });

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

        <div ref={refSectionFormContact} className="flex flex-col lg:flex-row  justify-between">
          <div className="w-full lg:w-4/6 lg:pl-20">
            <ContactForm isInViewSectionForm={isInViewSectionForm} />
          </div>
          <div className="lg:mr-16 pb-24 pt-10 lg:pt-10 lg:pb-0 flex flex-wrap lg:flex-col items-center justify-evenly">
            <ContactLink
              href={"https://github.com/Matthieudegny"}
              logo={SlSocialGithub}
              isInViewSectionLinksContact={isInViewSectionForm}
              delay={1.5}
            />
            <ContactLink
              href={"https://www.linkedin.com/in/matthieu-degny-49060a238/"}
              logo={CiLinkedin}
              isInViewSectionLinksContact={isInViewSectionForm}
              delay={1.7}
            />
            <ContactLink
              href={"https://twitter.com/MatthieuDevCode"}
              logo={TfiTwitter}
              isInViewSectionLinksContact={isInViewSectionForm}
              delay={1.9}
            />
            <Link
              className="p-4 h-28 w-28 flex justify-center items-center hover:bg-gray-950 rounded-lg"
              style={{
                transform: isInViewSectionForm ? "none" : `translateX(200px)`,
                opacity: isInViewSectionForm ? 1 : 0,
                transition: `transform 0.5s ease-in-out  2.1s,opacity 0.3s ease-in-out 2.1s,background 0.4s ease-in-out`,
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
