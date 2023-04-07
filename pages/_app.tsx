import "@/styles/app.scss";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import Nav from "../components/Nav";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="font-latoBold relative h-screen overflow-hidden py-24 px-12 lg:px-48">
      {/* initial false => at the mount of the component no animation */}
      <AnimatePresence initial={false}>
        <Nav />
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
