import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { animate, motion } from "framer-motion";

import LayoutNav from "./LayoutNav";
// animate-[2.3s_slideOutNavMobile_1s_ease-in_forwards]
const ItemNavMobile = ({
  setmenuNavMobile,
  setmobilAnimationLink,
  mobilAnimationLink,
  pageString,
  link,
}: {
  setmenuNavMobile: Function;
  setmobilAnimationLink: Function;
  mobilAnimationLink: string;
  pageString: string;
  link: string;
}) => {
  return (
    <div className="m-5 p-1 w-full ml-20 flex items-center overflow-hidden">
      <div
        className={`text-white w-full pl-3 z-50 flex items-center justify-start ease-in duration-700
        ${
          mobilAnimationLink !== pageString && mobilAnimationLink
            ? "translate-y-full"
            : ""
        }

        `}
        onClick={() => {
          if (typeof pageString === "string") setmobilAnimationLink(pageString);
          const timeOutOffMenuTurnOff = setTimeout(() => {
            setmenuNavMobile(false);
          }, 600);
          const timeOutOffAnimation = setTimeout(() => {
            setmobilAnimationLink(false);
          }, 1100);
          return () => {
            clearTimeout(timeOutOffMenuTurnOff);
            clearTimeout(timeOutOffAnimation);
          };
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="white"
            className={`w-0 h-8  duration-1000 ${
              mobilAnimationLink === pageString ? "w-8" : ""
            } `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
        <Link href={link}>{pageString}</Link>
      </div>
    </div>
  );
};

const Nav = ({ hideNav }: { hideNav: boolean }) => {
  console.log("hideNav: ", hideNav);
  const [Home, setHome] = useState(false);
  const [Projects, setProjects] = useState(false);
  const [Contact, setContact] = useState(false);
  const [menuNavMobile, setmenuNavMobile] = useState(false);
  const [mobilAnimationLink, setmobilAnimationLink] = useState<any>(false);

  const turnOffAnimation = (setstate: Function) => {
    const timeOutOffAnimation = setTimeout(() => {
      setstate(false);
    }, 600);
    return () => clearTimeout(timeOutOffAnimation);
  };

  const [width, setWidth] = useState<string>("desktopWidth");
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
      <motion.nav>
        {width === "desktopWidth" && !hideNav ? (
          <div className="fixed flex flex-col z-50 right-7 top-7">
            <Link
              onMouseEnter={() => setHome(true)}
              onMouseLeave={() => turnOffAnimation(setHome)}
              className={
                styleNav + "animate-[0.25s_slideinNav_0s_ease-out_forwards]"
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
                styleNav + " animate-[0.25s_slideinNav_0.05s_ease-out_forwards]"
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
                styleNav + " animate-[0.25s_slideinNav_0.1s_ease-out_forwards]"
              }
              href="/contact"
            >
              <LayoutNav Anim={Contact}>
                <h1>CONTACT</h1>
              </LayoutNav>
            </Link>
          </div>
        ) : !hideNav ? (
          <div className="fixed flex flex-col z-50 right-3 top-5">
            <Link
              href=""
              className="font-NotoSansGeorgian"
              onClick={() => setmenuNavMobile((prev) => !prev)}
            >
              <div className="flex flex-col opacity-1 leading-9 h-9 mb-3 overflow-hidden ">
                <div
                  className={`inline-block leading-9 h-9 transition-transform duration-1000   text-2xl ${
                    menuNavMobile ? "-translate-y-full" : ""
                  }`}
                >
                  Menu
                </div>
                <div
                  className={`inline-block text-white leading-9 h-9 transition-transform duration-500  text-2xl   ${
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
        <div className="h-full w-full p-0 md:pl-2  flex flex-col items-start justify-center font-NotoSansGeorgian text-5xl">
          <ItemNavMobile
            setmenuNavMobile={setmenuNavMobile}
            setmobilAnimationLink={setmobilAnimationLink}
            mobilAnimationLink={mobilAnimationLink}
            pageString={"HOME"}
            link={"/"}
          />
          <ItemNavMobile
            setmenuNavMobile={setmenuNavMobile}
            setmobilAnimationLink={setmobilAnimationLink}
            mobilAnimationLink={mobilAnimationLink}
            pageString={"CONTACT"}
            link={"/contact"}
          />
          <ItemNavMobile
            setmenuNavMobile={setmenuNavMobile}
            setmobilAnimationLink={setmobilAnimationLink}
            mobilAnimationLink={mobilAnimationLink}
            pageString={"PROJECTS"}
            link={"/projects"}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
