import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { animate, motion } from "framer-motion";

import LayoutNav from "./LayoutNav";

const ItemNavMobile = ({
  setmenuNavMobile,
  pageString,
}: {
  setmenuNavMobile: Function;
  pageString: string;
}) => {
  const [item_Nav_Animation, setitem_Nav_Animation] = useState<boolean>(false);
  return (
    <div className="m-5 w-full ml-20 flex items-center">
      <Link
        href=""
        className={`text-white w-full pl-3 z-50 flex items-center justify-start ${
          item_Nav_Animation
            ? "animate-[1.5s_slideOutNavMobile_1s_ease-out_forwards]"
            : ""
        }`}
        onClick={() => {
          setitem_Nav_Animation(true);
          // setmenuNavMobile((prev: boolean) => !prev);
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="white"
            className={`w-0 h-8 ease-out duration-300 tra ${
              item_Nav_Animation ? "w-8" : ""
            } `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
        <div>{pageString}</div>
      </Link>

      {/* <div
        className="absolute top-0 left-0 ml-16 skew-x-30d scale-y-100 hover:scale-y-0 origin-left text-transparent "
        style={{
          textShadow: "	#41413c 1px 0 5px",
        }}
      >
        {pageString}
      </div> */}
    </div>
  );
};

const Nav = ({ hideNav }: { hideNav: boolean }) => {
  console.log("hideNav: ", hideNav);
  const [Home, setHome] = useState(false);
  const [Projects, setProjects] = useState(false);
  const [Contact, setContact] = useState(false);
  const [menuNavMobile, setmenuNavMobile] = useState(false);

  const turnOffAnimation = (setstate: Function) => {
    const timeOutOffAnimation = setTimeout(() => {
      setstate(false);
    }, 600);
  };

  const [width, setWidth] = useState<string>("");
  const updateWidth = () => {
    if (window.innerWidth < 1280) {
      setWidth("mobileWidth");
    } else {
      setWidth("desktopWidth");
    }
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const styleNav =
    "inline-block translate-x-full opacity-0 leading-9 h-9 overflow-hidden mb-3 ";

  return (
    <>
      <motion.nav className="fixed flex flex-col z-50 right-7 top-7">
        {width === "desktopWidth" && !hideNav ? (
          <>
            <Link
              onMouseEnter={() => setHome(true)}
              onMouseLeave={() => turnOffAnimation(setHome)}
              className={
                styleNav + "animate-[0.7s_slideinNav_0.1s_ease-out_forwards]"
              }
              href="/"
            >
              <LayoutNav Anim={Home}>
                <h1>HOME</h1>
              </LayoutNav>
            </Link>

            <Link
              onMouseEnter={() => setProjects(true)}
              onMouseLeave={() => turnOffAnimation(setProjects)}
              className={
                styleNav + " animate-[0.7s_slideinNav_0.2s_ease-out_forwards]"
              }
              href="/projects"
            >
              <LayoutNav Anim={Projects}>
                <h1>PROJECTS</h1>
              </LayoutNav>
            </Link>

            <Link
              onMouseEnter={() => setContact(true)}
              onMouseLeave={() => turnOffAnimation(setContact)}
              className={
                styleNav + " animate-[0.7s_slideinNav_0.3s_ease-out_forwards]"
              }
              href="/contact"
            >
              <LayoutNav Anim={Contact}>
                <h1>CONTACT</h1>
              </LayoutNav>
            </Link>
          </>
        ) : !hideNav ? (
          <div>
            <Link
              href=""
              className="font-NotoSansGeorgian"
              onClick={() => setmenuNavMobile((prev) => !prev)}
            >
              <div className="flex flex-col opacity-1 leading-9 h-9 mb-3 overflow-hidden ">
                <div
                  className={`inline-block leading-9 h-9 transition-transform duration-500   text-3xl ${
                    menuNavMobile ? "-translate-y-full" : ""
                  }`}
                >
                  Menu
                </div>
                <div
                  className={`inline-block text-white leading-9 h-9 transition-transform duration-500  text-3xl   ${
                    menuNavMobile ? "-translate-y-full " : ""
                  }`}
                >
                  Close
                </div>
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}
      </motion.nav>

      <div
        className="fixed h-screen w-0 z-40 right-0 top-0 bg-black "
        style={{
          transition: "width 1s ease-in-out",
          width: menuNavMobile ? "100%" : "0%",
        }}
      >
        <div className="h-full w-full p-10 flex flex-col items-start justify-center font-NotoSansGeorgian text-5xl">
          <ItemNavMobile
            setmenuNavMobile={setmenuNavMobile}
            pageString={"HOME"}
          />
          <ItemNavMobile
            setmenuNavMobile={setmenuNavMobile}
            pageString={"CONTACT"}
          />
          <ItemNavMobile
            setmenuNavMobile={setmenuNavMobile}
            pageString={"PROJECTS"}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
