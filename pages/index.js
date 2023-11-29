"use client";

import React from "react";
import { useEffect } from "react";
import setScreenHeight from "../utils/setScreenHeight";
import MenuButton from "/components/MenuButton";
import DownIcon from "/public/svgs/chevron-down.svg";
import mainImageUrl from "/public/images/mainImage.png";
import Image from "next/image";
// import ProgramUrl from "../assets/images/Program.png";
// import DeepDiveUrl from "../assets/images/DeepDive.png";
// import IronyUrl from "../assets/images/Irony.png";
// import SpectrumUrl from "../assets/images/Spectrum.png";
// import VanishUrl from "../assets/images/Vanish.png";
// import ChangDukURl from "../assets/images/ChangDuk.png";
// import KingLearUrl from "../assets/images/KingLear.png";
// import JiyeProfileUrl from "../assets/images/JiyeProfile.png";
// import GahyunProfileUrl from "../assets/images/GahyunProfile.png";
// import SparkLUrl from "../assets/images/sparkL.png";
// import HeartL from "../assets/images/heartL.png";
// import HeartR from "../assets/images/heartR.png";

export default function Home() {
  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <div className="overflow-scroll bg-black h-real-screen snap snap-y snap-mandatory overscroll-none">
      <div className="relative flex flex-col items-center justify-center flex-shrink-0 w-full h-real-screen snap-start">
        {/* <img src="/images/mainImage.png" alt="메인사진" /> */}
        <div className="w-full h-real-screen">
          <Image
            src="/images/mainImage.png"
            alt="메인 사진"
            fill
            className="object-contain w-full"
          />
        </div>
        <DownIcon className="absolute bottom-0 w-8 h-8 m-5 fill-white" />
      </div>
      <div className="flex flex-col justify-between flex-shrink-0 w-full px-3 py-5 h-real-screen snap-start">
        <div className="relative flex flex-col">
          <div className="flex flex-row items-center justify-between outline-none">
            {/* <img src={ProgramUrl} alt="Program" className="px-3 w-36" /> */}
            {/* <Image src="/public/images/Program.png" alt="Program" className="px-3 w-36" /> */}
            <p className="absolute text-xl leading-none text-center text-red-300 bottom-3 right-6 font-GodoMaumR">
              곡 제목을 클릭해서
              <br />
              자세한 곡해설과 함께 감상하세요!
            </p>
          </div>
          <div className="w-full h-[0.5px] bg-white mt-3" />
        </div>
        {/* <MenuButton src="/public/images/DeepDive.png" alt="Deep Dive" link="/DeepDive"> */}
        {/* <img src="/public/images/sparkL.png" alt="spark" className="absolute w-4 -top-3" /> */}
        {/* <Image src="/public/images/sparkL.png" alt="spark" className="absolute w-4 -top-3" /> */}
        {/* </MenuButton> */}
        {/* <MenuButton src="/public/images/Irony.png" alt="모순" link="/Irony" /> */}
        {/* <MenuButton src="/public/images/Spectrum.png" alt="스펙트럼" link="/Spectrum"> */}
        {/* <img
            src="/public/images/heartR.png"
            alt="heart"
            className="absolute w-4 -top-1 right-32"
          /> */}
        {/* <Image
            src="/public/images/heartR.png"
            alt="heart"
            className="absolute w-4 -top-1 right-32"
          /> */}
        {/* </MenuButton> */}
        {/* <MenuButton src="/public/images/Vanish.png" alt="소멸" link="/Vanish"> */}
        {/* <img src={HeartL} alt="heart" className="absolute w-4 -top-5 -left-1" /> */}
        {/* <Image
            src="/public/images/heartL.png"
            alt="heart"
            className="absolute w-4 -top-5 -left-1"
          /> */}
        {/* </MenuButton> */}
        {/* <MenuButton src="/public/images/ChangDuk.png" alt="창덕궁의 지금" link="/ChangDuk" /> */}
        {/* <MenuButton src="/public/images/KingLear.png" alt="리어왕의 절규" link="/KingLear" /> */}
        <div className="flex flex-col">
          <div className="w-full h-[0.5px] bg-white my-2" />
          <div className="flex flex-row items-center justify-between px-3">
            {/* <img src={JiyeProfileUrl} alt="지예 프로필" className="h-16" /> */}
            {/* <Image src="/public/images/JiyeProfile.png" alt="지예 프로필" className="h-16" /> */}
            {/* <img src={GahyunProfileUrl} alt="가현 프로필" className="h-16" /> */}
            {/* <Image src="/public/images/GahyunProfile.png" alt="가현 프로필" className="h-16" /> */}
          </div>
          <div className="w-full h-[0.5px] bg-white my-2" />
          <div className="flex flex-row justify-between text-white text-2xs font-SCoreDream4">
            <p>*이 발표는 학사 학위를 위한 필수 과정임</p>
            <p>사회 | 임유빈 &nbsp;&nbsp;지도교수 | 김승근 조훈</p>
          </div>
        </div>
      </div>
    </div>
  );
}
