"use client";
import React, { useState } from "react";
import Layout from "../../Studentlayout";
import styles from "../../StudentDashBoard/Pages/css/Fees.module.css";

const MakePaymentItem = () => {
  const [card, setCard] = useState(false);
  const [bankPin, setBankpin] = useState(false);
  const [details, setDetails] = useState(false);
  const [payment, setPayment] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
    <Layout>
      <div className={styles.MakePaymentGrid}>
        <div className={styles.MakePaymentItem1}>
          <div className={styles.completed}>
            <div className={styles.block1}>
              <div className={styles.block2}>
                <span> &#10004;</span>
                <p>choose payment method</p>
              </div>
              <div className={styles.linecompleted}></div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Layout>
  );
};

export default MakePaymentItem;
