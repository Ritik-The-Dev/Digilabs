import React from "react";
import Image from "next/image";
import Flame from "./Images/Flame.png";
import Home from "./Images/Home.png";
import back from "./Images/back.png";
import chat from "./Images/chat.png";
import document from "./Images/document.png";
import pie from "./Images/pie.png";
import profile from "./Images/profile.png";
import setting from "./Images/setting.png";
import Body from "./Body";

function Main() {
  return (
    <div className=" overflow-hidden w-screen h-screen flex items-start justify-start" style={{ background: "#111729" }}>
      <div className="flex flex-col items-center justify-evenly h-full px-10">
        <div>
          <Image src={Flame} width={30} height={30} className="cursor-pointer"/>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-10 h-[60%]">
          <div className="w-10 hover:bg-[#2C3A58] flex items-center justify-center h-10 rounded-lg cursor-pointer">
          <Image src={Home} width={20} height={20} className=""/>
          </div>
          <div className="w-10 hover:bg-[#2C3A58] flex items-center justify-center h-10 rounded-lg cursor-pointer"><Image src={document} width={20} height={20} /></div>
          <div className="w-10 hover:bg-[#2C3A58] flex items-center justify-center h-10 rounded-lg cursor-pointer"><Image src={pie} width={20} height={20} /></div>
          <div className="w-10 hover:bg-[#2C3A58] flex items-center justify-center h-10 rounded-lg cursor-pointer"><Image src={chat} width={20} height={20} /></div>
          <div className="w-10 hover:bg-[#2C3A58] flex items-center justify-center h-10 rounded-lg cursor-pointer"><Image src={setting} width={20} height={20} /></div>
        </div>
        <div className="flex flex-col items-center justify-between gap-y-10">
          <Image
            src={profile}
            width={20}
            height={20}
            className="bg-blue-100 w-10 rounded-lg cursor-pointer border-[50%]"
          />
                    <div className="w-10 hover:bg-[#2C3A58] flex items-center justify-center h-10 rounded-lg cursor-pointer">
          <Image src={back} width={20} height={20} />
                    </div>
        </div>
      </div>
    <Body/>
    </div>
  );
}

export default Main;
