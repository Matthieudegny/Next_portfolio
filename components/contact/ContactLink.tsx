import React, { useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";

type ContactLinkProps = {
  href: string;
  logo: IconType;
  isInViewSectionLinksContact: boolean;
  delay: number;
};

function ContactLink({ href, logo, isInViewSectionLinksContact, delay }: ContactLinkProps) {
  const Logo = logo;
  const [animationOn, setanimationOn] = useState(false);
  return (
    <Link
      className="p-4  w-28 h-28 rounded-lg inline-block relative"
      style={{
        transform: isInViewSectionLinksContact ? "none" : `translateX(200px)`,
        opacity: isInViewSectionLinksContact ? 1 : 0,
        transition: `transform 1s ease-in-out,opacity ${delay}s ease-in-out,opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s,background 0.4s ease-in-out`,
        background: "linear-gradient(45deg, rgba(109,112,113,1) 30%, rgba(0,0,0,1) 71%)",
      }}
      href={href}
      target="_blank"
      onMouseEnter={() => setanimationOn(true)}
      onMouseLeave={() => setanimationOn(false)}
    >
      <div
        style={{
          opacity: animationOn ? 1 : 0,
          background: "linear-gradient(234deg, rgba(109,112,113,1) 30%, rgba(0,0,0,1) 71%)",
          transition: "opacity 0.9s ease-in-out",
        }}
        className="absolute top-0 left-0 w-full h-full rounded-lg  z-10"
      ></div>
      <Logo className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 cursor-pointer z-20" />
    </Link>
  );
}

export default ContactLink;
