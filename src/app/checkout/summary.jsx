"use client";

import React from "react";
import DataContext from "@/context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const Summary = () => {
  const router = useRouter();
  const { cart, deviceWidth } = useContext(DataContext);

  const total = cart.reduce((prev, curr) => prev + curr.price, 0);
  return (
    <div className="pt-5 lg:pt-0 lg:flex-grow">
      <div className="border-b flex justify-between items-center h-14 px-3">
        <p className="font-semibold lg:text-sm">ORDER SUMMARY</p>
        <p
          onClick={() => router.push("/cart")}
          className="underline underline-offset-4 text-[#4D4875] mr-7 lg:text-xs cursor-pointer"
        >
          Modify Cart
        </p>
      </div>

      <div className="text-sm">
        <div className="flex items-center justify-between h-10 px-10">
          <p>Item Total</p>
          <p className="text-base font-semibold">N {total}</p>
        </div>
        <div className="flex items-center justify-between h-10 px-10">
          <p>Delivery Fee</p>
          <p className="text-base font-semibold">N 1500</p>
        </div>
        <div className="flex items-center justify-between h-10 px-10">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-base font-semibold">N {total + 1500}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
