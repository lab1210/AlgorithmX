import { UserProvider } from "@/app/Components/StudentDashBoard/context/UserProvider";
import SuperAdminLayout from "@/app/Components/SuperAdminDashboard/SuperAdminLayout";
import React, { Suspense } from "react";
import styles from "../css/spinner.module.css";
import ManageSchoolsItem from "@/app/Components/SuperAdminDashboard/Pages/ManageSchoolsItem";

const ManageSchools = () => {
  return (
    <UserProvider>
      <Suspense
        fallback={
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
          </div>
        }
      >
        <ManageSchoolsItem />
      </Suspense>
    </UserProvider>
  );
};

export default ManageSchools;
