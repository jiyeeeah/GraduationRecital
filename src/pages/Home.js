import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DownIcon } from "../assets/svgs/chevron-down.svg";
import GraduationRecitalUrl from "../assets/images/GraduationRecital.png";
import mainImageUrl from "../assets/images/mainImage.png";
import GahyunAndJiyeUrl from "../assets/images/GahyunAndJiye.png";
import ProgramUrl from "../assets/images/Program.png";
import DeepDiveUrl from "../assets/images/DeepDive.png";
import IronyUrl from "../assets/images/Irony.png";
import SpectrumUrl from "../assets/images/Spectrum.png";
import VanishUrl from "../assets/images/Vanish.png";
import ChangDukURl from "../assets/images/ChangDuk.png";
import KingLearUrl from "../assets/images/KingLear.png";
import JiyeProfileUrl from "../assets/images/JiyeProfile.png";
import GahyunProfileUrl from "../assets/images/GahyunProfile.png";

export default function Home() {
  const navigate = useNavigate();

  const goToDeepDive = () => {
    navigate("/deepDive");
  };

  return (
    <div className="h-screen overflow-scroll snap snap-y snap-mandatory">
      <div className="flex flex-col items-center justify-between flex-shrink-0 w-full h-screen snap-start">
        <img src={GraduationRecitalUrl} alt="Graduation Recital" className="p-3 " />
        <img src={mainImageUrl} alt="메인사진" />
        <img src={GahyunAndJiyeUrl} alt="가현과 지예" className="p-3" />
        <div className="flex flex-row items-center justify-center text-xs text-white font-UhBeeSeHyunBold">
          <p className="mr-4">일시 : 11월 30일 오후 8시 30분</p>
          <p>장소 : 서울대학교 49동 예술관 콘서트홀</p>
        </div>
        <DownIcon className="w-8 h-8 m-5 fill-white" />
      </div>
      <div className="flex flex-col justify-between flex-shrink-0 w-full h-screen px-3 py-10 snap-start">
        <div className="flex flex-col">
          <img src={ProgramUrl} alt="Program" className="px-3 w-36" />
          <div className="w-full h-[0.5px] bg-white my-5" />
        </div>
        <button onClick={goToDeepDive}>
          <img src={DeepDiveUrl} alt="Deep Dive" className="p-3" />
        </button>
        <button onClick={goToDeepDive}>
          <img src={IronyUrl} alt="모순" className="p-3" />
        </button>
        <button onClick={goToDeepDive}>
          <img src={SpectrumUrl} alt="스펙트럼" className="p-3" />
        </button>
        <button onClick={goToDeepDive}>
          <img src={VanishUrl} alt="소멸" className="p-3" />
        </button>
        <button onClick={goToDeepDive}>
          <img src={ChangDukURl} alt="창덕궁의 지금" className="p-3" />
        </button>
        <button onClick={goToDeepDive}>
          <img src={KingLearUrl} alt="리어왕의 절규" className="p-3" />
        </button>
        <div className="flex flex-col">
          <div className="w-full h-[0.5px] bg-white my-5" />
          <div className="flex flex-row items-center justify-between px-3">
            <img src={JiyeProfileUrl} alt="지예 프로필" className="w-36" />
            <img src={GahyunProfileUrl} alt="가현 프로필" className="w-36" />
          </div>
          <div className="w-full h-[0.5px] bg-white my-5" />
          <div className="flex flex-row justify-between text-white text-2xs font-SCoreDream4">
            <p>*이 발표는 학사 학위를 위한 필수 과정임</p>
            <p>지도교수 | 김승근 조훈</p>
          </div>
        </div>
      </div>
    </div>
  );
}
