import { UserProvider } from "@/app/Components/StudentDashBoard/context/UserProvider";
import React, { Suspense } from "react";
import styles from "../../css/spinner.module.css";

const UploadProgress = () => {
  return (
    <UserProvider>
      <Suspense
        fallback={
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
          </div>
        }
      >
        <UploadProgress />
      </Suspense>
    </UserProvider>
  );
};

export default UploadProgress;
