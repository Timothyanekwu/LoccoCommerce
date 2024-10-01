"use client";

import React from "react";
import DataContext from "@/context/context";
import { useContext } from "react";

const Summary = () => {
  const { cart, deviceWidth } = useContext(DataContext);

  const total = cart.reduce((prev, curr) => prev + curr.price, 0);
  return (
    <div className="pt-5 lg:pt-0 lg:flex-grow">
      <div className="border-b flex justify-between items-center h-14 px-3">
        <p className="font-semibold lg:text-sm">ORDER SUMMARY</p>
        <p className="underline underline-offset-4 text-[#4D4875] mr-7 lg:text-xs">
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
      {deviceWidth >= 1024 && (
        <div className="rounded-md bg-[#4D4875] flex lg:mx-3 h-10 justify-center py-2 px-3 items-center mt-4">
          <p className="text-xs text-white">CHECKOUT</p>
        </div>
      )}
    </div>
  );
};

export default Summary;
