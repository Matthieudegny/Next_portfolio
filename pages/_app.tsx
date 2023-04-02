import "@/styles/app.scss";
import { AnimatePresence } from "framer-motion";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="test_app">
      <AnimatePresence initial={false} mode="popLayout">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
