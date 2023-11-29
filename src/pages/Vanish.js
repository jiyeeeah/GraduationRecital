import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";
import VanishBGTempUrl from "../assets/images/background/VanishBGTemp.png";

export default function Vanish() {
  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <div className="absolute top-0 flex flex-col items-center w-full gap-8 p-6 overflow-scroll text-white bg-black bg-opacity-20 min-h-real-screen">
      <div className="flex flex-col w-full gap-3 font-Dokrip">
        <p className="self-center text-6xl">소멸</p>
        <p className="self-end text-lg">작곡 문가현</p>
      </div>
      <div className="flex flex-col gap-5 text-2xl font-bold text-center font-Daughter">
        <p>
          “초가 가는 곳마다 빛이 있었다. 흑국 사람들은 초를 성스럽게 예우했으나 자신이 초가 되려고는
          하지 않았다. 왜냐하면 초는 빛을 뿜었으나 자비심 때문인지 눈물을 흘리며 늘 우는 것 같았고,
          헌신적으로 녹아 일그러지는 모습이 두려움을 불러일으켰기 때문이다. 그리하여 초가 죽은
          뒤에도 초를 흉내내는 사람 하나 없었다.(후략)”
          <br />
          -최승호의 우화집, 『눈사람 자살 사건』 중 《흑국의 슬픔》
        </p>
      </div>
      <div className="flex flex-col gap-5 text-2xl text-center mb-60 font-Daughter">
        <p>
          최승호의 ‘흑국의 슬픔’은 저에게 존재의 의미와 소멸에 대해 생각하게 해주었던 글입니다. 초의
          궁극적인 쓸모와 덧없는 존재의 이유, 결국엔 소멸되어버린 초와 그것이 초래한 결과 등. 더
          나아가서는 세상의 사라지는 모든 것들에 대해서도 다시금 바라볼 수 있는 계기가 되었습니다.
          세상의 모든 것들은 언젠가는 사라지고, 그건 인간이란 존재도 마찬가지니까요!
        </p>
        <p>
          이 곡을 들으시며 제가 표현하고자 했던, ‘결국은 사라질 세상의 모든 것들에 대한 존재의
          의미와 소멸’을 함께 느껴보는 시간이 되셨으면 합니다!
        </p>
      </div>
      <img src={VanishBGTempUrl} alt="소멸" className="absolute bottom-0 left-0 -z-50" />
    </div>
  );
}
