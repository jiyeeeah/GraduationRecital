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
    <div
      style={BGElemetStyle}
      className="absolute top-0 flex flex-col items-center w-full gap-5 pt-10"
    >
      <div className="flex flex-col items-center w-full font-ICEJaram">
        <p className="text-7xl bg-gradient-to-b from-[#7595b6] to-[#60748a] font-bold text-transparent bg-clip-text">
          스펙트럼
        </p>
        <p className="self-end pr-10 text-2xl text-right text-[#60748a] font-semibold">
          작곡 이지예
        </p>
      </div>
      <div className="flex flex-col gap-5 text-center text-2xl font-NanumJungHagSaeng bg-gradient-to-b from-[#60748a] to-[#c07e6d] bg-clip-text text-transparent p-5 mb-96">
        <p className="font-bold">
          “희진은 결코 루이가 보는 방식으로 그 풍경을 볼 수 없을 것이다. 하지만 희진은 루이가 보는
          세계를 약간이나마 상상할 수 있었고, 기쁨을 느꼈다.”
          <br />- 『우리가 빛의 속도로 갈 수 없다면』 중 《스펙트럼》 중
        </p>
        <p className="mt-6 indent-3">
          이 곡은 김초엽 작가의 소설 『우리가 빛의 속도로 갈 수 없다면』의 7가지 단편 소설 중
          《스펙트럼》의 이야기를 표현한 곡이다. 《스펙트럼》은 지구인 ‘희진’이 외계 행성에
          불시착하여 ‘루이’라는 외계인을 만나고 그 둘이 함께 살아가는 이야기다. 언뜻 보면 뻔한
          sf소설에 불과할 수 있지만 이 이야기는 그 이상의 메시지를 담고 있다.
        </p>
        <p className="indent-3">
          희진과 루이는 전혀 소통이 되지 않음에도 불구하고 서로를 이해하려고, 가까워지려고 끊임없이
          노력한다. 희진은 그들의 언어를 연구하고 루이는 희진에게 외계행성에서 생존할 수 있도록
          음식과 잠잘 곳을 제공한다. 이렇게 절대 공존할 수 없을 것 같던 두 생명체가 꽤 오랜 시간을
          함께하면서 살아간다. 끝까지 그들은 서로의 언어를 이해할 수는 없었지만 갑작스러운 헤어짐에
          서로를 그리워하고 함께 했던 소중한 기억을 간직하며 살아간다.
        </p>
        <p className="indent-3">
          이 곡의 첫 부분에서는 희진이 우주를 떠다니다가 외계행성에 불시착하게 되는 장면을 표현했다.
          우주의 신비하고 광활한 모습과 갑작스러운 불시착 등을 나타냈다. 다음은 희진과 루이가
          동굴에서 함께 살아가는 장면이다. 처음에는 서로 눈치를 보고 탐색한다. 이후 둘은 점점 합을
          맞춰가면서 일상적인 루틴을 만들고 나중에는 서로를 이해하듯 대화하는 모습을 담고 싶었다.
          소설 속에서 둘은 대화를 나누지는 않지만 그들만의 교감 또는 소통을 하는 장면이 있다. 그렇게
          둘은 점점 서로에 대해 알아가게 되는데 뒷부분에서 그들의 급작스러운 헤어짐 이후의 감정을
          짧게 표현했다.
        </p>
        <img
          src={spectrumBGUrl}
          alt="spectrum배경"
          style={BGElemetStyle}
          className="absolute bottom-0 left-0 -z-50"
        />
        <img
          src={starsUrl}
          alt="별"
          style={starsElemetStyle}
          className="absolute bottom-0 left-0 opacity-70 animate-pulse -z-40"
        />
      </div>
    </div>
  );
}
