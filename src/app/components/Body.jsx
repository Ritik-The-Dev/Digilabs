import React from "react";
import Header from "./Header";
import Block from "./Block";
import Image from "next/image";
import arrow from "./Images/arrow.png";
import Arr from "./Images/Arr.png";
import image from "./Images/image.png";
import images from "./Images/images.png";
import alarm from "./Images/alarm.png";
import wave from "./Images/wave.png";
import profile1 from "./Images/profile1.png";
import profile from "./Images/profile.png";
import profile2 from "./Images/profile2.png";
import profile3 from "./Images/profile3.png";
import profile4 from "./Images/profile4.png";
import chart from "./Images/chart.png";
import chart0 from "./Images/chart0.png";
import noti from "./Images/noti.png";
import img from "./Images/img.png";
import mic from "./Images/mic.png";
import send from "./Images/send.png";
import call from "./Images/call.png";
import { BsThreeDots } from "react-icons/bs";

function Body() {
  return (
    <div className="flex items-center justify-center h-screen w-screen text-white p-2">
      <div
        className="flex items-center justify-center w-[85vw] h-[90vh] rounded-lg"
        style={{ background: "#151C39" }}
      >
        <div>
          {/* 1st div */}
          <div>
            <Header />
            <br />
            {/* 1st Block */}
            <div className="flex items-center justify-start">
              <div className="flex flex-col items-center mr-5 justify-center">
                <div className="p-2 px-3 rounded-lg bg-[#1B2C4F] items-center justify-center flex">
                  <div className="mr-5">
                    <span className="text-2xl">42</span>
                    <br />
                    <span>Patients Visited</span>
                    <br />
                    <span className=" font-extralight">This Month</span>
                  </div>
                  <div className="bg-[#2C3A58] p-2 rounded-lg border-b-none">
                    <div className="rounded-full  flex items-center justify-center overflow-hidden flex-col">
                      <div className="bg-[#409BEE] opacity-50 h-10 w-full overflow-hidden"></div>

                      <div className="bg-[#409BEE] h-20 w-14 mt-[-12px]    flex items-center justify-center flex-col">
                        <Image src={arrow} width={14} height={14} />
                        <span className="text-1xl font-light">70%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1B2C4F] flex p-2 mt-5 flex-col rounded-lg">
                  <div className="flex items-center justify-center">
                    <div className="bg-[#409BEE] rounded-full p-2 w-8 mr-5">
                      <Image src={Arr} width={20} height={20} />
                    </div>
                    <span>Upcoming Events</span>
                  </div>
                  <div className="flex items-start mt-2 gap-x-3 rounded-lg justify-between">
                    <div className="border-2 rounded-full p-2 w-16">
                      <div className="bg-[#AAEFEB] rounded-full p-2">
                        <Image src={image} width={30} height={30} />
                      </div>
                    </div>
                    <div>
                      <span className="flex items-center justify-center">
                        Aliza Shah
                      </span>
                      <span className="flex items-center justify-center">
                        <Image src={alarm} width={20} height={20} />
                        <span>08:00 09:00am</span>
                      </span>
                      <span className="flex  font-extralight text-1xl items-center justify-center p-1 rounded-lg bg-[#2C3A58]">
                        Visited 7 days ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1B2C4F] p-10 rounded-lg">
                <div className="flex items-center justify-between w-full">
                  <div className="mr-5">
                    <span className="text-2xl">Statistics</span>
                    <br />
                    <span className="text-1xl font-extralight">
                      February 2024
                    </span>
                  </div>
                  <div className="p-2 border-blue-300 border-2 rounded-full">
                    <select
                      className=" bg-transparent outline-none"
                      value={"weekly"}
                    >
                      <option value="weekly">weekly</option>
                    </select>
                  </div>
                </div>
                <div className=" p-2 flex items-center justify-center py-10">
                  <Image src={wave} width={200} height={100} />
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* 2nd div */}
          <div className="flex items-center justify-center">
            {/* 1st block */}
            <div>
              <span className="text-2xl flex items-center justify-start">
                Active Patients
              </span>
              <br />
              <div className="bg-[#1B2C4F] px-5 py-2 rounded-lg">
                <div className="flex items-center mb-5">
                  <span className="text-gray-200 mr-2">08:00am --</span>
                  <Block
                    background={"F5E5E5"}
                    image={profile1}
                    name={"Mark Jaxon"}
                    time={"08:00-09:00am"}
                  />
                  <span className="text-gray-200 mr-2">-----</span>
                </div>
                <div className="flex items-center mb-5">
                  <span className="text-gray-200 mr-2">09:00am -------</span>
                  <Block
                    background={"F5E5E5"}
                    image={profile2}
                    name={"Maira Khan"}
                    time={"09:00-10:00am"}
                  />
                </div>
                <div className="flex items-center mb-5">
                  <span className="text-gray-200 mr-2">10:00am </span>
                  <Block
                    background={"F5E5E5"}
                    image={profile3}
                    name={"Brick Zon"}
                    time={"10:00-11:00am"}
                  />
                  <span className="text-gray-200 mr-2">------</span>
                </div>
                <div className="flex items-center mb-5">
                  <span className="text-gray-200 mr-2">11:00am -------</span>
                  <div>
                    <div className="bg-black opacity-60 p-2 rounded-full">
                      <span className="flex items-center justify-center text-[0.8rem]">
                        Break Time
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-200 mr-2">-----</span>
                </div>
                <div className="flex items-center mb-5">
                  <span className="text-gray-200 mr-2">12:00am -----</span>
                  <Block
                    background={"F5E5E5"}
                    image={profile4}
                    name={"Alexa Max"}
                    time={"12:00-01:00pm"}
                  />
                </div>
              </div>
            </div>
            {/* 2nd block */}
            <div>
              <div>
                <span className="text-2xl flex items-center justify-center ml-5">
                  Upcoming Events
                </span>
                <br />
              </div>
              <div className="ml-5">
                {/* 1st div */}
                <div className="bg-[#1B2C4F] px-5 py-3 rounded-lg">
                  <div className="flex items-center justify-center">
                    <div>
                      <span className="text-1xl text-gray-200">
                        Team Meetings
                      </span>
                      <br />
                      <span className="flex items-center justify-center">
                        <Image src={alarm} width={20} height={20} />
                        <span>05:00 - 06:00</span>
                      </span>
                      <br />
                      <br />
                      <span className="bg-[#2C3A58] rounded-full flex items-center justify-center gap-2 p-2">
                        <Image src={images} width={100} />
                      </span>
                    </div>
                    <div className="ml-10">
                      <div className="flex items-center justify-center p-3 rounded-lg bg-[#409BEE]">
                        <Image src={noti} width={20} height={20} />
                      </div>
                      <br />
                      <div className="text-black font-bold">
                        <div className="bg-[#409BEE] px-2 rounded-lg ">
                          <Image
                            src={Arr}
                            width={30}
                            height={30}
                            className="p-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd div */}
                <div className="bg-[#1B2C4F] p-5 rounded-lg mt-5">
                  <div className="flex items-center justify-center">
                    <div>
                      <span className="text-1xl text-gray-200">
                        Consultation
                      </span>
                      <br />
                      <span className="text-2xl ">82/100</span>
                      <br />
                      <br />
                      <span className="bg-[#2C3A58] rounded-full flex items-center justify-center gap-2 p-2">
                        82% <Image src={arrow} width={20} height={20} />
                      </span>
                    </div>
                    <div className="ml-10">
                      <BsThreeDots className="text-3xl text-black font-bold" />
                      <br />
                      <div className="text-black font-bold">
                        <div
                          className={`bg-${chart0} object-cover`}
                          style={{ width: "50px", height: "50px" }}
                        >
                          <Image src={chart} width={50} height={50} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 bg-[#111729]  p-5 flex flex-col items-center justify-center">
          {/* Profile Section */}
          <div className="p-5 w-[10rem] border-2 rounded-full border-blue-400">
            <div className=" bg-blue-200 rounded-full flex items-center justify-center shadow-md">
              <Image
                src={img}
                width={100}
                className="flex items-center justify-center"
              />
            </div>
          </div>
          <br />
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl">ALIAM COLTER</span>
            <span className="text-1xl font-extralight">Physician</span>
          </div>
          <br />
          <div className="flex items-center gap-5 justify-center p-5 bg-[#1C2A4E] rounded-full">
            <span className="text-1xl">Active Patients</span>
            <span className="bg-[#2C3A58] rounded-full flex items-center justify-center gap-2 p-2">
              <Image src={images} width={100} />
            </span>
          </div>
          <br />
          <div className="flex flex-col items-center gap-5 justify-center p-5 bg-[#1C2A4E] rounded-xl  overflow-hidden">
            <div className="flex items-center justify-center">
              <div className="flex items-center w-[2rem] mr-5 justify-center p-2 rounded-full bg-yellow-200">
                <Image src={profile4} width={20} height={20} className="" />
              </div>
              <span className="mr-5">
                <span>Alexa Max</span>
                <br />
                <span>Active 5 Min Ago</span>
              </span>
              <div className="flex items-center justify-center rounded-full bg-[#2C3A58] p-2">
                <Image src={call} width={20} height={20} className="" />
              </div>
            </div>
            <div className="flex items-center justify-center border-t-2 text-black">
              <br />
              <span className="flex flex-col w-[50%]">
                <span className="flex items-center mt-5 justify-center rounded-full p-2 bg-[#F1F1F1]">
                  Hi Doctor
                </span>
                <span className="flex items-center justify-center mt-2">
                  <div className="flex items-center w-[3rem] mr-5 justify-center p-2 rounded-full bg-yellow-200">
                    <Image src={profile4} width={30} height={30} className="" />
                  </div>
                  <span className="flex rounded-full px-10 bg-[#F1F1F1]">
                    I got knee jerk. What should i do right now ?
                  </span>
                </span>
                <span className="flex items-center justify-center mt-2">
                  <span className="flex rounded-full px-10 bg-[#BDD8F0]">
                    Hi, Alexa.
                  </span>
                  <div className="flex items-center w-[3rem] mr-5 justify-center p-2 rounded-full bg-[#BDD8F0]">
                    <Image src={profile} width={30} height={30} className="" />
                  </div>
                </span>
                <span className="flex items-center justify-center rounded-full p-2 bg-[#BDD8F0] mt-5">
                  This help maintain balance and posture. Dont worry
                </span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-x-10 px-5 py-3 rounded-full bg-[#2C3A58]">
              <Image src={mic} width={20} height={20} />
              <input
                type="text"
                placeholder="Type your text..."
                className="bg-transparent outline-none"
              />
              <div className="bg-[#409BEE] rounded-3xl px-5 py-3">
                <Image src={send} width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
