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
  const [selectedschoolDetail, setselectedschoolDetail] = useState(null);
  const [selectedSchoolDelete, setSelectedSchoolDelete] = useState(null);

  const [modalTransform, setModalTransform] = useState("translateX(-100%)");
  const [modalOpacity, setModalOpacity] = useState(0);

  // Function to open modal
  const openDetailModal = (school) => {
    setselectedschoolDetail(school);
    setTimeout(() => {
      setModalTransform("translateX(0)");
      setModalOpacity(1);
    }, 0);
  };

  // Function to close modal
  const closeDetailModal = () => {
    setModalTransform("translateX(-100%)");
    setModalOpacity(0);
    setTimeout(() => {
      setselectedschoolDetail(null);
    }, 300);
  };

  const openDeleteModal = (school) => {
    setSelectedSchoolDelete(school);
    setTimeout(() => {
      setModalTransform("translateX(0)");
      setModalOpacity(1);
    }, 0);
  };

  // Function to close modal
  const closeDeleteModal = () => {
    setModalTransform("translateX(-100%)");
    setModalOpacity(0);
    setTimeout(() => {
      setSelectedSchoolDelete(null);
    }, 300);
  };

  return (
    <SuperAdminLayout>
      {/* Delete */}
      {/* Overlay and Modal */}
      {selectedSchoolDelete && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/65"
            onClick={closeDeleteModal}
          ></div>

          {/* Modal Content */}
          <div
            className="relative  bg-white  rounded-xl shadow-lg min-w-75  z-50 transition-transform pt-10 pb-10  duration-600 ease-in-out"
            style={{ transform: modalTransform, opacity: modalOpacity }}
          >
            <p className="font-bold  text-center text-lg">Delete School</p>
            <div className="text-center pt-3">
              <p className="text-base text-[#858383]">
                Are you sure want to delete the
              </p>
              <p className="text-base text-[#858383]">selected School?</p>
            </div>
            <div className="font-bold text-md items-center justify-center pt-3 flex gap-5 ">
              <button className="cursor-pointer text-white bg-[#F94144] rounded-md pl-4 pr-4">
                Yes, Delete
              </button>
              <button
                onClick={closeDeleteModal}
                className="cursor-pointer text-[#333333] bg-[#EBEBEB] rounded-md pl-4 pr-4"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details */}
      {/* Overlay and Modal */}
      {selectedschoolDetail && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/65"
            onClick={closeDetailModal}
          ></div>

          {/* Modal Content */}
          <div
            className="relative pb-5 bg-white  rounded-md shadow-lg min-w-165  z-50 transition-transform  duration-600 ease-in-out"
            style={{ transform: modalTransform, opacity: modalOpacity }}
          >
            <div className="bg-[#01427A] rounded-t-md">
              <p className="  flex items-center justify-between pl-6 pr-6 pt-4 pb-4 text-white font-bold text-xl">
                School Information
                <span onClick={closeDetailModal} className="cursor-pointer">
                  <IoClose />
                </span>
              </p>
            </div>
            <div className="pl-10 pr-10 pt-8 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">School Name:</p>
                <p className="font-bold text-lg">
                  {selectedschoolDetail.SchoolName}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">School Short Name:</p>
                <p className="font-bold text-lg">
                  {selectedschoolDetail.ShortSchName}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Email:</p>
                <p className="font-bold text-lg">
                  {selectedschoolDetail.Email}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Education Level:</p>
                <p className="font-bold text-lg">
                  {selectedschoolDetail.EducationLevel}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">School Type:</p>
                <p className="font-bold text-lg">
                  {selectedschoolDetail.SchoolType}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Phone Number:</p>
                <p className="font-bold text-lg">
                  {selectedschoolDetail.Phone}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Reg Date:</p>
                <p className="font-bold text-lg">
                  {selectedschoolDetail.RegDate}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Address:</p>
                <p className="font-bold text-lg">
                  {selectedschoolDetail.Address}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Status:</p>
                <p
                  className={`font-bold text-lg ${
                    selectedschoolDetail.Status === "Active"
                      ? " text-[#1BB66E] "
                      : " text-[#F94144] "
                  }`}
                >
                  {selectedschoolDetail.Status}
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
                <tr className="border-b-[#ABABAB] border-b">
                  <th className="pt-3 pb-3 pl-12  text-left font-bold text-[#333333]">
                    School Name
                  </th>
                  <th className="pt-3 pb-3  text-left font-bold text-[#333333]">
                    School Type
                  </th>
                  <th className="pt-3 pb-3  text-left font-bold text-[#333333]">
                    Short Sch Name
                  </th>
                  <th className="pt-3 pb-3  text-left font-bold text-[#333333]">
                    Reg. Date
                  </th>
                  <th className="pt-3 pb-3  text-left font-bold text-[#333333]">
                    Status
                  </th>
                  <th className="pt-3 pb-3   text-left font-bold text-[#333333]">
                    Modify
                  </th>
                </tr>
              </thead>
              <tbody>
                {schools.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b-[#ABABAB] border-b font-semibold text-xs cursor-pointer  "
                    onClick={() => openDetailModal(item)}
                  >
                    <td className="pt-2 pb-2 pl-12 text-[#333333]">
                      {item.SchoolName}
                    </td>
                    <td className="pt-2 pb-2 text-[#333333]">
                      {item.SchoolType}
                    </td>
                    <td className="pt-2 pb-2 text-[#333333]">
                      {item.ShortSchName}
                    </td>
                    <td className="pt-2 pb-2 text-[#333333]">{item.RegDate}</td>
                    <td className="pt-2 pb-2 ">
                      <span
                        className={`${
                          item.Status === "Active"
                            ? "bg-[#E8F8F0]  text-[#1BB66E]"
                            : "bg-[#FEECEC] text-[#F94144] "
                        } rounded-2xl py-1   text-sm`}
                        style={{
                          minWidth: "80px",
                          display: "inline-block",
                          textAlign: "center",
                        }}
                      >
                        {item.Status}
                      </span>
                    </td>
                    <td className="pt-2 pb-2   text-[#333333]">
                      <div className="flex gap-4">
                        <Link
                          href={`/Super-Admin/Manage-Existing-Schools/Edit-School?schoolid=${schoolId}&userid=${userId}`}
                          onClick={(e) => e.stopPropagation()} // Prevents the row click
                        >
                          <FiEdit3
                            className="text-[#80ADCB] cursor-pointer"
                            size={15}
                          />
                        </Link>
                        <FiTrash2
                          className="text-[#F94144] cursor-pointer"
                          size={15}
                          onClick={(e) => {
                            e.stopPropagation();
                            openDeleteModal(item);
                          }} // Prevents the row click
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
