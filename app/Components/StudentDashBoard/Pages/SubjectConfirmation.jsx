"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Layout from "../../../Components/Studentlayout";

export default function SubjectRegistrationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const year = searchParams.get("year");
  const arm = searchParams.get("arm");
  const dept = searchParams.get("dept");

  const [stream, setStream] = useState("Science");
  const [subjects, setSubjects] = useState([
    { id: 1, name: "Physics", checked: false },
    { id: 2, name: "Chemistry", checked: false },
    { id: 3, name: "Food Processing", checked: false },
    { id: 4, name: "Biology", checked: false },
  ]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [subjectError, setSubjectError] = useState("");

  const handleStreamChange = (value) => {
    setStream(value);
  };

  const handleSubjectToggle = (id) => {
    setSubjects((prev) =>
      prev.map((subj) =>
        subj.id === id ? { ...subj, checked: !subj.checked } : subj
      )
    );
    // Clear error if any subject is selected
    if (subjects.filter((s) => s.id === id ? !s.checked : s.checked).length > 0) {
      setSubjectError("");
    }
  };

  const handleProceed = () => {
    const selectedSubjects = subjects.filter((s) => s.checked);
    if (selectedSubjects.length === 0) {
      setSubjectError("Please select at least one subject to register.");
      return;
    }
    setSubjectError("");
    setShowConfirm(true);
  };

  const handleConfirmNo = () => {
    setShowConfirm(false);
  };

  const handleConfirmYes = () => {
    const selectedSubjects = subjects.filter((s) => s.checked);
    console.log("Selected subjects:", selectedSubjects);
    // Redirect to Timetable page (or next page) after confirmation
    router.push("/Student/Timetable");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 relative">
        <div className="w-full max-w-5xl bg-[#494949] rounded-md p-6 md:p-10">
          {/* Top Card */}
          <div className="bg-white rounded-md shadow p-3 md:p-8 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-5 text-center">
              {year} - Arm {arm} {dept ? `(${dept})` : ""} subject registration
            </h1>
            <div className="flex justify-center gap-8 mb-6">
              {["Science", "Art", "Commercial"].map((val) => (
                <label
                  key={val}
                  className="flex items-center cursor-pointer text-lg font-semibold"
                >
                  <input
                    type="checkbox"
                    name="stream"
                    value={val}
                    checked={stream === val}
                    onChange={() => handleStreamChange(val)}
                    className="mr-2 accent-[#1BB66E] rounded-full"
                  />
                  {val}
                </label>
              ))}
            </div>
          </div>

          {/* Subject Selection Card */}
          <div className="bg-white rounded-md shadow p-6 md:p-8">
            {/* Step Indicators */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#1BB66E] text-white rounded-full">
                    1
                  </div>
                  <span className="text-sm font-medium">select subjects</span>
                </div>
                <div className="w-16 h-1 bg-gray-300" />
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#1BB66E] text-white rounded-full">
                    2
                  </div>
                  <span className="text-sm font-medium">confirm subjects</span>
                </div>
                <div className="w-16 h-1 bg-gray-300" />
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-700 rounded-full">
                    3
                  </div>
                  <span className="text-sm font-medium">done</span>
                </div>
              </div>
            </div>

            {/* Subject Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-[#F94144] text-white">
                  <tr>
                    <th className="py-2 px-4 font-medium">S/N</th>
                    <th className="py-2 px-4 font-medium">Subject</th>
                    <th className="py-2 px-4 font-medium text-center">
                      Tick subjects to offer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subj, idx) => (
                    <tr key={subj.id} className="">
                      <td className="py-2 px-4">{idx + 1}</td>
                      <td className="py-2 px-4">{subj.name}</td>
                      <td className="py-3 px-4 flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={subj.checked}
                          onChange={() => handleSubjectToggle(subj.id)}
                          className="mr-2 accent-[#1BB66E] rounded-lg"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Display subject selection error */}
            {subjectError && (
              <p className="mt-4 text-red-500 text-center font-bold">
                {subjectError}
              </p>
            )}

            {/* Proceed Button */}
            <div className="text-center mt-6">
              <button
                onClick={handleProceed}
                className="bg-green-600 text-white px-40 py-2 rounded hover:bg-green-700"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>

        {/* Confirm Modal */}
        {showConfirm && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-2xl max-w-sm w-full">
              <h2 className="text-xl font-bold text-center mb-4">
                Confirm final registration
              </h2>
              <div className="flex justify-center gap-6">
                <button
                  onClick={handleConfirmNo}
                  className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
                >
                  No
                </button>
                <button
                  onClick={handleConfirmYes}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
