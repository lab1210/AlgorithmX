"use client";
import { useState } from "react";
import LeftAuth from "./Components/LeftAuth";
import Link from "next/link";
import { PiEyeLight } from "react-icons/pi";
import { IoEyeOffOutline } from "react-icons/io5";
import dummy from "./Components/dummy";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameerror, setUsernameerror] = useState("");
  const [passworderror, setPassworderror] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameerror("");
    setPassworderror("");

    let valid = true;
    if (!username) {
      setUsernameerror("Username is required");
      valid = false;
    }
    if (!password) {
      setPassworderror("Password is required");
      valid = false;
    }
    if (!valid) return;

    const user = dummy.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      if (user.Role === "Teacher") {
        router.push(`/Teacher/DashBoard?schoolid=${user.schoolid}&userid=${user.userId}`);
      } else if (user.Role === "Student") {
        router.push(`/Student/DashBoard?schoolid=${user.schoolid}&userid=${user.userId}`);
      }
    } else {
      console.error("Invalid username or password");
    }
  };

  return (
    <div className="w-full flex bg-[rgba(217,217,217,0.4)] relative">
      <LeftAuth />
      {/* Right side */}
      <div className="flex flex-col items-center justify-center ml-20 md:ml-20 lg:ml-32">
        <div className="shadow-[0_4px_10px_4px_rgba(0,0,0,0.15)] rounded p-6">
          {/* Logo */}
          <div className="w-[80px] mx-auto mb-4 ml-1">
            <img src="/logo.svg" alt="Logo" className="w-full object-contain" />
          </div>
          {/* Login Form */}
          <div className="w-[450px]">
            <div className="text-center mb-4">
              <div className="w-[400px] mx-auto">
                <p className="text-[14px] leading-[18.75px] text-[rgba(0,0,0,0.5)] font-bold text-left">
                  Welcome to Foursquare Management System
                </p>
              </div>
            </div>
            <h1 className="text-[45px] mt-[10px] font-bold">Log in</h1>
            <form onSubmit={handleSubmit}>
              {/* Username Input */}
              <div className="flex flex-col mb-4 relative">
                <label htmlFor="Username" className="text-[14px] font-bold">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="mt-1 p-4 max-w-[478px] rounded-[5px] outline-none font-normal text-[12px] text-black bg-[#e2e0df] placeholder:text-[#00000033]"
                />
                {usernameerror && (
                  <p className="text-[12px] font-bold text-[rgba(242,100,92,1)] mt-1">
                    {usernameerror}
                  </p>
                )}
              </div>
              {/* Password Input */}
              <div className="flex flex-col mb-4 relative">
                <div className="flex items-center justify-between">
                  <label htmlFor="Password" className="text-[14px] font-bold">
                    Password
                  </label>
                  {passworderror && <p className="text-[12px] font-bold text-[rgba(242,100,92,1)]">Forgot Password?</p>}
                </div>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={`w-full p-4 ${!passworderror ? "mt-1" : ""} max-w-[478px] rounded-[5px] outline-none font-normal text-[12px] text-black bg-[#e2e0df] placeholder:text-[#00000033] pr-[40px]`}
                  />
                  {showPassword ? (
                    <PiEyeLight
                      size={20}
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 cursor-pointer border border-[rgba(34,34,34,1)]"
                    />
                  ) : (
                    <IoEyeOffOutline
                      size={20}
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 cursor-pointer border border-[rgba(34,34,34,1)]"
                    />
                  )}
                </div>
                {passworderror && (
                  <p className="text-[12px] font-bold text-[rgba(242,100,92,1)] mt-1">
                    {passworderror}
                  </p>
                )}
              </div>
              {/* Login Button */}
              <div className="block">
                <button
                  type="submit"
                  className="w-full bg-[rgba(1,66,122,1)] rounded-[5px] border-0 text-white font-bold py-[10px] px-[16px] cursor-pointer text-[12px] hover:bg-[rgba(1,66,122,0.8)] transition-colors"
                >
                  LOG IN
                </button>
              </div>
            </form>
            {/* Register Link */}
            <p className="text-[12px] font-bold text-[rgba(0,0,0,0.2)] mt-4">
              Don't have an account?{" "}
              <Link href="/Register">
                <span className="text-[rgba(244,116,88,1)] cursor-pointer hover:underline">
                  Register now
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
