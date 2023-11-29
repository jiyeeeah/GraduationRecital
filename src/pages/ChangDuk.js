import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";
import ChangDukBGTempUrl from "../assets/images/background/ChangDukBGTemp.png";
import { Link } from "react-router-dom";

export default function ChangDuk() {
  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);
  return (
    <div className="absolute top-0 flex flex-col gap-8 p-6 pt-12 text-white bg-[#545454] bg-opacity-60 h-real-screen font-GangWonModu">
      <div className="flex flex-col gap-3">
        <p className="self-center text-5xl">창덕궁의 지금</p>
        <p className="self-end text-base">작곡 이지예</p>
      </div>
      <div className="flex flex-col gap-3 text-lg text-center">
        <p>
          학교의 과제 중 일환으로 창덕궁에 다녀오게 되었습니다. 기대 없이 가서 그랬는지 정말
          인상깊은 경험이었습니다.
        </p>
        <p>
          창덕궁은 사실 조선의 정궁인 경복궁보다 오랫동안 쓰인 고궁입니다. 조선 말기 복원된 경복궁에
          비해, 창덕궁은 조선 후기 당시의 모습이 거의 그대로 남아있습니다. 사실상 조선왕조 사상 가장
          오랜 기간 왕의 주 거처로 쓰인 궁궐인 창덕궁은 근대적인 모습과 옛스러운 것이 다양하게
          이루어져있어 그 당시 모습을 더욱 상상할 수 있게 해줍니다.
        </p>
        <p>
          아래의 썸네일(사진)을 눌러 영상(소리 없음)을 보면서 음악을 감상하시면 창덕궁의 정취를 더욱
          느낄 수 있을 것입니다. 당연히 영상 없이 온전히 음악만 감상하셔도 좋습니다.
        </p>
      </div>
      <Link
        to={"https://youtu.be/f2fcNPZVMyI"}
        target="_blank"
        className="p-4 text-xl text-center text-green-900 underline bg-yellow-300 rounded-lg bg-opacity-80"
      >
        {"<"}창덕궁의 지금 영상보러 가기{">"}
      </Link>
      <img
        src={ChangDukBGTempUrl}
        alt="창덕궁의 지금 배경"
        className="absolute top-0 left-0 w-full h-real-screen -z-50"
      />
    </div>
  );
}
