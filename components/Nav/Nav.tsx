import React, { useRef, useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import ItemNavDesktop from "./ItemNavDesktop";
import ItemNavMobile from "./ItemNavMobile";

const Nav = ({
  hideNav,
  lightThemeNav,
  setHideNav,
  currentPage,
  setcurrentPage,
}: {
  hideNav: boolean;
  lightThemeNav: boolean;
  setHideNav: Function;
  currentPage: string;
  setcurrentPage: Function;
}) => {
  const router = useRouter();
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
    }, 300);
    return () => clearTimeout(timeOutOffAnimation);
  };

  const updateWidth = () => {
    if (window.innerWidth < 1280) {
      setWidth("mobileWidth");
    } else {
      setWidth("desktopWidth");
      setmenuNavMobile(false);
    }
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (router.pathname === "/contact" || router.pathname.includes("projects")) setHideNav(false);
    setcurrentPage(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    if (currentPage === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
    if (currentPage === "/contact") {
      setContact(true);
      setHideNav(false);
    } else {
      setContact(false);
    }

    if (currentPage.includes("projects")) {
      setProjects(true);
      setHideNav(false);
    } else {
      setProjects(false);
    }
    console.log(currentPage);
  }, [currentPage]);

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
        className={styleNav + "animate-[0.25s_slideinNav_1s_ease-out_forwards]"}
        href={link}
        onClick={() => setcurrentPage(link)}
      >
        <ItemNavDesktop Anim={stateAnimation} lightThemeNav={lightThemeNav} currentPage={currentPage}>
          <h1>{title}</h1>
        </ItemNavDesktop>
      </Link>
    );
  };

  const styleNav = "inline-block translate-x-full opacity-0 leading-9 h-9 overflow-hidden mb-5 ";
  const conditions_ToSet_NAv_In_White = (lightThemeNav && currentPage === "/") || currentPage === "/contact";

  useEffect(() => {
    console.log("lightThemeNav", lightThemeNav);
  }, [lightThemeNav]);

  useEffect(() => {
    console.log("currentPage", currentPage);
  }, [currentPage]);

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
            <div className="font-NotoSansGeorgian" onClick={() => setmenuNavMobile((prev) => !prev)}>
              <div className="flex flex-col opacity-1 leading-9 h-9 mb-3 overflow-hidden ">
                <div
                  className={`${
                    conditions_ToSet_NAv_In_White ? "text-white" : "text-black"
                  } inline-block leading-9 h-9 transition-transform duration-1000  cursor-pointer text-2xl ${
                    menuNavMobile ? "-translate-y-full" : ""
                  }`}
                >
                  Menu
                </div>
                <div
                  className={`inline-block text-white leading-9 h-9 transition-transform duration-500 cursor-pointer text-2xl   ${
                    menuNavMobile ? "-translate-y-full " : ""
                  }`}
                >
                  Close
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </motion.nav>

      {/* mobil nav display */}

      <div
        className="fixed h-screen w-0 z-40 right-0 top-0 bg-black "
        style={{
          willChange: "width",
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
            pageString={"PROJECTS"}
            link={"/projects"}
          />
          <ItemNavMobile
            setmenuNavMobile={setmenuNavMobile}
            setmobilAnimationLink={setmobilAnimationLink}
            mobilAnimationLink={mobilAnimationLink}
            pageString={"CONTACT"}
            link={"/contact"}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
