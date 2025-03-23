"use client";
import React, { useState } from "react";
import SuperAdminLayout from "../SuperAdminLayout";
import DashboardHeader from "../DashboardHeader";
import { RiEqualizerLine } from "react-icons/ri";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import schools from "../../school";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IoClose } from "react-icons/io5";

const ManageSchoolsItem = () => {
  const searchParams = useSearchParams();
  const schoolId = searchParams.get("schoolid");
  const userId = searchParams.get("userid");

  // State to track selected school
  const [selectedSchool, setSelectedSchool] = useState(null);

  const [modalTransform, setModalTransform] = useState("translateX(-100%)");
  const [modalOpacity, setModalOpacity] = useState(0);

  // Function to open modal
  const openModal = (school) => {
    setSelectedSchool(school);
    setTimeout(() => {
      setModalTransform("translateX(0)");
      setModalOpacity(1);
    }, 0);
  };

  // Function to close modal
  const closeModal = () => {
    setModalTransform("translateX(-100%)");
    setModalOpacity(0);
    setTimeout(() => {
      setSelectedSchool(null);
    }, 300);
  };

  return (
    <SuperAdminLayout>
      {/* Overlay and Modal */}
      {selectedSchool && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div
            className="relative pb-5 bg-white  rounded-md shadow-lg min-w-165  z-50 transition-transform  duration-300 ease-in-out"
            style={{ transform: modalTransform, opacity: modalOpacity }}
          >
            <div className="bg-[#01427A] rounded-t-md">
              <p className="  flex items-center justify-between pl-6 pr-6 pt-4 pb-4 text-white font-bold text-xl">
                School Information
                <span onClick={closeModal} className="cursor-pointer">
                  <IoClose />
                </span>
              </p>
            </div>
            <div className="pl-10 pr-10 pt-8 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">School Name:</p>
                <p className="font-bold text-lg">{selectedSchool.SchoolName}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">School Short Name:</p>
                <p className="font-bold text-lg">
                  {selectedSchool.ShortSchName}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Email:</p>
                <p className="font-bold text-lg">{selectedSchool.Email}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Education Level:</p>
                <p className="font-bold text-lg">
                  {selectedSchool.EducationLevel}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">School Type:</p>
                <p className="font-bold text-lg">{selectedSchool.SchoolType}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Phone Number:</p>
                <p className="font-bold text-lg">{selectedSchool.Phone}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Reg Date:</p>
                <p className="font-bold text-lg">{selectedSchool.RegDate}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Address:</p>
                <p className="font-bold text-lg">{selectedSchool.Address}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Status:</p>
                <p
                  className={`font-bold text-lg ${
                    selectedSchool.Status === "Active"
                      ? " text-[#1BB66E] "
                      : " text-[#F94144] "
                  }`}
                >
                  {selectedSchool.Status}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-[#ffffff] pl-4 pt-4 pb-3 pr-4 sticky top-0 z-10 shadow-md flex justify-between items-center">
        <DashboardHeader />
        <Link
          href={`/Super-Admin/Manage-Existing-Schools/Add-New-School?schoolid=${schoolId}&userid=${userId}`}
        >
          <button className="bg-[#07508F] text-white p-2 rounded-lg cursor-pointer">
            Add New School
          </button>
        </Link>
      </div>

      {/* Content */}
      <div className="bg-[#D4D4D4] overflow-auto flex-1 p-4">
        <div className="grid grid-rows-[auto_1fr] gap-3.5">
          {/* Search bar */}
          <div className="bg-[#ffffff] rounded-lg p-4 pr-8 flex justify-end items-center gap-4">
            <div className="flex items-center rounded-4xl border-2 min-w-[320px] border-[#978F8F]">
              <input
                type="text"
                placeholder="Search School"
                className="w-full outline-none bg-transparent text-[#AEAEAE] text-sm p-1 pl-5"
              />
            </div>
            <div>
              <RiEqualizerLine size={20} />
            </div>
          </div>

          {/* Table */}
          <div className="bg-[#ffffff] rounded-lg overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-[#E6EFF5] lg:text-sm sm:text-xs">
                <tr className="border-b-[#978F8F] border-b">
                  <th className="p-3 text-left font-bold text-[#333333]">
                    School Name
                  </th>
                  <th className="p-3 text-left font-bold text-[#333333]">
                    School Type
                  </th>
                  <th className="p-3 text-left font-bold text-[#333333]">
                    Short Sch Name
                  </th>
                  <th className="p-3 text-left font-bold text-[#333333]">
                    Reg. Date
                  </th>
                  <th className="p-3 text-left font-bold text-[#333333]">
                    Status
                  </th>
                  <th className="p-3 text-left font-bold text-[#333333]">
                    Modify
                  </th>
                </tr>
              </thead>
              <tbody>
                {schools.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b-[#978F8F] border-b font-semibold text-xs cursor-pointer "
                    onClick={() => openModal(item)}
                  >
                    <td className="p-3 text-[#333333]">{item.SchoolName}</td>
                    <td className="p-3 text-[#333333]">{item.SchoolType}</td>
                    <td className="p-3 text-[#333333]">{item.ShortSchName}</td>
                    <td className="p-3 text-[#333333]">{item.RegDate}</td>
                    <td className="p-3 text-[#333333]">
                      <span
                        className={`${
                          item.Status === "Active"
                            ? "bg-[#E8F8F0] text-[#1BB66E] px-4"
                            : "bg-[#FEECEC] text-[#F94144] px-4"
                        } rounded-2xl py-1`}
                      >
                        {item.Status}
                      </span>
                    </td>
                    <td className="p-3 text-[#333333]">
                      <div className="flex gap-4">
                        <Link
                          href={`/Super-Admin/Manage-Existing-Schools/Edit-School?schoolid=${schoolId}&userid=${userId}`}
                          onClick={(e) => e.stopPropagation()} // Prevents the row click
                        >
                          <FiEdit3
                            className="text-[#80ADCB] cursor-pointer"
                            size={20}
                          />
                        </Link>
                        <FiTrash2
                          className="text-[#F94144] cursor-pointer"
                          size={20}
                          onClick={(e) => e.stopPropagation()} // Prevents the row click
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default ManageSchoolsItem;
