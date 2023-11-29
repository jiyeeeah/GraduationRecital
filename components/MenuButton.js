import React from "react";
import RightIcon from "/public/svgs/chevron-right.svg";
import Link from "next/link";
import Image from "next/image";

export default function MenuButton({ src, alt, children, link }) {
  return (
    <Link href={link} className="relative flex flex-row items-center justify-between w-full gap-1">
      {/* <img
        src={src}
        alt={alt}
        className={`self-start ${alt === "리어왕의 절규" ? "h-12" : "h-10"} px-3`}
      /> */}
      <Image
        src={src}
        alt={alt}
        className={`self-start ${alt === "리어왕의 절규" ? "h-12" : "h-10"} px-3`}
      />
      <RightIcon className="w-7 h-7 fill-white" />
      {children}
    </Link>
  );
}
