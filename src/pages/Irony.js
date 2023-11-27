import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";
import IronyBGTempUrl from "../assets/images/background/IronyBGTemp.png";

export default function Irony() {
  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <div className="text-[#355692] absolute top-0 min-h-real-screen flex flex-col gap-8 pl-10 pr-3 pt-5 font-BKK ">
      <div className="flex flex-col w-full gap-3">
        <p className="self-center text-4xl">모순</p>
        <p className="self-end text-sm">작곡 문가현</p>
      </div>
      <div className="text-sm">
        <p>
          “우리는 모순을 안고 있지만, 모순을 거부해야 한다.” <br />
          -알베르 카뮈, 《여름》
        </p>
      </div>
      <div className="flex flex-col gap-3 text-sm mb-28">
        <p>
          이 곡은 프랑스 작가 ‘알베르 카뮈’의 {"<"}여름{">"}이라는 글에서 읽은 한 문장에 큰 영감을
          받아 작곡되었습니다. 책의 많은 부분이 좋은 글이었지만, 유독 저에게는 “우리는 모순을 안고
          있 지만, 모순을 거부해야 한다.”라는 문장이 눈에 띄었습니다. 이 문장 하나로도 충분히 이
          책을 읽을 가치가 있었다는 생각이 들 정도였으니까요.
        </p>
        <p>
          세상은 모순 덩어리입니다. 모든 상황, 모든 관계, 모든 경우에서 작은 형태라도 ‘모순’이란
          것은 반드시 존재한다고 생각해요. 얽히고 얽힌 모순의 세상에서, 모순을 받아들이면서 배척
          해야 한다는 이 문장 자체도 사실상 모순의 문장인 것이니까요. 그럼에도 불구하고 이 세상은
          모순적이기에 흥미로운 것이라 생각합니다. 인생에서의 모순을 하나하나 받아들이면서 스스로 의
          관점으로 풀어나가는 것도 인간의 궁극적인 숙제 중 하나라고 할 수 있겠네요!
        </p>
        <p>
          저의 ‘모순’은, 제가 삶에 있어 끝없는 모순의 굴레와 그럼에도 그 굴레에서 벗어나야 하는
          상황을 인식하면서 느꼈던 감정을 가감 없이 그대로 술술 써 내려가며 나타낸 곡입니다.
        </p>
        <p>여러분들은 현재 어떠한 모순을 경험하고 계신가요?</p>
      </div>
      <img src={IronyBGTempUrl} alt="모순 배경" className="absolute bottom-0 left-0 -z-50" />
    </div>
  );
}
