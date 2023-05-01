import "@/styles/app.scss";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

import Nav from "../components/Nav/Nav";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  //turn off animation card section2
  const [mobilVersion, setmobilVersion] = useState<boolean>(false);
  const [hideNav, setHideNav] = useState(false);
  const [currentPage, setcurrentPage] = useState<string>("/");
  const [lightThemeNav, setlightThemeNav] = useState(false);

  const updateWidth = () => {
    if (window.innerWidth < 1024) {
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

  return (
    <div className="relative min-h-screen h-full overflow-y-auto py-24 px-12 lg:px-48">
      {/* initial false => at the mount of the component no animation */}
      <AnimatePresence initial={false}>
        <Nav
          hideNav={hideNav}
          setHideNav={setHideNav}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
          lightThemeNav={lightThemeNav}
        />
        <Component
          key={router.asPath}
          mobilVersion={mobilVersion}
          setHideNav={setHideNav}
          setlightTemeNav={setlightThemeNav}
          setcurrentPage={setcurrentPage}
          {...pageProps}
        />
      </AnimatePresence>
    </div>
  );
}
