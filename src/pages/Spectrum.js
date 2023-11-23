import React from "react";
import { useEffect, useState } from "react";
import setScreenHeight from "../utils/setScreenHeight";
import spectrumBGUrl from "../assets/images/background/spectrumBG.png";
import starsUrl from "../assets/images/background/stars.png";

export default function Spectrum() {
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => setOffsetY(window.scrollY);

  const BGElemetStyle = {
    transform: offsetY !== 0 && `translateY(${offsetY * 0}px)`,
  };
  const starsElemetStyle = {
    transform: offsetY !== 0 && `translateY(${-offsetY * 0.45}px)`,
  };

  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <div className="relative">
      <img
        src={spectrumBGUrl}
        alt="spectrum배경"
        style={BGElemetStyle}
        className="absolute top-0"
      />
      <img
        src={starsUrl}
        alt="별"
        style={starsElemetStyle}
        className="absolute top-0 opacity-70 animate-pulse"
      />
      <div
        style={BGElemetStyle}
        className="absolute top-0 flex flex-col items-center w-full p-10 font-ICEJaram bg-gradient-to-b from-[#8B97A3] to-[#4B5F74] bg-clip-text text-transparent"
      >
        <p className="text-5xl">스펙트럼</p>
        <p className="self-end text-right">작곡 이지예</p>
        <div className="flex flex-col gap-5 text-base text-center font-NanumJungHagSaeng ">
          <p className="font-bold">
            “희진은 결코 루이가 보는 방식으로 그 풍경을 볼 수 없을 것이다.
            <br />
            하지만 희진은 루이가 보는 세계를 약간이나마 상상할 수 있었고,
            <br />
            기쁨을 느꼈다.”
            <br />- 『우리가 빛의 속도로 갈 수 없다면』 중 《스펙트럼》 중
          </p>
          <p className="mt-8">
            이 곡은 김초엽 작가의 소설 『우리가 빛의 속도로 갈 수 없다면』의
            <br />
            7가지 단편 소설 중 《스펙트럼》의 이야기를 표현한 곡이다.
          </p>
          <p>
            《스펙트럼》은 지구인 ‘희진’이 외계 행성에 불시착하여 <br />
            ‘루이’라는 외계인을 만나고 그 둘이 함께 살아가는 이야기다. <br />
            언뜻 보면 뻔한 sf소설에 불과할 수 있지만 <br />이 이야기는 그 이상의 메시지를 담고 있다.
          </p>
          <p>
            희진과 루이는 전혀 소통이 되지 않음에도 불구하고 <br />
            서로를 이해하려고, 가까워지려고 끊임없이 노력한다. <br />
            희진은 그들의 언어를 연구하고 <br />
            루이는 희진에게 외계행성에서 생존할 수 있도록 <br />
            음식과 잠잘 곳을 제공한다. <br />
            이렇게 절대 공존할 수 없을 것 같던 두 생명체가 <br />꽤 오랜 시간을 함께하면서 살아간다.
            <br />
            끝까지 그들은 서로의 언어를 이해할 수는 없었지만 <br />
            갑작스러운 헤어짐에 서로를 그리워하고 <br />
            함께 했던 소중한 기억을 간직하며 살아간다.
          </p>
          <p>
            이 곡의 첫 부분에서는 희진이 우주를 떠다니다가 <br />
            외계행성에 불시착하게 되는 장면을 표현했다. <br />
            우주의 신비하고 광활한 모습과 갑작스러운 불시착 등을 나타냈다. <br />
            다음은 희진과 루이가 동굴에서 함께 살아가는 장면이다. <br />
            처음에는 서로 눈치를 보고 탐색한다. <br />
            이후 둘은 점점 합을 맞춰가면서 일상적인 루틴을 만들고 <br />
            나중에는 서로를 이해하듯 대화하는 모습을 담고 싶었다. <br />
            소설 속에서 둘은 대화를 나누지는 않지만 <br />
            그들만의 교감 또는 소통을 하는 장면이 있다.
            <br />
            그렇게 둘은 점점 서로에 대해 알아가게 되는데 <br />
            뒷부분에서 그들의 급작스러운 헤어짐 이후의 감정을 짧게 표현했다. <br />
          </p>
        </div>
      </div>
    </div>
  );
}
