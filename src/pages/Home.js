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
import MenuButton from "../components/MenuButton";

export default function Home() {
  const navigate = useNavigate();

  const goToDeepDive = () => {
    navigate("/deepDive");
  };

  return (
    <div className="h-screen overflow-scroll snap snap-y snap-mandatory">
      <div className="flex flex-col items-center justify-between flex-shrink-0 w-full h-screen py-12 snap-start">
        <img src={GraduationRecitalUrl} alt="Graduation Recital" className="p-3" />
        <img src={mainImageUrl} alt="메인사진" />
        <img src={GahyunAndJiyeUrl} alt="가현과 지예" className="p-3" />
        <div className="flex flex-row items-center justify-center text-xs text-white font-UhBeeSeHyunBold">
          <p className="mr-4">일시 : 11월 30일 오후 8시 30분</p>
          <p>장소 : 서울대학교 49동 예술관 콘서트홀</p>
        </div>
        <DownIcon className="w-8 h-8 m-5 fill-white" />
      </div>
      <div className="flex flex-col justify-between flex-shrink-0 w-full h-screen px-3 py-16 snap-start">
        <div className="relative flex flex-col">
          <img src={ProgramUrl} alt="Program" className="px-3 w-36" />
          <p className="absolute text-xl leading-none text-center text-red-300 right-6 bottom-10 font-GodoMaumR">
            곡 제목을 클릭해서
            <br />
            자세한 곡해설과 함께 감상하세요!
          </p>
          <div className="w-full h-[0.5px] bg-white my-5" />
        </div>
        <MenuButton url={DeepDiveUrl} alt="Deep Dive" onClick={goToDeepDive} />
        <MenuButton url={IronyUrl} alt="모순" onClick={goToDeepDive} />
        <MenuButton url={SpectrumUrl} alt="스펙트럼" onClick={goToDeepDive} />
        <MenuButton url={VanishUrl} alt="소멸" onClick={goToDeepDive} />
        <MenuButton url={ChangDukURl} alt="창덕궁의 지금" onClick={goToDeepDive} />
        <MenuButton url={KingLearUrl} alt="리어왕의 절규" onClick={goToDeepDive} />
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
