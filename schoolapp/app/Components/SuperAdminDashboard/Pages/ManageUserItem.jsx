"use client";
import React, { useState } from "react";
import SuperAdminLayout from "../SuperAdminLayout";
import DashboardHeader from "../DashboardHeader";
import { FaUserPlus } from "react-icons/fa6";
import User from "../../User";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import AddUser from "../Modals/AddUser";

const ManageUserItem = () => {
  const [modalTransform, setModalTransform] = useState("translateX(-100%)");
  const [modalOpacity, setModalOpacity] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    Surname: "",
    FirstName: "",
    PhoneNumber: "",
    EmailAddress: "",
    UserRole: "",
    Address: "",
  });
  // Function to open modal
  const openAddModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setModalTransform("translateX(0)");
      setModalOpacity(1);
    }, 0);
  };

  // Function to close modal
  const closeAddModal = () => {
    setIsModalOpen(false);
    setModalTransform("translateX(-100%)");
    setModalOpacity(0);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Added:", formData);
    closeAddModal();
  };
  return (
    <SuperAdminLayout>
      {/* ADD USER */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={closeAddModal}
          ></div>
          <div
            className="relative md:pl-6 md:pr-6 pt-4 pb-4 sm:pl-3 sm:pr-3  bg-white  rounded-md shadow-lg lg:max-w-280 md:max-w-180 sm:max-w-150  z-50 transition-transform  duration-300 ease-in-out"
            style={{ transform: modalTransform, opacity: modalOpacity }}
          >
            <div className="flex justify-end">
              <span onClick={closeAddModal} className="cursor-pointer">
                <IoClose size={20} />
              </span>
            </div>
            <div className="flex justify-center">
              <p className="font-bold text-xl">ADD NEW USER</p>
            </div>
            <AddUser />
          </div>
        </div>
      )}
      <div className="bg-[#ffffff] pl-4 pt-6 pb-6 pr-4 sticky top-0  z-10 shadow-md  flex justify-between items-center ">
        <DashboardHeader />

        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-4xl border min-w-[300px]  border-[#978F8F] ">
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

          <div className="bg-[#E6EFF5] rounded-full flex items-center p-3 cursor-pointer">
            <FaUserPlus
              onClick={openAddModal}
              className="text-[#01427A]"
              size={20}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#D4D4D4] overflow-auto flex-1 p-4">
        <div className="bg-[#ffffff] rounded-lg overflow-x-auto">
          <table className="min-w-full table-auto ">
            <thead className="bg-[#E6EFF5] lg:text-sm sm:text-xs ">
              <tr className="border-b-[#978F8F] border-b">
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  Name
                </th>
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  Phone Number
                </th>
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  Email Address
                </th>
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  User Role
                </th>
                <th className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-left  font-bold text-[#333333]">
                  Modify
                </th>
              </tr>
            </thead>
            <tbody>
              {User.map((item, index) => (
                <tr
                  key={index}
                  className="cursor-pointer border-b-[#978F8F] border-b font-semibold text-xs"
                >
                  <td className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-[#333333]">
                    {item.Surname + " " + item.FirstName}
                  </td>
                  <td className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-[#333333]">
                    {item.PhoneNumber}
                  </td>
                  <td className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-[#333333]">
                    {item.EmailAddress}
                  </td>
                  <td className="p-3 xl:pl-8 xl:pr-8 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4  text-[#333333]">
                    {item.UserRole}
                  </td>
                  <td className="p-3 text-[#333333]">
                    <div className="flex gap-4">
                      <FiEdit3
                        className="text-[#80ADCB] cursor-pointer"
                        size={20}
                      />
                      <FiTrash2
                        className="text-[#F94144] cursor-pointer"
                        size={20}
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

export default ManageUserItem;
