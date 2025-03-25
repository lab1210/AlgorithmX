"use client";
import { useState } from "react";
import Link from "next/link";
import { PiEyeLight } from "react-icons/pi";
import { IoEyeOffOutline } from "react-icons/io5";
import dummy from "../Components/dummy";
import LeftAuth from "@/app/Components/LeftAuth";
import Modal from "react-modal";
import custommodal from "../Components/modal";
import Get_token from "../Components/get-token";
import { useSearchParams, useRouter } from "next/navigation";

Modal.setAppElement(".app");

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [schoolid, setSchoolid] = useState("");
  const [Pin, setPin] = useState("");
  const [schooliderror, setSchooliderror] = useState("");
  const [pinerror, setPinerror] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState("");

  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const registrationFormPath =
    role === "teacher" ? `/Register/Teacher` : `/Register/Student`;
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSchooliderror("");
    setPinerror("");
    let valid = true;
    if (!schoolid) {
      setSchooliderror("School ID is required");
      valid = false;
    }
    if (!Pin) {
      setPinerror("Pin is required");
      valid = false;
    }
    if (!valid) return;

    // Check against dummy data
    const schoolIdExists = dummy.some(
      (user) => user.schoolid.toUpperCase() === schoolid.toUpperCase()
    );
    if (schoolIdExists) {
      setSchooliderror("School ID already Registered..");
      return;
    }
    const newUser = { schoolid, Pin };
    console.log("Registration data:", newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    // Dummy token generation
    const generatedToken = "6583-0251-4789-3560";
    setToken(generatedToken);
    openModal();
    setSchoolid("");
    setPin("");
  };

  return (
    <div className="relative w-full flex flex-col md:flex-row bg-white">
      {/* Overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] z-[999] transition-opacity duration-300 pointer-events-none ${
          isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
      ></div>

      {/* Left Side */}
      <div
        className={`relative w-full md:w-1/2 h-[300px] md:h-auto flex items-center justify-center bg-[#01427a] ${
          isModalOpen ? "opacity-60 transition-opacity duration-300" : ""
        }`}
      >
        <LeftAuth className="hidden md:block" />
        {/* Mobile Image */}
        <div className="block md:hidden relative w-full h-full items-center justify-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-[150px] h-[150px] object-contain z-10"
          />
          <div className="absolute bottom-0 w-full h-[50%] bg-white rounded-t-full"></div>
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`flex flex-col items-center justify-center w-full md:w-[45%] md:ml-4 ${
          isModalOpen ? "opacity-60 transition-opacity duration-300" : ""
        }`}
      >
        <div className="p-6 md:p-8 lg:p-12 shadow-[0_4px_10px_4px_rgba(0,0,0,0.15)] rounded-[10px] w-full max-w-[480px]">
          <div className="w-full">
            {/* Title */}
            <div className="text-center font-bold mb-8">
              <h1 className="text-[30px] md:text-[40px]">Register Now</h1>
              <p className="text-[12px] md:text-[15px]">
                Kindly provide the requested information to register.
              </p>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* School ID Input */}
              <div className="flex flex-col mb-4 relative">
                <label htmlFor="SchoolID" className="font-bold text-[14px]">
                  School ID
                </label>
                <input
                  type="text"
                  value={schoolid}
                  placeholder="Enter School ID"
                  onChange={(e) => setSchoolid(e.target.value)}
                  required
                  className="mt-1 p-4 rounded border border-gray-300"
                />
                {schooliderror && (
                  <p className="text-[12px] font-bold text-[rgba(242,100,92,1)] mt-1">
                    {schooliderror}
                  </p>
                )}
              </div>
              {/* PIN Input */}
              <div className="flex flex-col mb-4 relative">
                <div className="flex items-center justify-between">
                  <label htmlFor="Pin" className="font-bold text-[14px]">
                    PIN
                  </label>
                </div>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Pin"
                    value={Pin}
                    onChange={(e) => setPin(e.target.value)}
                    required
                    className="w-full p-4 rounded border border-gray-300"
                  />
                  {showPassword ? (
                    <PiEyeLight
                      onClick={togglePasswordVisibility}
                      size={20}
                      className="absolute right-4 cursor-pointer"
                    />
                  ) : (
                    <IoEyeOffOutline
                      onClick={togglePasswordVisibility}
                      size={20}
                      className="absolute right-4 cursor-pointer"
                    />
                  )}
                </div>
                {pinerror && (
                  <p className="text-[12px] font-bold text-[rgba(242,100,92,1)] mt-1">
                    {pinerror}
                  </p>
                )}
              </div>
              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-[#01427a] text-white font-bold text-[18px] py-4 px-8 rounded hover:bg-[#01427a]/80 transition-transform duration-300 flex items-center justify-center gap-2"
                >
                  REGISTER
                  <span className="text-xl">→</span>
                </button>
              </div>
            </form>
            {/* Already Registered Link */}
            <p className="text-[12px] font-bold text-black mt-4">
              Already Registered?
              <Link href="/" className="text-[#F94144] ml-1">
                Log In here
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Modal for Token */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={custommodal}
        contentLabel="Get Token"
      >
        <Get_token token={token} />
      </Modal>
    </div>
  );
};

export default Register;
