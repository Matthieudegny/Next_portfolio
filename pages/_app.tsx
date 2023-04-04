import "@/styles/app.scss";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="test_app">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ opacity: 1, y: "-100%", backgroundColor: "red" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          key={router.pathname}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
