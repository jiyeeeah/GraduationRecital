import React from "react";
import { ReactComponent as RightIcon } from "../assets/svgs/chevron-right.svg";

export default function MenuButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-row items-center justify-between w-full gap-1"
    >
      <div className="relative flex flex-col w-full gap-3">{children}</div>
      <RightIcon className="w-7 h-7 fill-white" />
    </button>
  );
}
