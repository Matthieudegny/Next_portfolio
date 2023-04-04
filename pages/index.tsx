import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

//components
import LayoutText from "../components/LayoutText/LayoutText";
import Nav from "@/components/Nav/Nav";

//style
import styles from "../styles/Home.module.scss";

export default function Home({ projects }: { projects: any }) {
  return (
    <motion.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1, width: "100vw" }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className=" text-gray-900 absolute top-0 left-0 min-w-full h-full bg-primary-color lg:px-48 px-16 "
    >
      <Head>
        <title>PortFolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" relative h-screen flex-col justify-center items-center  ">
        <div className="min-w-full h-40v mt-8 text-3xl font-playfair   ">
          <LayoutText delay={0.25} lineHeight={3} timeAnimation={0.025}>
            <h1>
              Hello, I'm Matthieu, a front-end developer specialized, with
              modern technologies built around the Javascript framework.
            </h1>
          </LayoutText>
        </div>
        <Nav />
        <div className="min-w-full h-40v mt-8">
          <LayoutText delay={0.7} lineHeight={2.5} timeAnimation={0.0075}>
            <h2>
              As a front-end developer with expertise in React, Next.js, and
              TypeScript, I'm passionate about crafting user-friendly interfaces
              that bring ideas to life.
            </h2>
          </LayoutText>
        </div>
        <div className="min-w-full h-10v flex items-end justify-end">
          <div className="">
            ©2023 <span>Available for work from July</span>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

// export async function getStaticProps() {
//   const projects = await client.fetch(`*[_type == "projects"]`);

//   return {
//     props: {
//       projects,
//     },
//   };
// }
