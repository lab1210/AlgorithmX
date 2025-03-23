"use client";
import React, { useState } from "react";
import SuperAdminLayout from "../SuperAdminLayout";
import DashboardHeader from "../DashboardHeader";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaUserPlus } from "react-icons/fa6";
import schoolAdmin from "../../schooladmin";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const ManageSchoolAdminItem = () => {
  const searchParams = useSearchParams();
  const schoolId = searchParams.get("schoolid");
  const userId = searchParams.get("userid");

  // State to track selected school
  const [selectedSchoolAdmin, setSelectedSchoolAdmin] = useState(null);

  const [modalTransform, setModalTransform] = useState("translateX(-100%)");
  const [modalOpacity, setModalOpacity] = useState(0);

  // Function to open modal
  const openModal = (school) => {
    setSelectedSchoolAdmin(school);
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
      setSelectedSchoolAdmin(null);
    }, 300);
  };
  return (
    <SuperAdminLayout>
      {/* Overlay and Modal */}
      {selectedSchoolAdmin && (
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
                Administrative Information
                <span onClick={closeModal} className="cursor-pointer">
                  <IoClose />
                </span>
              </p>
            </div>
            <div className="pl-10 pr-10 pt-8 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">First Name:</p>
                <p className="font-bold text-lg">
                  {selectedSchoolAdmin.FirstName}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Middle Name:</p>
                <p className="font-bold text-lg">
                  {selectedSchoolAdmin.MiddleName}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Last Name:</p>
                <p className="font-bold text-lg">
                  {selectedSchoolAdmin.LastName}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Email:</p>
                <p className="font-bold text-lg">
                  {selectedSchoolAdmin.EmailAddress}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Phone Number:</p>
                <p className="font-bold text-lg">
                  {selectedSchoolAdmin.PhoneNumber}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">School Name:</p>
                <p className="font-bold text-lg">
                  {selectedSchoolAdmin.SchoolName}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">User Role:</p>
                <p className="font-bold text-lg">
                  {selectedSchoolAdmin.UserRole}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Designation:</p>
                <p className="font-bold text-lg">
                  {selectedSchoolAdmin.Designation}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">Address:</p>
                <p className="font-bold text-lg">
                  {selectedSchoolAdmin.Address}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#ffffff] pl-4 pt-4 pb-3 pr-4 sticky top-0  z-10 shadow-md  flex justify-between items-center ">
        <DashboardHeader />

        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-4xl border lg:min-w-[300px]  border-[#978F8F] ">
            <input
              type="text"
              placeholder="Search School"
              className="w-full outline-none bg-transparent text-[#AEAEAE] text-sm p-2 pl-5"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-[#B09A9A] stroke-[#D9D9D9] mr-4"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
          <Link
            href={`/Super-Admin/Manage-School-Admin/Add-School-Admin?schoolid=${schoolId}&userid=${userId}`}
          >
            <div className="bg-[#E6EFF5] rounded-full flex items-center p-3 cursor-pointer">
              <FaUserPlus className="text-[#01427A]" size={20} />
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-[#D4D4D4] overflow-auto flex-1 p-4">
        <div className="bg-[#ffffff] rounded-lg overflow-x-auto">
          <table className="min-w-full table-auto ">
            <thead className="bg-[#E6EFF5] lg:text-sm sm:text-xs ">
              <tr className="border-b-[#978F8F] border-b">
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  School Admin Name
                </th>
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  School Name
                </th>
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  Designation
                </th>
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  Phone Number
                </th>
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  Email Address
                </th>
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  Modify
                </th>
              </tr>
            </thead>
            <tbody>
              {schoolAdmin.map((item, index) => (
                <tr
                  onClick={() => openModal(item)}
                  key={index}
                  className="cursor-pointer border-b-[#978F8F] border-b font-semibold text-xs"
                >
                  <td className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-[#333333]">
                    {item.FirstName + " " + item.MiddleName}
                  </td>
                  <td className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-[#333333]">
                    {item.SchoolName}
                  </td>
                  <td className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-[#333333]">
                    {item.Designation}
                  </td>
                  <td className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-[#333333]">
                    {item.PhoneNumber}
                  </td>
                  <td className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-[#333333]">
                    {item.EmailAddress}
                  </td>
                  <td className="p-3 text-[#333333]">
                    <div className="flex gap-4">
                      <Link
                        href={`/Super-Admin/Manage-School-Admin/Edit-School-Admin?schoolid=${schoolId}&userid=${userId}`}
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
    </SuperAdminLayout>
  );
};

export default ManageSchoolAdminItem;
