import React from "react";
import Image from "next/image";
import image from "./Images/image.png";
import alarm from "./Images/alarm.png";

function Block({ background,image, name, time }) {
  return (
    <div className={`text-black flex bg-[#${background}] p-2 w-[250px] h-[45px] rounded-full`}>
      <div className={`flex items-center justify-center bg-[#AAEFEB] mr-5 w-10 rounded-full p-2`}>
        <Image src={image} width={30} height={30} />
      </div>
      <span className="flex flex-col items-center justify-center">
      <span className="flex items-center justify-center">{name}</span>
      <span className="flex items-center justify-center">
        <Image src={alarm} width={20} height={20} />
        <span>{time}</span>
      </span>
      </span>
    </div>
  );
}

export default Block;
