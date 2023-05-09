import "@/styles/app.css";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';

import Nav from "../components/Nav/Nav";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  //turn off animation card section2
  const [mobileVersion, setmobilVersion] = useState(false);
  const [padVersion, setPadVersion] = useState<boolean>(false);
  const [hideNav, setHideNav] = useState(false);
  const [currentPage, setcurrentPage] = useState<string>("/");
  const [lightThemeNav, setlightThemeNav] = useState(false);

  const updateWidth = () => {
    if (window.innerWidth < 1024) {
      setPadVersion(true);
    } else {
      setPadVersion(false);
    }
    if (window.innerWidth < 640) {
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
      <Head>
        <title>Matthieu DEGNY Portfolio</title>
        <meta name="Matthieu DEGNY Portfolio" content="Matthieu DEGNY Portfolio" />
      </Head>
      {/* initial false => at the mount of the component no animation */}
      <AnimatePresence initial={false}>
        <Nav
         key={`nav`}
          hideNav={hideNav}
          setHideNav={setHideNav}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
          lightThemeNav={lightThemeNav}
        />
        <Component
         key={router.asPath}
          mobileVersion={mobileVersion}
          padVersion={padVersion}
          setHideNav={setHideNav}
          setlightTemeNav={setlightThemeNav}
          setcurrentPage={setcurrentPage}
          {...pageProps}
        />

        <Analytics />
      </AnimatePresence>
    </div>
  );
}
