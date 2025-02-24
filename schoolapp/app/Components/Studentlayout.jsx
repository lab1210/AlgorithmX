import React, { useEffect, useState } from "react";
import styles from "../css/layout.module.css";
import LeftSidebar from "./StudentDashBoard/LeftSidebar";
import { usePathname } from "next/navigation";
const layout = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  const pathName = usePathname();
  const generateTitle = (path) => {
    const parts = path.split("/");
    const formattedParts = parts.slice(2).map((part) => {
      return part
        .replace(/-/g, " ") // Replace hyphens with spaces
        .replace(/\b\w/g, (match) => match.toUpperCase()); // Capitalize each word
    });
    return formattedParts.join(" / ");
  };

  useEffect(() => {
    const title = generateTitle(pathName);
    setHeaderTitle(title || "Dashboard");
  }, [pathName]);
  return (
    <div className={styles.LayoutGrid}>
      <div className={styles.left}>
        <LeftSidebar />
      </div>
      <div className={styles.middle}>
        <div className={styles.header}>
          <h1>{headerTitle}</h1>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.right}>right</div>
    </div>
  );
};

export default layout;
