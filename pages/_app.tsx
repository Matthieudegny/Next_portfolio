import "@/styles/app.scss";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

import Nav from "../components/Nav";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  const [mobilVersion, setmobilVersion] = useState<boolean>(false);
  const [hideNav, setHideNav] = useState(false);

  const updateWidth = () => {
    if (window.innerWidth < 768) {
      setmobilVersion(true);
    } else {
      setmobilVersion(false);
    }
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    console.log("mobilVersion: ", mobilVersion);
  }, [mobilVersion]);

  return (
    <div className="relative min-h-screen h-full overflow-y-auto py-24 px-12 lg:px-48">
      {/* initial false => at the mount of the component no animation */}
      <AnimatePresence initial={false}>
        <Nav hideNav={hideNav} />
        <Component
          key={router.pathname}
          mobilVersion={mobilVersion}
          setHideNav={setHideNav}
          {...pageProps}
        />
      </AnimatePresence>
    </div>
  );
}
