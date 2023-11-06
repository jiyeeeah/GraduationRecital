import React from "react";

export default function MenuButton({ children, bgColor, onClick }) {
  return (
    <button className={`${bgColor} m-5 p-3 rounded-md`} onClick={onClick}>
      {children}
    </button>
  );
}
