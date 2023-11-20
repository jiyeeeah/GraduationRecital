import React from "react";
import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";
import MenuButton from "../components/MenuButton";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DownIcon } from "../assets/svgs/chevron-down.svg";
import mainImageUrl from "../assets/images/mainImage.png";
import ProgramUrl from "../assets/images/Program.png";
import DeepDiveUrl from "../assets/images/DeepDive.png";
import IronyUrl from "../assets/images/Irony.png";
import SpectrumUrl from "../assets/images/Spectrum.png";
import VanishUrl from "../assets/images/Vanish.png";
import ChangDukURl from "../assets/images/ChangDuk.png";
import KingLearUrl from "../assets/images/KingLear.png";
import JiyeProfileUrl from "../assets/images/JiyeProfile.png";
import GahyunProfileUrl from "../assets/images/GahyunProfile.png";
import SparkLUrl from "../assets/images/sparkL.png";
import HeartL from "../assets/images/heartL.png";
import HeartR from "../assets/images/heartR.png";

export default function Home() {
  const navigate = useNavigate();

  const goToDeepDive = () => {
    navigate("/deepDive");
  };

  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <div className="overflow-scroll h-real-screen snap snap-y snap-mandatory">
      <div className="relative flex flex-col items-center justify-center flex-shrink-0 w-full h-real-screen snap-start">
        <img src={mainImageUrl} alt="메인사진" />
        <DownIcon className="absolute bottom-0 w-8 h-8 m-5 fill-white" />
      </div>
      <div className="flex flex-col justify-between flex-shrink-0 w-full px-3 py-5 h-real-screen snap-start">
        <div className="relative flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <img src={ProgramUrl} alt="Program" className="px-3 w-36" />
            <p className="absolute text-xl leading-none text-center text-red-300 bottom-3 right-6 font-GodoMaumR">
              곡 제목을 클릭해서
              <br />
              자세한 곡해설과 함께 감상하세요!
            </p>
          </div>
          <div className="w-full h-[0.5px] bg-white mt-3" />
        </div>
        <MenuButton onClick={goToDeepDive}>
          <img src={DeepDiveUrl} alt="Deep Dive" className="self-start h-12 px-3" />
          {/* <p className="text-2xs tracking-[0.2em] text-right text-white font-SCoreDream4">
            가야금 | 강다연 &nbsp;&nbsp; 타악 | 장민
          </p> */}
          <img src={SparkLUrl} alt="spark" className="absolute w-4 -top-3" />
        </MenuButton>
        <MenuButton onClick={goToDeepDive}>
          <img src={IronyUrl} alt="모순" className="self-start h-12 px-3" />
          {/* <p className="text-2xs tracking-[0.2em] text-right text-white font-SCoreDream4">
            거문고 1 | 이루리 &nbsp;&nbsp; 거문고 2 | 박채원
          </p> */}
        </MenuButton>
        <MenuButton onClick={goToDeepDive}>
          <img src={SpectrumUrl} alt="스펙트럼" className="self-start h-12 px-3" />
          {/* <p className="text-2xs tracking-[0.2em] text-right text-white font-SCoreDream4">
            해금 | 이정빈 &nbsp;&nbsp; 가야금 | 권서현 &nbsp;&nbsp; 타악 | 김서정
          </p> */}
          <img src={HeartR} alt="heart" className="absolute top-0 w-4 right-32" />
        </MenuButton>
        <MenuButton onClick={goToDeepDive}>
          <img src={VanishUrl} alt="소멸" className="self-start h-12 px-3" />
          {/* <p className="text-2xs tracking-[0.2em] text-right text-white font-SCoreDream4">
            가야금 | 김은유 &nbsp;&nbsp; 클라리넷 | 정민찬 &nbsp;&nbsp; 아쟁 | 이채은
          </p> */}
          <img src={HeartL} alt="heart" className="absolute w-4 -top-3 -left-1" />
        </MenuButton>
        <MenuButton onClick={goToDeepDive}>
          <img src={ChangDukURl} alt="창덕궁의 지금" className="self-start h-12 px-3" />
          {/* <p className="text-2xs tracking-[0.2em] text-right text-white font-SCoreDream4">
            대금 1 | 박현수 &nbsp;&nbsp; 대금 2 | 이선주 <br /> 거문고 1 | 원미 &nbsp;&nbsp; 거문고
            2 | 주아현
          </p> */}
        </MenuButton>
        <MenuButton url={KingLearUrl} alt="리어왕의 절규" onClick={goToDeepDive}>
          <img src={KingLearUrl} alt="리어왕의 절규" className="self-start px-3 h-14" />
          {/* <div className="flex flex-row gap-2 text-3xs tracking-[0.2em] text-right text-white font-SCoreDream4">
            <p>소리 | 김소원</p>
            <p>해금 | 이하영</p>
            <p>거문고 1 | 원미</p>
            <p>거문고 2 | 주아현</p>
          </div> */}
        </MenuButton>
        <div className="flex flex-col">
          <div className="w-full h-[0.5px] bg-white my-2" />
          <div className="flex flex-row items-center justify-between px-3">
            <img src={JiyeProfileUrl} alt="지예 프로필" className="h-16" />
            <img src={GahyunProfileUrl} alt="가현 프로필" className="h-16" />
          </div>
          <div className="w-full h-[0.5px] bg-white my-2" />
          <div className="flex flex-row justify-between text-white text-2xs font-SCoreDream4">
            <p>*이 발표는 학사 학위를 위한 필수 과정임</p>
            <p>지도교수 | 김승근 조훈</p>
          </div>
        </div>
      </div>
    </div>
  );
}
