import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";

export default function KingLear() {
  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);
  return (
    <div className="overflow-scroll h-real-screen snap snap-y snap-mandatory">
      <div className="flex flex-col flex-shrink-0 gap-8 p-5 pt-10 h-real-screen snap-start bg-KingLear font-Jeongnim">
        <div className="flex flex-col gap-3 justify-self-start">
          <p className="self-center text-3xl text-center">리어왕의 절규</p>
          <p className="self-end text-base">작곡 문가현</p>
        </div>
        <div className="flex flex-col gap-3 text-lg indent-3 justify-self-center">
          <p>
            “리어왕의 절규”는 윌리엄 셰익스피어의 4대 비극 중 하나인 리어왕의 한 부분을 판소리 음
            악으로 재탄생시킨 곡입니다. 제목에서 드러나듯이 리어왕이 사랑하는 딸들에게 버림받고 외
            치는 많은 감정을 담은 곡이에요. 셰익스피어의 비극들이 공통적으로 그렇듯, 리어왕 또한 각
            인물들로 특정한 성격적인 결함을 가지고 있는 다양한 인간의 군상을 경험할 수 있는데요. 저
            는 그중에서 주인공인 리어왕이란 인물의 시선으로, 특정 부분에서의 그의 감정에 초점을 맞
            추어보았습니다.
          </p>
          <p>
            세상에는 다양한 인간의 군상이 존재하는 것처럼 감정에도 수많은 군상이 존재합니다. 반대로
            그러한 많은 감정들이 모여 다양한 사람들의 모습이 탄생하는 것이기도 하죠. 우리는 한가지의
            사건에 한 가지의 감정만을 느낄 수 없어요. 단 하나의 사건이라도 인간은 그것에서 여러
            감정이 복합된 형태로 상황을 바라봅니다.
          </p>
          <p>(계속↓)</p>
        </div>
      </div>
      <div className="flex flex-col justify-center flex-shrink-0 gap-8 p-5 text-lg h-real-screen snap-start bg-KingLear font-Jeongnim indent-3">
        <p>
          다만, 그 사이에서 모두 동일한 강도의 감정 을 느낄 수는 없기에, 어떠한 감정이 우선적으로
          강하게 느껴지면 우리는 “그 감정”만을 느끼 고 있다고 통합적으로 축약하여 인식할 뿐이죠.
          이러한 관점에서, 리어왕을 읽으며 늘 고민해 왔던 일종의 사건에 대한 감정의 혼합이라는 것에
          대한 파동이 거세게 일었던 것 같아요.
        </p>
        <p>
          ‘어리석은 아버지인 리어왕이 결국 딸들에게 배신당했다’라는 사건의 큰 틀 안에서 그의 감 정은
          매우 다양하고 꽤 분명하게 나타났거든요. 딸에 대한 분노, 서러움, 증오, 실망, 원망, 자 기
          연민부터, 그럼에도 불구하고 곳곳에 드러나는 애증이라 일컬어지는 애정과 증오 사이의
          말들까지. 저는 이러한 리어왕의 감정에 초점을 맞추어 가사를 직접 정리하는 과정을 밟으며
          그의 온 감정들이 집약되어 나타나는 현상을 더욱 체감할 수 있었고 전반적인 곡 작업의 과정 을
          통해 리어왕의 심정에 더욱 이입될 수 있었어요. 진양-엇모리, 중중모리-자진모리 순의 장
          단으로 진행되는 이 곡을 여러분들도 가사와 함께 들으며, 리어왕의 그러한 복합적인 심정을
          다각적으로 경험해볼 수 있는 시간이 되셨으면 합니다!
        </p>
        <p className="text-center">↓ 가사보기 ↓</p>
      </div>
      <div className="flex flex-col justify-center flex-shrink-0 gap-3 p-6 text-2xl text-black h-real-screen snap-start font-GrandpaSharing indent-3 bg-paper">
        <p className="mb-10 text-4xl font-bold text-center">리어왕의 편지</p>
        <p>
          사랑하는 딸에게 모든 것을 물려준 리어왕, 그러나 첫째 딸 고네릴과 둘째 딸 리건에 모든 것을
          빼앗기고 만다. 리어왕. 두 딸에게 소리친다. 그리고 하늘에 원망을 한다.
        </p>
        <p>
          얘야. 나를. 미치게 만들지 마라. 너를 더 이상 괴롭히지 않겠다. 잘 있거라. 두 번 다시 만나지
          말자. 너는 나의 살이요. 핏줄이요. 딸이요. 너는 내 피가 썩어 엉켜서 생긴 종기요.
          부스럼이라.
        </p>
        <p>
          하지만 나는 너를 책망하지 않겠다. 언제고 간에 너도 분명 치욕스런 일을 당할 터이니 마음을
          고쳐라. 착한 사람이 되도록 애써라. 나는 참겠다.
        </p>
        <p className="text-neutral-700">(계속↓)</p>
      </div>
      <div className="flex flex-col justify-center flex-shrink-0 gap-3 p-6 text-2xl text-black h-real-screen snap-start font-GrandpaSharing indent-3 bg-paper">
        <p>
          하늘이시여. 인내를 주소. 제겐 인내가 필요합니다. 제신들이여. 여기 서 있는 불쌍한 늙은일
          보십시오. 가슴에 슬픔이 더 없이 맺히고 나이가 찰 대로 차서 어느 모로 보나 불행한 나요.
          딸들의 마음을 충동질하여 아버질 배반케 만든 것이 당신의 뜻이라면 이건 나를 우롱하는
          짓이오. 이 일을 가만히 보고도 참도록 내버려 두지 마소서. 분노가 솟도록 해주소서. 분노가
          샘솟게 해주소서.
        </p>
        <p>
          아니 이 짐승 같은 년들아. 너희 둘에게 복수를 하겠다. 반드시 복수를 하고 말 테야. 어떻게
          복수를 할까 알 수가 없구나. 너희들이 이 세상의 위험인물임을 모두 알리겠다. 나는 울지 않을
          것이다. 아니 나는 절대로 울지 않겠다. 심장이 심장이 천 갈래 만 갈래로, 심장이 심장이 천
          갈래 만 갈래로 찢겨지기 전에는 울지 않으련, 울지 않으련다.
        </p>
        <p>
          그렇게 밤은 다가오고 모진 바람이 일고 있는데, 두 딸은 결국 아버지인 리어를 내쫓는 데에
          성공하였다 하더라.
        </p>
      </div>
    </div>
  );
}
