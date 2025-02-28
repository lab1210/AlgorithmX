"use client";
import React from "react";
import Layout from "../../Studentlayout";
import styles from "../../../css/layout.module.css";
import { useUser } from "../context/UserProvider";
import styles2 from "../../../Components/StudentDashBoard/Pages/css/Fees.module.css";

const FeesPaymentItem = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        {" "}
        <div className={styles.spinner}></div> {/* New: Spinner element */}
      </div>
    );
  }

  return (
    <Layout>
      <div className={styles2.FeeContainer}>
        <div className={styles2.firstCard}>
          <div className={styles2.firstCardItem1}>
            <div className={styles2.TopSection}>
              <div className={styles2.CardDetails}>
                <h4> Make Payment</h4>
                <p>payment made easy</p>
              </div>
              <div className={styles2.Cardimage}>
                <img src="/Wallet.png" alt="" />
              </div>
            </div>
            <div className={styles2.BottomSection}>
              <div className={styles2.info}>
                <p>More info</p>
              </div>
            </div>
          </div>
          <div className={styles2.firstCardItem2}>
            <div className={styles2.TopSection}>
              <div className={styles2.CardDetails}>
                <h4> Receipt</h4>
                <p>view receipt</p>
              </div>
              <div className={styles2.Cardimage}>
                <img src="/Glyph.png" alt="" />
              </div>
            </div>
            <div className={styles2.BottomSection}>
              <div className={styles2.info}>
                <p>More info</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </Layout>
  );
};

export default FeesPaymentItem;
