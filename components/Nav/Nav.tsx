import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { animate, motion } from "framer-motion";

import ItemNavDesktop from "./ItemNavDesktop";
import ItemNavMobile from "./ItemNavMobile";

const Nav = ({ hideNav, lightThemeNav }: { hideNav: boolean; lightThemeNav: boolean }) => {
  const router = useRouter();
  const [currentPage, setcurrentPage] = useState<string>("/");
  const [Home, setHome] = useState<boolean>(false);
  const [Projects, setProjects] = useState<boolean>(false);
  const [Contact, setContact] = useState<boolean>(false);
  const [menuNavMobile, setmenuNavMobile] = useState<boolean>(false);
  const [mobilAnimationLink, setmobilAnimationLink] = useState<any>(false);
  //turn on menu nav for mobile
  const [width, setWidth] = useState<string>("desktopWidth");

  const turnOffAnimation = (setstate: Function) => {
    const timeOutOffAnimation = setTimeout(() => {
      setstate(false);
    }, 600);
    return () => clearTimeout(timeOutOffAnimation);
  };

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

  useEffect(() => {
    setcurrentPage(router.pathname);
    if (router.pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
    if (router.pathname === "/contact") {
      setContact(true);
    } else {
      setContact(false);
    }
    if (router.pathname === "/projects") {
      setProjects(true);
    } else {
      setProjects(false);
    }
  }, [router]);

  const diplsayNavdesktop = (
    link: string,
    stateAnimation: boolean,
    seStateAnimation: Function,
    title: string
  ) => {
    return (
      <Link
        onMouseEnter={() => {
          if (link !== currentPage) seStateAnimation(true);
        }}
        onMouseLeave={() => {
          if (link !== currentPage) turnOffAnimation(seStateAnimation);
        }}
        className={styleNav + "animate-[0.25s_slideinNav_0s_ease-out_forwards]"}
        href={link}
      >
        <ItemNavDesktop Anim={stateAnimation} lightThemeNav={lightThemeNav} currentPage={currentPage}>
          <h1>{title}</h1>
        </ItemNavDesktop>
      </Link>
    );
  };

  const styleNav = "inline-block translate-x-full opacity-0 leading-9 h-9 overflow-hidden mb-5 ";

  return (
    <>
      <motion.nav>
        {width === "desktopWidth" && !hideNav ? (
          // desktop nav
          <div className="fixed flex flex-col z-50 right-7 top-7 w-40">
            {diplsayNavdesktop("/", Home, setHome, "HOME")}
            {diplsayNavdesktop("/projects", Projects, setProjects, "PROJECTS")}
            {diplsayNavdesktop("/contact", Contact, setContact, "CONTACT")}
          </div>
        ) : !hideNav ? (
          // mobile nav
          <div className="fixed flex flex-col z-50 right-3 top-5">
            <Link href="" className="font-NotoSansGeorgian" onClick={() => setmenuNavMobile((prev) => !prev)}>
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
