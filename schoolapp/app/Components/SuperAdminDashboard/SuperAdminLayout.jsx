"use client";
import React, { Suspense, useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import styles from "../../Super-Admin/css/spinner.module.css";
import { useUser } from "../StudentDashBoard/context/UserProvider";

const SuperAdminLayout = ({ children }) => {
  const { user, isLoading, checkUser, setUser } = useUser();

  useEffect(() => {
    if (!checkUser()) {
      return;
    }
  }, [user, isLoading, checkUser]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }
  return (
    <div className="grid sm:grid-cols-[150px_auto] md:grid-cols-[150px_auto] xl:grid-cols-[200px_auto] overflow-hidden w-screen  h-screen ">
      <div className="bg-[#01427A] h-full">
        <Suspense>
          <LeftSidebar setUser={setUser} />
        </Suspense>
      </div>
      <div className="flex flex-col h-screen overflow-hidden">{children}</div>
    </div>
  );
};

export default SuperAdminLayout;
