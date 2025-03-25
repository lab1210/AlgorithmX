"use client";
import React from "react";
import Layout from "../../../Components/Studentlayout";
import { useUser } from "../context/UserProvider";
import { IoWalletOutline } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiBookShelfLine } from "react-icons/ri";
import { BiPieChart } from "react-icons/bi";
import { LiaHeartbeatSolid } from "react-icons/lia";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Studentdashboard = () => {
  const { user, isLoading } = useUser();
  const searchParams = useSearchParams();
  const schoolId = searchParams.get("schoolid");
  const userId = searchParams.get("userid");

  const overview = [
    {
      id: "Fees",
      icon: <IoWalletOutline size={50} />,
      title: "School Fees Payment",
      description: "Pay fees seamlessly",
      Link: "/Student/Fees-Payment",
    },
    {
      id: "result",
      icon: <LuNotepadText size={50} />,
      title: "Result",
      description: "View continous assessment",
      Link: "/Student/Result",
    },
    {
      id: "attendance",
      icon: <BiPieChart size={50} />,
      title: "Attendance",
      description: "View class and event attendance",
      Link: "/Student/AttendanceItem",
    },
    {
      id: "Registration",
      icon: <RiBookShelfLine size={50} />,
      title: "Subject Registration",
      description: "Register subjects for the session",
      Link: "/Student/Subject-Registration/Register",
    },
    {
      id: "timetable",
      icon: <MdOutlineCalendarMonth size={50} />,
      title: "Timetable",
      description: "Be on track with every class",
      Link: "/Student/Timetable",
    },
    {
      id: "health",
      icon: <LiaHeartbeatSolid size={50} />,
      title: "Health Record",
      description: "Document your medical history",
      Link: "/Student/Health-Record/Record",
    },
  ];

  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-full z-[1000]">
        <div className="border-4 border-[rgba(0,64,128,1)] border-t-[rgba(249,65,68,1)] rounded-full w-[50px] h-[50px] animate-spin"></div>
      </div>
    );
  }
  const name = user.username.split(" ")[0];

  // Mapping background colors for cards and their icon containers
  const cardBg = {
    Fees: "bg-[rgba(11,113,181,1)]",
    result: "bg-[rgba(249,65,68,1)]",
    attendance: "bg-[rgba(256,165,0)]",
    Registration: "bg-[rgba(255,46,121,1)]",
    timetable: "bg-[rgba(57,1,129,1)]",
    health: "bg-[rgba(0,128,0,1)]",
  };

  const iconBg = {
    Fees: "bg-[rgba(128,173,203,1)]",
    result: "bg-[rgba(242,100,92,1)]",
    attendance: "bg-[rgba(255,232,112,1)]",
    Registration: "bg-[rgba(254,109,161,1)]",
    timetable: "bg-[rgba(103,57,163,1)]",
    health: "bg-[rgba(107,181,107,1)]",
  };

  return (
    <Layout>
      {/* Grid container replicating the LayoutGrid */}
      <div className="grid w-full h-screen md:[grid-template-columns:150px_minmax(200px,_1fr)_250px] xl:[grid-template-columns:160px_1fr_300px] md:px-[15px] md:pt-[10px] xl:px-[15px] xl:pt-[15px]">
        <div className="flex flex-col gap-[30px]">
          {/* Top Section */}
          <div className="w-[980px] min-h-[180px] bg-[#004080] rounded-[15px] py-[15px] px-[20px] flex justify-between items-center">
            <div className="text-white font-bold">
              <h1 className="text-[2.5rem] mb-[15px]">Hi, {name}</h1>
              <p className="text-base">Welcome to the official Foursquare student portal.</p>
            </div>
            <div className="max-w-[200px]">
              <img src="/female_teacher.svg" alt="Teacher" className="w-full object-contain" />
            </div>
          </div>
          {/* Overview Section */}
          <div className="bg-white font-bold rounded-[15px] pt-[25px] pb-[15px] px-[10px] min-w-[980px]">
            <h2 className="text-[25px]">Overview</h2>
            <div className="grid gap-[20px] grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {overview.map((item, index) => (
                <Link
                  key={index}
                  href={`${item.Link}?schoolid=${schoolId}&userid=${userId}`}
                  className={`${cardBg[item.id]} rounded-[15px] p-[30px] text-white grid items-center grid-cols-[70px_1fr] gap-[15px] mb-[15px] w-[300px] h-[150px]`}
                >
                  <div className={`${iconBg[item.id]} flex w-fit items-center text-white rounded-[10px] pr-0.5 ml-0.5`}>
                    {item.icon}
                  </div>
                  <div className="text-white cursor-pointer group hover:opacity-60 transition">
                    <h4 className="text-[20px] mb-[10px] break-words">{item.title}</h4>
                    <p className="text-[14px] group-hover:scale-90 transition">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Studentdashboard;
