import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";

export default function Modal({ setShowModal }) {
  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);
  return (
    <div className="absolute top-0 w-full overflow-scroll h-real-screen bg-paper">
      <div className="relative flex flex-col gap-3 p-5">
        <button onClick={() => setShowModal(false)} className="self-end text-xl">
          x
        </button>
        <div className="flex flex-col gap-3 text-xl text-black font-GrandpaSharing indent-3">
          <p>
            사랑하는 딸에게 모든 것을 물려준 리어왕, 그러나 첫째 딸 고네릴과 둘째 딸 리건에 모든
            것을 빼앗기고 만다. 리어왕. 두 딸에게 소리친다. 그리고 하늘에 원망을 한다.
          </p>
          <p>
            얘야. 나를. 미치게 만들지 마라. 너를 더 이상 괴롭히지 않겠다. 잘 있거라. 두 번 다시
            만나지 말자. 너는 나의 살이요. 핏줄이요. 딸이요. 너는 내 피가 썩어 엉켜서 생긴 종기요.
            부스럼이라.
          </p>
          <p>
            하지만 나는 너를 책망하지 않겠다. 언제고 간에 너도 분명 치욕스런 일을 당할 터이니 마음을
            고쳐라. 착한 사람이 되도록 애써라. 나는 참겠다.
          </p>
          <p>
            하늘이시여. 인내를 주소. 제겐 인내가 필요합니다. 제신들이여. 여기 서 있는 불쌍한 늙은일
            보십시오. 가슴에 슬픔이 더 없이 맺히고 나이가 찰 대로 차서 어느 모로 보나 불행한 나요.
            딸들의 마음을 충동질하여 아버질 배반케 만든 것이 당신의 뜻이라면 이건 나를 우롱하는
            짓이오. 이 일을 가만히 보고도 참도록 내버려 두지 마소서. 분노가 솟도록 해주소서. 분노가
            샘솟게 해주소서.
          </p>
          <p>
            아니 이 짐승 같은 년들아. 너희 둘에게 복수를 하겠다. 반드시 복수를 하고 말 테야. 어떻게
            복수를 할까 알 수가 없구나. 너희들이 이 세상의 위험인물임을 모두 알리겠다. 나는 울지
            않을 것이다. 아니 나는 절대로 울지 않겠다. 심장이 심장이 천 갈래 만 갈래로, 심장이
            심장이 천 갈래 만 갈래로 찢겨지기 전에는 울지 않으련, 울지 않으련다.
          </p>
          <p>
            그렇게 밤은 다가오고 모진 바람이 일고 있는데, 두 딸은 결국 아버지인 리어를 내쫓는 데에
            성공하였다 하더라.
          </p>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="self-start text-2xl font-GrandpaSharing"
        >
          ← 곡 해설로 돌아가기
        </button>
      </div>
    </div>
  );
}
