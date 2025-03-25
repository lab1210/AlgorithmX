"use client";
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Profile = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const registrationFormPath =
    role === "teacher" ? `/Register/Teacher` : `/Register/Student`;
  const router = useRouter();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [usernameerror, setUsernameerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [confirmPassworderror, setConfirmPassworderror] = useState("");
  const [profilePicture, setProfilePicture] = useState("/profile.png");
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setNewProfilePicture(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePicture(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Username === "") {
      setUsernameerror("Username is required");
    } else {
      setUsernameerror("");
    }
    if (Password === "") {
      setPassworderror("Password is required");
    } else {
      setPassworderror("");
    }
    if (ConfirmPassword === "") {
      setConfirmPassworderror("Confirm Password is required");
    } else if (ConfirmPassword !== Password) {
      setConfirmPassworderror("Passwords do not match");
    } else {
      setConfirmPassworderror("");
    }
    if (
      Username !== "" &&
      Password !== "" &&
      ConfirmPassword !== "" &&
      ConfirmPassword === Password
    ) {
      router.push("/");
      // Submit form data to server here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#23303c]">
      {/* Header */}
      <div className="bg-[rgba(1,66,122,1)] text-white flex justify-between items-center py-[20px] px-[30px] font-bold">
        <h2>Profile Update</h2>
        <Link href={`${registrationFormPath}/Registration-Form`}>
          <IoIosCloseCircleOutline size={24} className="cursor-pointer" />
        </Link>
      </div>
      {/* Profile Box */}
      <div className="flex h-screen justify-center items-center">
        {/* Profile Content */}
        <div className="shadow-[0_4px_10px_4px_rgba(0,0,0,0.15)] rounded-t-[30px] bg-[#fdfdfd] pt-[10px] pr-[80px] pb-[60px] pl-[80px] min-w-[480px]">
          {/* Top Dash */}
          <div className="flex items-center justify-center mb-[30px]">
            <div className="bg-[#ffa500] w-[15%] h-[4px] rounded-[8px]"></div>
          </div>
          {/* Profile Details */}
          <div className="flex flex-col">
            {/* Section Title */}
            <h3 className="text-[#01427a] mb-[20px] text-[20px]">
              Profile Picture
            </h3>
            {/* Profile Row */}
            <div className="flex items-center gap-[20px] mb-[30px]">
              {/* Profile Picture */}
              <div className="rounded-full w-[70px] h-[70px] bg-[#0000001a] relative">
                <img
                  src={profilePicture}
                  alt="Profile Pic"
                  className="rounded-full w-full h-full object-cover"
                />
                <div className="text-white bg-[#01427a] rounded-full w-[20px] h-[20px] text-[12px] p-[4px] flex items-center justify-center absolute bottom-0 right-0">
                  <p>+</p>
                  <input
                    type="file"
                    id="profile-picture-upload"
                    className="hidden"
                    onChange={handleProfilePictureChange}
                    accept="image/*"
                  />
                </div>
              </div>
              {/* Add Picture Button */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("profile-picture-upload").click()
                  }
                  className="bg-[rgba(1,66,122,1)] opacity-50 font-normal text-[18px] text-white py-[6px] px-[40px] rounded-[10px] cursor-pointer border-0"
                >
                  Add Picture
                </button>
              </div>
            </div>
            {/* Profile Inputs */}
            <div className="flex flex-col gap-[10px] mb-[40px]">
              <div className="flex flex-col gap-[5px]">
                <label className="text-[#808080] font-bold text-[16px]">
                  Create Username
                </label>
                <input
                  type="text"
                  name="Username"
                  placeholder="Create Username"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="outline-none border border-[rgba(217,217,217,1)] text-[rgba(0,0,0,0.2)] py-[10px] px-[16px] rounded-[5px]"
                />
                {usernameerror && (
                  <span className="text-[12px] font-bold text-[rgba(242,100,92,1)]">
                    {usernameerror}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="text-[#808080] font-bold text-[16px]">
                  Create Password
                </label>
                <input
                  type="password"
                  name="Password"
                  placeholder="Enter Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none border border-[rgba(217,217,217,1)] text-[rgba(0,0,0,0.2)] py-[10px] px-[16px] rounded-[5px]"
                />
                {passworderror && (
                  <span className="text-[12px] font-bold text-[rgba(242,100,92,1)]">
                    {passworderror}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="text-[#808080] font-bold text-[16px]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="ConfirmPassword"
                  placeholder="Confirm Password"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="outline-none border border-[rgba(217,217,217,1)] text-[rgba(0,0,0,0.2)] py-[10px] px-[16px] rounded-[5px]"
                />
                {confirmPassworderror && (
                  <span className="text-[12px] font-bold text-[rgba(242,100,92,1)]">
                    {confirmPassworderror}
                  </span>
                )}
              </div>
            </div>
            {/* Save Button */}
            <button
              type="submit"
              className="bg-[rgba(1,66,122,1)] opacity-50 font-normal text-[15px] text-white py-[6px] px-[40px] rounded-[6px] cursor-pointer border-0"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Profile;
