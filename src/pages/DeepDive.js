import React from "react";
import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";
import { ReactComponent as DownIcon } from "../assets/svgs/chevron-down.svg";
import SeaBGURl from "../assets/images/background/sea.jpeg";
import DeepSeaBGURl from "../assets/images/background/DeepSea.jpg";

export default function DeepDive() {
  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <div className="overflow-scroll h-real-screen snap snap-y snap-mandatory">
      <div className="relative flex-shrink-0 h-real-screen snap-start bg-gradient-to-b from-blue-100 to-blue-900">
        <img src={SeaBGURl} alt="바다 이미지" className="absolute top-0 h-real-screen" />
        <div className="absolute top-0 flex flex-col items-center w-full h-full">
          <p className="m-10 text-7xl text-blue-950 font-JustBreathe">Deep Dive</p>
          <p className="text-2xl text-center text-blue-950 font-JejuGamgyul">
            무언가에 깊이 몰입한 적,
            <br />
            어딘가에 깊게 빠져든 적이 있나요?
          </p>
          <DownIcon className="w-8 h-8 m-5 fill-blue-950" />
        </div>
      </div>
      <div className="relative flex-shrink-0 snap-start h-real-screen">
        <img src={DeepSeaBGURl} alt="바다 이미지" className="absolute top-0 w-full h-real-screen" />
        <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full">
          <p className="text-2xl text-center text-blue-50 font-JejuGamgyul">
            나의 대학교 4년은 깊게 빠져들
            <br />
            무언가를 찾아가는 과정이었다.
            <br />
            끝내 찾은지는 아직 확실하지 않지만
            <br />
            절대 이 졸업이 마지막이 아닌, ‘시작’이라는 것은 알겠다.
            <br />
            나는 음악에 빠졌었다.
            <br />
            나는 영상 편집에 빠졌었다.
            <br />
            그리고 2023년, 그저 재미로 시작한 웹개발 공부가
            <br />
            생각보다 더욱 즐거웠고
            <br />
            웹개발에 빠졌다.
            <br />
            나는 여러 분야에 몰입할 수 있었다.
            <br />
            지금 당신의 몰입은 어딜 향해 있습니까?
            <br />
            지금 이 순간 만큼은 아름다운 듯 먹먹한 선율과
            <br />
            신나는 듯 어딘가 깜깜한 리듬이 매력적인 이 곡에
            <br />
            몰입해 보시길 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
}
