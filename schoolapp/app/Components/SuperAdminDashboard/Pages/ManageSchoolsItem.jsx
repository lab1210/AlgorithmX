"use client";
import React from "react";
import SuperAdminLayout from "../SuperAdminLayout";
import DashboardHeader from "../DashboardHeader";
import { RiEqualizerLine } from "react-icons/ri";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import schools from "../../school";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const ManageSchoolsItem = () => {
  const searchParams = useSearchParams();
  const schoolId = searchParams.get("schoolid");
  const userId = searchParams.get("userid");
  return (
    <SuperAdminLayout>
      {/* header  */}
      <div className="bg-[#ffffff] pl-4 pt-6 pb-6 pr-4 sticky top-0  z-10 shadow-md  flex justify-between items-center ">
        <DashboardHeader />
        <Link
          href={`/Super-Admin/Manage-Existing-Schools/Add-New-School?schoolid=${schoolId}&userid=${userId}`}
        >
          <button className="bg-[#07508F] text-white p-2 rounded-lg cursor-pointer ">
            Add New School
          </button>
        </Link>
      </div>
      {/* content  */}
      <div className="bg-[#D4D4D4] overflow-auto flex-1 p-4">
        <div className="grid grid-rows-[auto_1fr] gap-3.5">
          <div className="bg-[#ffffff] rounded-lg p-4 pr-8 flex justify-end items-center gap-4 ">
            <div className="flex items-center rounded-4xl border-2 min-w-[320px]  border-[#978F8F] ">
              <input
                type="text"
                placeholder="Search School"
                className="w-full outline-none bg-transparent text-[#AEAEAE] text-sm p-1 pl-5"
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
            <div>
              <RiEqualizerLine size={20} />
            </div>
          </div>
          <div className="bg-[#ffffff] rounded-lg overflow-x-auto">
            <table className="min-w-full table-auto ">
              <thead className="bg-[#E6EFF5] lg:text-sm sm:text-xs ">
                <tr className="border-b-[#978F8F] border-b">
                  <th className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                    School Name
                  </th>
                  <th className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                    School Type
                  </th>
                  <th className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                    Short Sch Name
                  </th>
                  <th className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                    Reg. Date
                  </th>
                  <th className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                    Status
                  </th>
                  <th className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                    Modify
                  </th>
                </tr>
              </thead>
              <tbody>
                {schools.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b-[#978F8F] border-b font-semibold text-xs"
                  >
                    <td className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4 text-[#333333]">
                      {item.SchoolName}
                    </td>
                    <td className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4 text-[#333333]">
                      {item.SchoolType}
                    </td>
                    <td className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4 text-[#333333]">
                      {item.ShortSchName}
                    </td>
                    <td className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4 text-[#333333]">
                      {item.RegDate}
                    </td>
                    <td className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4 text-[#333333]">
                      <span
                        className={`${
                          item.Status === "Active"
                            ? "bg-[#E8F8F0] text-[#1BB66E] pl-6 pr-6"
                            : "bg-[#FEECEC] text-[#F94144] pl-5.5 pr-5.5"
                        } rounded-2xl pt-2 pb-2 `}
                      >
                        {item.Status}
                      </span>
                    </td>
                    <td className="p-3 xl:pl-10 xl:pr-10 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4 text-[#333333]">
                      <div className="flex lg:gap-8 sm:gap-4">
                        <FiEdit3 className="text-[#80ADCB]" size={20} />
                        <FiTrash2 className="text-[#F94144]" size={20} />
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
