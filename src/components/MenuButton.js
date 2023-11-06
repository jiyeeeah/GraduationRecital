import React from "react";

export default function MenuButton({ children, bgColor }) {
  return <div className={`${bgColor} m-5 p-3 rounded-md`}>{children}</div>;
}
