import "@/styles/app.scss";
import { AnimatePresence } from "framer-motion";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="font-playfair relative h-screen overflow-hidden py-24 px-12 lg:px-48">
      <AnimatePresence initial={false} mode="popLayout">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
