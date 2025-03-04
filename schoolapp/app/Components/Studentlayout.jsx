"use client";
import React, { Suspense, useEffect, useState } from "react";
import styles from "../css/layout.module.css";
import LeftSidebar from "./StudentDashBoard/LeftSidebar";
import { usePathname } from "next/navigation";
import RightSidebar from "./StudentDashBoard/RightSidebar";
import { useUser } from "./StudentDashBoard/context/UserProvider";

const Layout = ({ children }) => {
  const { user, isLoading, checkUser, setUser } = useUser();
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  const pathName = usePathname();

  const generateTitle = (path) => {
    const parts = path.split("/");
    const formattedParts = parts.slice(2).map((part) => {
      return part
        .replace(/-/g, " ")
        .replace(/\b\w/g, (match) => match.toUpperCase());
    });

    if (formattedParts.length >= 2) {
      return {
        firstPart: formattedParts[0],
        restParts: formattedParts.slice(1).join(" / "),
      };
    }

    return formattedParts.join(" / ") || "Dashboard";
  };

  useEffect(() => {
    if (!checkUser()) {
      return;
    }
  }, [user, isLoading, checkUser]);

  useEffect(() => {
    const title = generateTitle(pathName);
    setHeaderTitle(title);
  }, [pathName]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.LayoutGrid}>
      <div className={styles.left}>
        <Suspense>
          <LeftSidebar setUser={setUser} />
        </Suspense>
      </div>
      <div className={styles.middle}>
        <div className={styles.header}>
          {typeof headerTitle === "object" ? (
            <h2>
              <span style={{ color: "#808080" }}>{headerTitle.firstPart}</span>{" "}
              / {headerTitle.restParts}
            </h2>
          ) : (
            <h2>{headerTitle}</h2>
          )}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.right}>
        <RightSidebar user={user} />
      </div>
    </div>
  );
};

export default Layout;
