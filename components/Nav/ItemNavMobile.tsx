import Link from "next/link";
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

export default ItemNavMobile;
