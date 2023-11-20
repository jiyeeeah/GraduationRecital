import React from "react";
import { ReactComponent as RightIcon } from "../assets/svgs/chevron-right.svg";

export default function MenuButton({ url, alt, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-row items-center justify-between w-full"
    >
      <img src={url} alt={alt} className="w-11/12 p-3" />
      <RightIcon className="w-5 h-5 fill-white" />
      {children}
    </button>
  );
}
