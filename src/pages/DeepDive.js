import React from "react";
import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";
import SeaBGURl from "../assets/images/background/sea.jpeg";

export default function DeepDive() {
  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <div className="h-real-screen bg-gradient-to-b from-blue-100 to-blue-900">
      <img src={SeaBGURl} alt="바다 이미지" className="absolute top-0 h-real-screen" />
      <div className="absolute top-0 flex flex-col items-center w-full">
        <p className="m-10 text-7xl text-blue-950 font-JustBreathe">Deep Dive</p>
        <p className="text-2xl text-center text-blue-950 font-JejuGamgyul">
          무언가에 깊이 몰입한 적,
          <br />
          어딘가에 깊게 빠져든 적이 있나요?
          <br />
          지금 이 순간 만큼은
          <br />
          가야금의 선율에 빠져보시기를 바랍니다.
          <br />
          아름다운 듯 먹먹한 선율과
          <br />
          신나는 듯 어딘가 깜깜한 리듬이 매력적인
          <br />이 곡은 앞으로 떠날 저의 여정에 대한
          <br />
          바람을 담은 곡입니다.
          <br />
          이제는 떠돌지 않고 꿋꿋하게 몰입하여 나아가려 합니다.
        </p>
      </div>
    </div>
  );
}
