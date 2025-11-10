"use client";

import { useAppContext } from "@/hooks/useAppContext";
import React from "react";

const PayOptions = () => {
  const { payType, setPayType } = useAppContext();

  return (
    <div className="border-b px-3 pt-5">
      <div className="border-b flex justify-between items-center h-14 px-3">
        <p className="font-semibold">PAYMENT OPTIONS</p>
      </div>
      <div>
        <div className="flex items-center h-fit px-8 py-2">
          <input
            type="radio"
            checked={payType === "Pay now"}
            onChange={() => setPayType("Pay now")}
          />
          <div className="ml-3">
            <p className="text-lg font-semibold">Pay Now</p>
            <p className="text-sm">
              Pay securely and instantly using your credit/debit card or bank
              transfer—no hassle, just convenience
            </p>
          </div>
        </div>
        <div className="flex items-center h-fit px-8 py-2">
          <input
            type="radio"
            checked={payType === "Pay on delivery"}
            onChange={() => setPayType("Pay on delivery")}
          />
          <div className="ml-3">
            <p className="text-lg font-semibold">Pay on delivery</p>
            <p className="text-sm">
              Payment on delivery for a secure, convenient, and hassle-free
              experience—pay only when your order arrives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayOptions;
