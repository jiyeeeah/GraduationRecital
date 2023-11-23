import React from "react";
import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";
import "../styles/spectrum.css";

export default function Spectrum() {
  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <div className="para-wrapper">
      <div className="para-group">
        <div className="para-layer back-layer">스펙</div>
        <div className="para-layer front-layer">트럼</div>
      </div>
    </div>
  );
}
