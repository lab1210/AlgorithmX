"use client";
import React, { useState } from "react";
import Layout from "../../../Components/Studentlayout";
import { useSearchParams } from "next/navigation";
import { useUser } from "../context/UserProvider";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Attendance() {
  const { isLoading } = useUser();
  const searchParams = useSearchParams();
  const schoolId = searchParams.get("schoolid");
  const userId = searchParams.get("userid");
  const [date, setDate] = useState(new Date());

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="border-4 border-[rgba(0,64,128,1)] border-t-[rgba(249,65,68,1)] rounded-full w-[50px] h-[50px] animate-spin"></div>
      </div>
    );
  }

  console.log("School ID:", schoolId);
  console.log("User ID:", userId);

  return (
    <Layout>
      <div className="flex min-h-screen">
        <main className="flex-1 bg-[#D9D9D966] p-4 md:p-6 lg:p-8 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-xl text-black-800 mb-2 text-center text-bold">
                Assembly attendance summary
              </h2>
              <div className="rounded-xl p-4 flex items-center justify-center">
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="w-full h-full border-none text-bold"
                />
              </div>
              <div className="text-sm text-black-600 space-y-1">
                <p className="text-semibold">
                  <span className="inline-block w-3 h-3 bg-[#F94144] rounded mr-2"></span>
                  missed classes
                </p>
                <p className="text-semibold">
                  <span className="inline-block w-3 h-3 bg-gray-800 rounded mr-2 "></span>
                  absent
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-[#D9D9D9] rounded-2xl p-3">
                <h2 className="text-center text-xl font-bold mb-4 text-black-800">
                  Attendance Overview
                </h2>
                <div className="flex gap-4 mb-10 max-w-70 text-center mx-auto">
                  <div className="flex-1 bg-white rounded-3xl shadow-xl p-4">
                    <p className="text-7xl font-bold text-[#390181] mb-3">3</p>
                    <h3 className="text-sm font-medium text-black-600 text-bold">
                      Assembly days missed
                    </h3>
                  </div>
                  <div className="flex-1 bg-white rounded-3xl shadow-xl p-4">
                    <p className="text-7xl font-bold text-[#F94144] mb-3">4</p>
                    <h3 className="text-sm font-medium text-black-600 text-bold">
                      Class days missed
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-4 flex items-center justify-between max-w-50 mx-auto text-center animate-fade-in-up">
                  <div>
                    <h3 className="text-sm font-medium text-black-600 text-bold">
                      You are
                    </h3>
                    <div className="text-7xl font-bold text-[#008000] mb-2 mt-2">
                      70%
                    </div>
                    <p className="text-sm text-bold text-black-800">
                      eligible for the midterm test
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded shadow p-4">
            <h2 className="text-2xl font-bold text-black-800 mb-4 text-center">
              Class attendance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-black-700 ">
                <thead className="border-b bg-[#80ADCB] text-white">
                  <tr>
                    <th className="py-2 px-4 font-medium">S/N</th>
                    <th className="py-2 px-4 font-medium">Subject</th>
                    <th className="py-2 px-4 font-medium">No. of Classes</th>
                    <th className="py-2 px-4 font-medium">Times present</th>
                    <th className="py-2 px-4 font-medium">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" hover:bg-black-50">
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 px-4">Mathematics</td>
                    <td className="py-2 px-4">12</td>
                    <td className="py-2 px-4">10</td>
                    <td className="py-2 px-4">83.3%</td>
                  </tr>
                  <tr className="hover:bg-black-50">
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">English Language</td>
                    <td className="py-2 px-4">11</td>
                    <td className="py-2 px-4">11</td>
                    <td className="py-2 px-4">100%</td>
                  </tr>
                  <tr className="hover:bg-black-50">
                    <td className="py-2 px-4">3</td>
                    <td className="py-2 px-4">Basic Science</td>
                    <td className="py-2 px-4">12</td>
                    <td className="py-2 px-4">12</td>
                    <td className="py-2 px-4">100%</td>
                  </tr>
                  <tr className="hover:bg-black-50">
                    <td className="py-2 px-4">4</td>
                    <td className="py-2 px-4">Civic Education</td>
                    <td className="py-2 px-4">9</td>
                    <td className="py-2 px-4">7</td>
                    <td className="py-2 px-4">77.7%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
