import "@/styles/app.scss";
import { AnimatePresence, motion } from "framer-motion";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <div className="test_app">
      <AnimatePresence initial={false}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
        </Head>
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
