"use client";
import React, { Suspense, useEffect, useState } from "react";
import LeftSidebar from "./LeftSidebar";
import styles from "../../Super-Admin/css/spinner.module.css";
import { useUser } from "../StudentDashBoard/context/UserProvider";
import { IoMdLaptop } from "react-icons/io";
import { MdWarning } from "react-icons/md";

const SuperAdminLayout = ({ children }) => {
  const { user, isLoading, checkUser, setUser } = useUser();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (!checkUser()) {
      return;
    }
  }, [user, isLoading, checkUser]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (isSmallScreen) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <MdWarning className="text-red-600 text-6xl mb-4" />{" "}
        <p className="text-lg font-semibold text-red-600">
          Super Admin access is not available on small screens.
        </p>
        <p className="text-md text-gray-600">
          Please use a larger screen to continue.
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-[150px_auto] md:grid-cols-[150px_auto] xl:grid-cols-[200px_auto] overflow-hidden w-screen  h-screen">
      <div className="bg-[#01427A] h-full ">
        <Suspense>
          <LeftSidebar setUser={setUser} />
        </Suspense>
      </div>
      <div className="flex flex-col h-screen overflow-hidden">{children}</div>
    </div>
  );
};

export default SuperAdminLayout;
