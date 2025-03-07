"use client";
import React, { useEffect, useState } from "react";
import Layout from "../../Studentlayout";
import styles from "../Pages/css/Receiptitem.module.css";
import styles2 from "../../../css/layout.module.css";
import dummysession from "../../session";
import { useUser } from "../context/UserProvider";
const ReceiptItem = () => {
  const [session, setSession] = useState(dummysession[0]);
  const { user, isLoading } = useUser();
  const [downloadPdf, setDownloadPdf] = useState(null);

  useEffect(() => {
    import("../../Print/DownloadasPdf").then((module) => {
      setDownloadPdf(() => module.default);
    });
  });

  if (isLoading) {
    return (
      <div className={styles2.loadingContainer}>
        {" "}
        <div className={styles2.spinner}></div> {/* New: Spinner element */}
      </div>
    );
  }

  const handleDownloadPDF = () => {
    if (downloadPdf) {
      downloadPdf(
        `.${styles.ReceiptPageContent}`,
        `${user.username}-Receipt.pdf`
      );
    } else {
      console.error("downloadPdf not loaded yet.");
    }
  };

  return (
    <Layout>
      <div className={styles.ReceiptGrid}>
        <div className={styles.ReceiptPageTitle}>
          <h2>Financial Transaction Receipt</h2>
        </div>
        <div className={styles.ReceiptPageContent}>
          <div className={styles.firstRow}>
            <div className={styles.dropdown}>
              <label htmlFor="session">Select Session :</label>
              <select
                name="session"
                value={session}
                onChange={(e) => {
                  setSession(e.target.value);
                }}
                required
              >
                {dummysession.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.printButton}>
              <button onClick={handleDownloadPDF}>Print</button>
            </div>
          </div>
          <div className={styles.secondRow}>
            <div className={styles.head}>
              <div className={styles.title}>
                <h2>Foursquare International Secondary School</h2>
                <h2>Proof of Fees Payment</h2>
              </div>

              <div className={styles.studentInfo}>
                <p>Name: {user.username}</p>
                <p>Student ID: {user.userId}</p>
                <p>Class: {user.class}</p>
                <p>Session: {session}</p>
              </div>
            </div>
            <div>
              <table className={styles.ReceiptTable}>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Purpose</th>
                    <th> Transaction Number</th>
                    <th>Amount Billed</th>
                    <th>Amount Paid</th>
                    <th>Payment Date</th>
                  </tr>
                </thead>
                <tbody>
                  {user.receipts.map((item, index) => {
                    const currentDate = new Date();
                    return (
                      <tr key={index}>
                        <td style={{ fontWeight: 700 }}>{index + 1}</td>
                        <td>{item.purpose}</td>
                        <td>{item.TransactionNumber}</td>
                        <td>
                          {item.AmountBilled.toLocaleString("en-NG", {
                            useGrouping: true,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td>
                          {item.AmountPaid.toLocaleString("en-NG", {
                            useGrouping: true,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td>{currentDate.toLocaleDateString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className={styles.ReceiptTotalContainer}>
              <div></div>

              <div className={styles.ReceiptTotal}>
                <p>Total Payment</p>
                <div>
                  {user.receipts
                    .reduce((sum, fee) => sum + fee.AmountPaid, 0)
                    .toLocaleString("en-NG", {
                      useGrouping: true,
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReceiptItem;
