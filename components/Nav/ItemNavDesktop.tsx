import { useEffect, useState } from "react";

const ItemNavDesktop = ({
  children,
  Anim,
  lightThemeNav,
  currentPage,
}: {
  children: any;
  Anim: boolean;
  lightThemeNav: boolean;
  currentPage: string;
}) => {
  const string = children.props.children;
  let array: string[] = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string.charAt(i));
  }

  const conditions_ToSet_NAv_In_White = (lightThemeNav && currentPage === "/") || currentPage === "/contact";

  return (
    <>
      <div>
        {array.map((item: string, index: number) => (
          <span
            key={index}
            className={`${
              conditions_ToSet_NAv_In_White ? "text-white" : "text-black"
            }  inline-block transition-transform duration-500  font-Montserrat_thin font-light text-3xl ${
              Anim ? "-translate-y-full" : ""
            }`}
            style={{
              transition: `transform 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                index * 0.03
              }s,color 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <div>
        {array.map((item: string, index: number) => (
          <span
            key={index}
            className={`${
              conditions_ToSet_NAv_In_White ? "text-white" : "text-black"
            } inline-block transition-transform duration-500 font-NotoSansGeorgian text-3xl -mt-5   ${
              Anim ? "-translate-y-full " : ""
            }`}
            style={{
              transition: `transform 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                index * 0.03
              }s,color 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
};

export default ItemNavDesktop;
