"use client"; 
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import Layout from "../../../Components/Studentlayout";
import { useUser } from "../context/UserProvider";
import Link from "next/link";

export default function HealthRecordSummary() {
  const router = useRouter();
  const [record, setRecord] = useState(null);
  const { isLoading } = useUser();
  

  useEffect(() => {
    const savedData = localStorage.getItem("healthRecord");
    if (savedData) {
      setRecord(JSON.parse(savedData));
    } else {
      // If no data found, maybe redirect back to form
      router.push("/Student/Health-Record/Record");
    }
  }, [router]);

  if (!record) {
    return null; // or a loading spinner
  }

  const handleEdit = () => {
    // Simply navigate back to the form
    router.push("/Student/Health-Record/Record");
  };

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="border-4 border-[rgba(0,64,128,1)] border-t-[rgba(249,65,68,1)] rounded-full w-[50px] h-[50px] animate-spin"></div>
      </div>
    );
  }

  return (
    <Layout>
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-[#494949] rounded-md p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-5">
          Health Record
        </h1>

        {/* White summary container */}
        <div className="bg-white rounded-md shadow p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                {record.name}
              </h2>
              <p className="text-sm text-gray-500">Class: {record.classYear}</p>
              <p className="text-sm text-gray-500">DOB: {record.dob}</p>
            </div>
            {/* Edit Button */}
            <Link
              href="/Student/Health-Record/Record"
            >
            <button
              onClick={handleEdit}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
            >
              Edit
            </button>
            </Link>
          </div>

          {/* Student's Health Record Table */}
          <div className="bg-gray-100 rounded-md p-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 font-semibold">Weight:</p>
                <p className="text-base text-gray-800">{record.weight}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Height:</p>
                <p className="text-base text-gray-800">{record.height}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">
                  Blood Group:
                </p>
                <p className="text-base text-gray-800">{record.bloodGroup}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">
                  Current Medication:
                </p>
                <p className="text-base text-gray-800">
                  {record.currentMedication}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">
                  Emergency Condition:
                </p>
                <p className="text-base text-gray-800">
                  {record.emergencyCondition}
                </p>
              </div>
            </div>
          </div>

          {/* Past Health Record placeholder */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Past Health Record
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="py-2 px-4 font-medium">Medical Information</th>
                  <th className="py-2 px-4 font-medium">Past Health Record</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">Has allergies?</td>
                  <td className="py-2 px-4">No</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">Had surgery?</td>
                  <td className="py-2 px-4">Yes, 2018</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
