import React from "react";
import MenuButton from "../components/MenuButton";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToDeepDive = () => {
    navigate("/deepDive");
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex flex-col justify-center items-center bg-[#0D0901] text-white my-10">
        <p>문가현 이지예</p>
        <p>Graduation Recital</p>
      </div>
      <img src="images/IMG_2961.jpg" alt="지예사진" />
      <img src="images/IMG_2962.jpg" alt="가현사진" />
      <div className="flex flex-col justify-center bg-white">
        <MenuButton bgColor="bg-red-400" onClick={goToDeepDive}>
          Deep Dive
        </MenuButton>
        <MenuButton bgColor="bg-blue-400">모순</MenuButton>
        <MenuButton bgColor="bg-yellow-400">스펙트럼</MenuButton>
        <MenuButton bgColor="bg-neutral-400">소멸</MenuButton>
        <MenuButton bgColor="bg-indigo-400">창덕궁의 지금</MenuButton>
        <MenuButton bgColor="bg-rose-400">리어왕</MenuButton>
      </div>
    </div>
  );
}
