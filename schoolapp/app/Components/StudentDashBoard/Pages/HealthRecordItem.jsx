"use client"; 
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../../Components/Studentlayout";
import { useUser } from "../context/UserProvider";
import Link from "next/link";


export default function HealthRecordForm() {
  const router = useRouter();
  const { isLoading } = useUser();
  

  // Form fields
  const [name, setName] = useState("");
  const [classYear, setClassYear] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [currentMedication, setCurrentMedication] = useState("");
  const [emergencyCondition, setEmergencyCondition] = useState("");

  // On mount, load data from localStorage if editing
  useEffect(() => {
    const savedData = localStorage.getItem("healthRecord");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setName(parsed.name || "");
      setClassYear(parsed.classYear || "");
      setDob(parsed.dob || "");
      setHeight(parsed.height || "");
      setWeight(parsed.weight || "");
      setBloodGroup(parsed.bloodGroup || "");
      setCurrentMedication(parsed.currentMedication || "");
      setEmergencyCondition(parsed.emergencyCondition || "");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage
    const data = {
      name,
      classYear,
      dob,
      height,
      weight,
      bloodGroup,
      currentMedication,
      emergencyCondition,
    };
    localStorage.setItem("healthRecord", JSON.stringify(data));

    // Navigate to summary page
    router.push("/Student/Health-Record/RecordSummary");
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
      <div className="w-full max-w-4xl bg-[#494949] rounded-md p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-5">
          Health Record
        </h1>

        {/* White form container */}
        <div className="bg-white rounded-md shadow p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Personal Data
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Class */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Class (e.g. SSS 1B)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  value={classYear}
                  onChange={(e) => setClassYear(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* DOB */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded p-2"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>

            {/* Height & Weight & BloodGroup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Height (ft)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Weight (kg)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Blood Group
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                />
              </div>
            </div>

            {/* Current Medication & Emergency Condition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Current Medication
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  value={currentMedication}
                  onChange={(e) => setCurrentMedication(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Emergency Condition
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  value={emergencyCondition}
                  onChange={(e) => setEmergencyCondition(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Link
              href="/Student/Health-Record/RecordSummary"
              className="flex items-center justify-center"            
            >
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
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
