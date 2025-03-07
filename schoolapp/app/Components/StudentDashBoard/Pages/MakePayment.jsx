"use client";
import React, { useState } from "react";
import Layout from "../../Studentlayout";
import styles from "../../StudentDashBoard/Pages/css/payment.module.css";
import { FaRegCreditCard } from "react-icons/fa6";
import styles2 from "../../../css/layout.module.css";
import { FaRegFileAlt } from "react-icons/fa";
import dummysession from "../../session";
import { useUser } from "../context/UserProvider";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
const MakePaymentItem = () => {
  const [card, setCard] = useState(false);
  const [bankPin, setBankpin] = useState(false);
  const [details, setDetails] = useState(false);
  const [payment, setPayment] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [cardExpiryMonth, setCardExpiryMonth] = useState("");
  const [cardExpiryYear, setCardExpiryYear] = useState("");
  const [session, setSession] = useState(dummysession[0]);

  const [cardCvv, setCardCvv] = useState("");
  const [remember, setRemember] = useState(false);
  const { user, isLoading } = useUser();

  const searchParams = useSearchParams();
  const schoolId = searchParams.get("schoolid");
  const userId = searchParams.get("userid");
  const router = useRouter();

  if (isLoading) {
    return (
      <div className={styles2.loadingContainer}>
        {" "}
        <div className={styles2.spinner}></div> {/* New: Spinner element */}
      </div>
    );
  }
  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, "");

    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 - ");

    setCardNumber(formatted);
  };

  const checkFields = () => {
    if (
      cardNumber.length === 25 &&
      cardOwner.trim() !== "" &&
      cardExpiryMonth.trim() !== "" &&
      cardExpiryYear.trim() !== "" &&
      cardCvv.trim() !== ""
    ) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };

  const handleConfirm = () => {
    setConfirm(true);
    const totalAmount = adjustedFees.reduce(
      (acc, item) => acc + item.AmountBilled,
      0
    );

    router.push(`/Student/Fees-Payment/Receipt`);
  };
  const filteredFees = user.fees.filter(
    (item) => item.AmountBilled !== item.AmountPaid
  );

  const adjustedFees = filteredFees.map((item) => {
    if (item.AmountBilled > item.AmountPaid) {
      return {
        ...item,
        AmountBilled: item.AmountBilled - item.AmountPaid,
      };
    }
    return item;
  });

  return (
    <Layout>
      <div className={styles.MakePaymentGrid}>
        <div className={styles.MakePaymentItem1}>
          <div className={styles.container}>
            <div className={styles.block1}>
              <span
                {...{
                  className: card || bankPin ? styles.done : styles.notdone,
                }}
              >
                {" "}
                &#10004;
              </span>
              <div
                {...{
                  className:
                    card || bankPin ? styles.linecompleted : styles.line,
                }}
              ></div>
            </div>
            <div className={styles.text}>
              <p>Choose payment method</p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.block1}>
              <span
                {...{
                  className: details ? styles.done : styles.notdone,
                }}
              >
                &#10004;
              </span>
              <div
                {...{
                  className: details ? styles.linecompleted : styles.line,
                }}
              ></div>
            </div>
            <div className={styles.text}>
              <p>Fill details</p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.block1}>
              <span
                {...{
                  className: payment ? styles.done : styles.notdone,
                }}
              >
                {" "}
                &#10004;
              </span>
              <div
                {...{
                  className: payment ? styles.linecompleted : styles.line,
                }}
              ></div>
            </div>
            <div className={styles.text}>
              <p>Make Payment</p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.Lastcheck}>
              <span
                {...{
                  className: confirm ? styles.done : styles.notdone,
                }}
              >
                {" "}
                &#10004;
              </span>
              <p>Confirm</p>
            </div>
          </div>
        </div>
        <div className={styles.MakePaymentItem2}>
          <h2>Payment Options</h2>
        </div>
        <div className={styles.MakePaymentItem3}>
          <div className={styles.paymentOption}>
            <div className={styles.paymentOption1}>
              <div className={styles.debit}>
                <div className={styles.CardRow1}>
                  <span
                    className={card ? styles.done : styles.notdone}
                    onClick={() => {
                      bankPin
                        ? setBankpin(false) & setCard((prev) => !prev)
                        : setCard((prev) => !prev);
                    }}
                  >
                    &#10004;
                  </span>
                  <h3>Credit/Debit Card</h3>
                </div>
                <div className={styles.cardLogo}>
                  <img src="/CardLogo.png" alt="" />
                </div>
              </div>
              <div className={card ? styles.secondRow : styles.hide}>
                <div className={styles.inputItem}>
                  <div
                    className={
                      cardNumber.length > 0 && cardNumber.length < 25
                        ? styles.labelTexterror
                        : cardNumber.length === 25
                        ? styles.labelText
                        : cardNumber.length === 0
                        ? styles.labelText
                        : styles.labelText
                    }
                  >
                    <label htmlFor="cardNumber">Card number</label>
                    <p>Enter the 16-digit card number on the card</p>
                  </div>
                  <div className={styles.cardcheck}>
                    <span className={styles.cardIcon}>
                      <FaRegCreditCard size={40} />
                    </span>
                    <input
                      type="text"
                      className={styles.inputwithIcon}
                      name="cardNumber"
                      onChange={(e) => {
                        formatCardNumber(e.target.value);
                        checkFields();
                      }}
                      value={cardNumber}
                      maxLength="25"
                      style={
                        cardNumber.length > 0 && cardNumber.length < 25
                          ? { border: "2px solid red" }
                          : {}
                      }
                    />
                  </div>
                  <div>
                    {cardNumber.length === 25 ? (
                      <span className={styles.done}>&#10004;</span>
                    ) : cardNumber.length > 0 && cardNumber.length < 25 ? (
                      <span className={styles.error}>&#x2715;</span>
                    ) : (
                      <span className={styles.notdone}>&#10004;</span>
                    )}
                  </div>
                </div>
                <div className={styles.inputItem}>
                  <div className={styles.labelText}>
                    <label htmlFor="cardOwner">Card Owner</label>
                    <p>Enter the name on the card</p>
                  </div>
                  <div className={styles.cardcheck}>
                    <input
                      type="text"
                      name="cardOwner"
                      onChange={(e) => {
                        setCardOwner(e.target.value), checkFields();
                      }}
                      value={cardOwner}
                    />
                  </div>
                  <div></div>
                </div>
                <div className={styles.groupinputItem}>
                  <div className={styles.labelText}>
                    <label htmlFor="cardExpiryMonth">Expiry Date</label>
                    <p>Enter the expiration date of the card</p>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.expiry}>
                      <input
                        type="text"
                        name="cardExpiryMonth"
                        onChange={(e) => {
                          setCardExpiryMonth(e.target.value);
                          checkFields();
                        }}
                        value={cardExpiryMonth}
                      />
                      <h3>/</h3>
                      <input
                        type="text"
                        name="cardExpiryYear"
                        onChange={(e) => {
                          setCardExpiryYear(e.target.value);
                          checkFields();
                        }}
                        value={cardExpiryYear}
                        placeholder="23"
                      />
                    </div>

                    <div className={styles.cvv}>
                      <div className={styles.labelText}>
                        <label htmlFor="cardCvv">CVV Number</label>
                        <p>Security code</p>
                      </div>
                      <input
                        type="text"
                        name="cardCvv"
                        onChange={(e) => {
                          setCardCvv(e.target.value);
                          checkFields();
                        }}
                        value={cardCvv}
                        placeholder="012"
                      />
                    </div>
                  </div>

                  <div></div>
                </div>
                <div className={styles.remember}>
                  <input
                    type="checkbox"
                    id="remember"
                    className={styles.checkbox}
                    checked={remember}
                    onChange={(e) => {
                      setRemember(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="remember"
                    className={remember ? styles.labelchecked : styles.label}
                  >
                    Remember this card
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.paymentOption1}>
              <div className={styles.debit}>
                <div className={styles.CardRow1}>
                  <span
                    className={bankPin ? styles.done : styles.notdone}
                    onClick={() => {
                      card
                        ? setCard(false) & setBankpin((prev) => !prev)
                        : setBankpin((prev) => !prev);
                    }}
                  >
                    &#10004;
                  </span>
                  <h3>Bank Pin</h3>
                </div>
                <div className={styles.cardLogo}>
                  <img src="/CardLogo.png" alt="" />
                </div>
              </div>
              <div className={bankPin ? styles.secondRow : styles.hide}>
                <div className={styles.inputItem}>
                  <div
                    className={
                      cardNumber.length > 0 && cardNumber.length < 25
                        ? styles.labelTexterror
                        : cardNumber.length === 25
                        ? styles.labelText
                        : cardNumber.length === 0
                        ? styles.labelText
                        : styles.labelText
                    }
                  >
                    <label htmlFor="cardNumber">Card number</label>
                    <p>Enter the 16-digit card number on the card</p>
                  </div>
                  <div className={styles.cardcheck}>
                    <span className={styles.cardIcon}>
                      <FaRegCreditCard size={40} />
                    </span>
                    <input
                      type="text"
                      className={styles.inputwithIcon}
                      name="cardNumber"
                      onChange={(e) => {
                        formatCardNumber(e.target.value);
                        checkFields();
                      }}
                      value={cardNumber}
                      maxLength="25"
                      style={
                        cardNumber.length > 0 && cardNumber.length < 25
                          ? { border: "2px solid red" }
                          : {}
                      }
                    />
                  </div>
                  <div>
                    {cardNumber.length === 25 ? (
                      <span className={styles.done}>&#10004;</span>
                    ) : cardNumber.length > 0 && cardNumber.length < 25 ? (
                      <span className={styles.error}>&#x2715;</span>
                    ) : (
                      <span className={styles.notdone}>&#10004;</span>
                    )}
                  </div>
                </div>
                <div className={styles.inputItem}>
                  <div className={styles.labelText}>
                    <label htmlFor="cardOwner">Card Owner</label>
                    <p>Enter the name on the card</p>
                  </div>
                  <div className={styles.cardcheck}>
                    <input
                      type="text"
                      name="cardOwner"
                      onChange={(e) => {
                        setCardOwner(e.target.value), checkFields();
                      }}
                      value={cardOwner}
                    />
                  </div>
                  <div></div>
                </div>
                <div className={styles.groupinputItem}>
                  <div className={styles.labelText}>
                    <label htmlFor="cardExpiryMonth">Expiry Date</label>
                    <p>Enter the expiration date of the card</p>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.expiry}>
                      <input
                        type="text"
                        name="cardExpiryMonth"
                        onChange={(e) => {
                          setCardExpiryMonth(e.target.value);
                          checkFields();
                        }}
                        value={cardExpiryMonth}
                      />
                      <h3>/</h3>
                      <input
                        type="text"
                        name="cardExpiryYear"
                        onChange={(e) => {
                          setCardExpiryYear(e.target.value);
                          checkFields();
                        }}
                        value={cardExpiryYear}
                        placeholder="23"
                      />
                    </div>

                    <div className={styles.cvv}>
                      <div className={styles.labelText}>
                        <label htmlFor="cardCvv">CVV Number</label>
                        <p>Security code</p>
                      </div>
                      <input
                        type="text"
                        name="cardCvv"
                        onChange={(e) => {
                          setCardCvv(e.target.value);
                          checkFields();
                        }}
                        value={cardCvv}
                        placeholder="012"
                      />
                    </div>
                  </div>

                  <div></div>
                </div>
                <div className={styles.remember}>
                  <input
                    type="checkbox"
                    id="remember"
                    className={styles.checkbox}
                    checked={remember}
                    onChange={(e) => {
                      setRemember(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="remember"
                    className={remember ? styles.labelchecked : styles.label}
                  >
                    Remember this card
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paymentDetails}>
            <div
              className={
                card || bankPin ? styles.paymentDetailsCard : styles.hide
              }
            >
              <div className={styles.paymentDetailsTitle}>
                <FaRegFileAlt size={20} />
                <h3>Payment Details</h3>
              </div>
              <div className={styles.dropdown}>
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
              <div className={styles.bills}>
                {adjustedFees.map((item, index) => {
                  return (
                    <div key={index} className={styles.billItem}>
                      <p>{item.purpose}</p>
                      <p>
                        {item.AmountBilled.toLocaleString("en-NG", {
                          useGrouping: true,
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className={styles.totalBill}>
                <p>Total</p>
                <p className={styles.total}>
                  {adjustedFees
                    .reduce((acc, item) => acc + item.AmountBilled, 0)
                    .toLocaleString("en-NG", {
                      useGrouping: true,
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </p>
              </div>
              <div className={styles.confirmBtn}>
                <button onClick={handleConfirm}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MakePaymentItem4}>
          <div className={styles.paymentDetails}>
            <div
              className={
                card || bankPin ? styles.paymentDetailsCard : styles.hide
              }
            >
              <div className={styles.paymentDetailsTitle}>
                <FaRegFileAlt size={20} />
                <h3>Payment Details</h3>
              </div>
              <div className={styles.dropdown}>
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
              <div className={styles.bills}>
                {adjustedFees.map((item, index) => {
                  return (
                    <div key={index} className={styles.billItem}>
                      <p>{item.purpose}</p>
                      <p>
                        {item.AmountBilled.toLocaleString("en-NG", {
                          useGrouping: true,
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className={styles.totalBill}>
                <p>Total</p>
                <p className={styles.total}>
                  {adjustedFees
                    .reduce((acc, item) => acc + item.AmountBilled, 0)
                    .toLocaleString("en-NG", {
                      useGrouping: true,
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </p>
              </div>
              <div className={styles.confirmBtn}>
                <button onClick={handleConfirm}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MakePaymentItem;
