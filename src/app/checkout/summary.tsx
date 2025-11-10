"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/hooks/useAppContext";

const Summary = () => {
  const router = useRouter();
  const { cart } = useAppContext();
  const itemsTotal = cart.reduce((a, b) => a + b.price, 0);

  return (
    <div className="pt-5 lg:pt-0 lg:flex-grow">
      <div className="border-b flex justify-between items-center h-14 px-3">
        <p className="font-semibold lg:text-sm">ORDER SUMMARY</p>
        <div
          onClick={() => router.push("/cart")}
          className="cursor-pointer bg-black rounded-lg px-3 py-2"
        >
          <p className="text-[#4D4875] text-white lg:text-sm">Modify Cart</p>
        </div>
      </div>

      <div className="text-sm">
        <div className="flex items-center justify-between h-10 px-10">
          <p>Item Total</p>
          <p className="text-base font-semibold">N {itemsTotal}</p>
        </div>
        <div className="flex items-center justify-between h-10 px-10">
          <p>Delivery Fee</p>
          <p className="text-base font-semibold">N 1500</p>
        </div>
        <div className="flex items-center justify-between h-10 px-10">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-base font-semibold">N {itemsTotal + 1500}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
