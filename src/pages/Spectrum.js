import React from "react";
import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";

export default function Spectrum() {
  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <div className="overflow-scroll text-white h-real-screen snap snap-y snap-mandatory">
      <div className="relative flex-shrink-0 h-real-screen snap-start">스펙</div>
      <div className="relative flex-shrink-0 snap-start h-real-screen">트럼</div>
    </div>
  );
}
