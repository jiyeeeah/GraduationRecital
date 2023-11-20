import React from "react";
import { ReactComponent as RightIcon } from "../assets/svgs/chevron-right.svg";

export default function MenuButton({ src, alt, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-row items-center justify-between w-full gap-1"
    >
      <img
        src={src}
        alt={alt}
        className={`self-start ${alt === "리어왕의 절규" ? "h-14" : "h-12"} px-3`}
      />
      <RightIcon className="w-7 h-7 fill-white" />
      {children}
    </button>
  );
}
