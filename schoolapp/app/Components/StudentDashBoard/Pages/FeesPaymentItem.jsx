"use client";
import React, { useEffect, useState } from "react";
import Layout from "../../Studentlayout";
import styles from "../../../css/layout.module.css";
import { useUser } from "../context/UserProvider";
import styles2 from "../../../Components/StudentDashBoard/Pages/css/Fees.module.css";
import { FaArrowRight } from "react-icons/fa";
import dummysession from "../../../Components/session";
import dummyterm from "../../../Components/Term";
import { LuArrowDownUp } from "react-icons/lu";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const FeesPaymentItem = () => {
  const { user, isLoading } = useUser();
  const [term, setTerm] = useState("");
  const [session, setSession] = useState(dummysession[0]);
  const searchParams = useSearchParams();
  const schoolId = searchParams.get("schoolid");
  const userId = searchParams.get("userid");

  const [downloadPdf, setDownloadPdf] = useState(null);

  useEffect(() => {
    import("../../Print/DownloadasPdf").then((module) => {
      setDownloadPdf(() => module.default);
    });
  });
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        {" "}
        <div className={styles.spinner}></div> {/* New: Spinner element */}
      </div>
    );
  }

  const handleDownloadPDF = () => {
    if (downloadPdf) {
      downloadPdf(
        `.${styles.thirdCard}`,
        `${user.username}-Statement-of-Account-${session}-${term}.pdf`
      );
    } else {
      console.error("downloadPdf not loaded yet.");
    }
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const totalAmountBilled = user.fees.reduce(
    (sum, fee) => sum + fee.AmountBilled,
    0
  );

  const totalAmountPaid = user.fees.reduce(
    (sum, fee) => sum + fee.AmountPaid,
    0
  );

  const totalAmountPending = totalAmountBilled - totalAmountPaid;

  return (
    <Layout>
      <div className={styles2.FeeContainer}>
        <div className={styles2.firstCard}>
          <Link
            href={`/Student/Fees-Payment/Make-Payment?schoolid=${schoolId}&userid=${userId}`}
            className={styles2.firstCardItem1}
          >
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
                <div>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={`/Student/Fees-Payment/Receipt?schoolid=${schoolId}&userid=${userId}`}
            className={styles2.firstCardItem2}
          >
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
                <div>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles2.secondCard}>
          <h3>Statement of Account</h3>
        </div>
        <div className={styles2.thirdCard}>
          <div className={styles2.firstrow}>
            <div className={styles2.dropdown}>
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
            <div className={styles2.dropdown}>
              <label htmlFor="term">Select Term :</label>
              <select
                name="term"
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                }}
                required
              >
                {dummyterm.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <button onClick={handleDownloadPDF}>Print</button>
            </div>
          </div>
          <div className={styles2.secondrow}>
            <p>Name: {user.username}</p>
            <p>Student ID: {user.userId}</p>
            <p>Class: {user.class}</p>
            <p>Session: {session}</p>
          </div>
          <div className={styles2.feesTable}>
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Purpose</th>
                  <th>Transaction Number</th>
                  <th>Amount Billed</th>
                  <th>Amount Paid</th>
                  <th>Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {user.fees.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.purpose}</td>
                      <td>{item.TransactionNumber}</td>
                      <td>{formatCurrency(item.AmountBilled)}</td>
                      <td> {formatCurrency(item.AmountPaid)}</td>
                      <td
                        className={
                          item.PaymentDate === "Pending"
                            ? styles2.red
                            : styles2.filter
                        }
                      >
                        {item.PaymentDate}
                        <span>
                          <LuArrowDownUp />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className={styles2.tableBottom}>
              <div className={styles2.tableBottomItem}>
                <p>
                  Amount brought forward:
                  <span>Nil</span>
                </p>
              </div>
              <div className={styles2.tableBottomItem}>
                <p>
                  Total Charges:
                  <span>{formatCurrency(totalAmountBilled)}</span>
                </p>
              </div>
              <div className={styles2.tableBottomItem}>
                <p>
                  Amount Paid:
                  <span>{formatCurrency(totalAmountPaid)}</span>
                </p>
              </div>
              <div className={styles2.tableBottomItem}>
                <p>
                  Amount Pending:{" "}
                  <span className={styles2.redSpan}>
                    {formatCurrency(totalAmountPending)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeesPaymentItem;
