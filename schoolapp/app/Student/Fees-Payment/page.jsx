"use client";
import { UserProvider } from "@/app/Components/StudentDashBoard/context/UserProvider";
import FeesPaymentItem from "@/app/Components/StudentDashBoard/Pages/FeesPaymentItem";
import React from "react";

const Fees_Payment = () => {
  return (
    <UserProvider>
      <FeesPaymentItem />
    </UserProvider>
  );
};

export default Fees_Payment;
