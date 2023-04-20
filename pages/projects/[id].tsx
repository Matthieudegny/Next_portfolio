import React, { useRef, useEffect } from "react";

import { motion, useInView } from "framer-motion";

const project = () => {
  const project = useRef<HTMLInputElement>(null);
  const isInViewproject = useInView(project, {
    amount: 0.825,
    once: true,
  });

  useEffect(() => {
    console.log("isInViewproject", isInViewproject);
  }, [isInViewproject]);

  return (
    <motion.main
      animate={{ x: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ x: "100%" }}
      transition={{
        duration: 1.5,
        ease: "linear",
      }}
      className="fixed top-0 left-0 w-full h-screen  overflow-y-auto"
    >
      <main className="relative bg-orange-100 text-gray-900 min-h-screen w-screen  font-Montserrat_regular pb-36">
        <div ref={project} className="h-screen w-full flex justify-center bg-red-500 items-center text-7xl">
          <div className="w-3/6 h-full relative bg-orange-400">
            <div
              style={{
                width: isInViewproject ? "0%" : "100%",
                transition: "width 1.5s ease-in-out 0s",
              }}
              className="absolute top-0 left-0 w-0 h-full bg-red-400"
            ></div>
          </div>

          <div className="w-3/6 h-full bg-red-400 flex justify-center items-center"> Ceci ets un test</div>
        </div>
      </main>
    </motion.main>
  );
};

export default project;
