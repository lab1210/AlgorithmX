"use client";
import React from "react";
import Layout from "../../../Components/Studentlayout";
import StudentProfile from "@/public/female.png";


export default function StudentProfilePage() {
  // Example data
  const student = {
    name: "Ife Babalola Adesina",
    avatar: StudentProfile, 
    className: "SSS 1B",
    studentId: "001",
    gender: "Female",
    classTeacher: "Mr Damilola Adesuwa",
    status: "Art Student",
    registeredSubjects: [
      "Data Processing",
      "English Language",
      "Basic Science",
      "Creative Arts",
      "Business Studies",
      "Agricultural Science",
      "Civic Education",
      "Mathematics",
    ],
    term: "1st Term",
    session: "2023/2024",
  };

  return (
    <Layout>
        <div className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-6">

        <div className="bg-white rounded-md shadow p-6 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={"/female.png"}
              alt="Avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-black">
              {student.name}
            </h1>
          </div>
        </div>

        <div className="bg-white rounded-md shadow p-6">
          <h2 className="text-lg font-semibold text-gray-600 mb-4">Details</h2>
          <div className="grid gap-2 text-sm text-black">
            <p>
              <span className="font-bold">Class:</span> {student.className}
            </p>
            <p>
              <span className="font-bold">Student ID:</span> {student.studentId}
            </p>
            <p>
              <span className="font-bold">Gender:</span> {student.gender}
            </p>
            <p>
              <span className="font-bold">Class teacher:</span>{" "}
              {student.classTeacher}
            </p>
            <p>
              <span className="font-bold">Status:</span> {student.status}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-md shadow p-6">
          <p className="text-sm text-gray-600 mb-2">
            {student.registeredSubjects.length} Registered Subjects for{" "}
            {student.term} {student.session} Session
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-black">
            {student.registeredSubjects.map((subject, idx) => (
              <p key={idx}>{subject}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Layout>

  );
}
