"use client";
import React, { useState } from "react";
import Layout from "../../../Components/Studentlayout";
import { useUser } from "../context/UserProvider";
import Link from "next/link";

export default function RegisterClassArmPage() {
  const [classYear, setClassYear] = useState("");
  const [classArm, setClassArm] = useState("");
  const [department, setDepartment] = useState("");
  const { isLoading } = useUser();
  
    if (isLoading) {
      return (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="border-4 border-[rgba(0,64,128,1)] border-t-[rgba(249,65,68,1)] rounded-full w-[50px] h-[50px] animate-spin"></div>
        </div>
      );
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Class Year:", classYear, "Class Arm:", classArm, "Department:", department);
  };

  return (
    <Layout>
    <div className="flex items-center justify-center">
      <div className="w-full max-w-5xl bg-[#58585873] rounded-md p-6 md:p-10">
        <h1 className="text-black text-lg text-bold mb-5 bg-white rounded-2xl p-3">
          Register Class Year and Class Arm
        </h1>

        {/* Inner white card */}
        <div className="bg-white rounded-md shadow p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-[#33333399] mb-4 text-center justify-center max-w-150 mx-auto">
            Select Class Year and Class Arm to Proceed to Subject Registration
          </h2>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
            <div>
              <select
                id="classYear"
                value={classYear}
                onChange={(e) => setClassYear(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-4 outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" className="block mb-1 font-medium text-[#333333]">Select Class Year</option>
                <option value="JSS1">JSS1</option>
                <option value="JSS2">JSS2</option>
                <option value="JSS3">JSS3</option>
                <option value="SSS1">SSS1</option>
                <option value="SSS2">SSS2</option>
                <option value="SSS3">SSS3</option>
              </select>
            </div>

            <div>
              <select
                id="classArm"
                value={classArm}
                onChange={(e) => setClassArm(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-4 outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" className="block mb-1 font-medium text-[#333333]">Select Class Arm</option>
                <option value="A">Arm A</option>
                <option value="B">Arm B</option>
                <option value="C">Arm C</option>
              </select>
            </div>

            <div>
              <select
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-4 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" className="block mb-1 font-medium text-[#333333]">Department</option>
                <option value="Science">Science</option>
                <option value="Art">Art</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

           <Link
                href={`/Student/Subject-Registration/Confirm?classYear=${classYear}&classArm=${classArm}&department=${department}`}
                className="flex items-center justify-center"
           >
           <button
              type="submit"
              className="mt-4 bg-[#1BB66E] text-white font-semibold py-2 px-47 rounded hover:bg-[#F94144] transition-colors cursor-pointer"
            >
              Proceed
            </button>
           </Link>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
}
