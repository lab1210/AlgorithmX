"use client";
import React, { useState } from "react";
import Layout from "../../Studentlayout";
import styles from "../../../css/layout.module.css";
import { useUser } from "../context/UserProvider";
import styles2 from "../../../Components/StudentDashBoard/Pages/css/Fees.module.css";
import { FaArrowRight } from "react-icons/fa";
import dummysession from "../../../Components/session";
import dummyterm from "../../../Components/Term";

const FeesPaymentItem = () => {
  const { user, isLoading } = useUser();
  const [term, setTerm] = useState("");
  const [session, setSession] = useState(dummysession[0]);
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
                <div>
                  <FaArrowRight />
                </div>
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
                <div>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
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
              <button>Print</button>
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
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {user.fees.map((item, index) => {
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.purpose}</td>
                    <td>{item.TransactionNumber}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeesPaymentItem;
