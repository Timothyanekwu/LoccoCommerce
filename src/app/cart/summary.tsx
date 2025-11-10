"use client";

import React from "react";
import { useAppContext } from "@/hooks/useAppContext";
import { useRouter } from "next/navigation";

const Summary = () => {
  const { cart } = useAppContext();
  const router = useRouter();

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  const formatSubTotal = (
    amount: number,
    currency: string = "NGN",
    locale: string = "en-US"
  ): string => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amount);
  };

  const formattedSubtotal = formatSubTotal(subtotal);
  const formattedDeliveryFee = formatSubTotal(1500);

  const formattedTotal = formatSubTotal(subtotal + 1500);

  return (
    <div>
      <div>
        <p className="font-bold text-xl">Order Summary</p>
        <div className="flex flex-col gap-3 border-b border-b-neutral-300 pb-3">
          <div className="flex w-full justify-between items-center mt-3">
            <p className="text-neutral-500">Subtotal</p>
            <p className="font-bold">{formattedSubtotal}</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="text-neutral-500">Discount</p>
            <p className="font-bold text-green-700">-20%</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="text-neutral-500">Delivery fee</p>
            <p className="font-bold">{formattedDeliveryFee}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center w-full mt-5">
          <p>Total</p>
          <p className="text-xl font-bold">{formattedTotal}</p>
        </div>

        <div className="flex justify-between items-center gap-3 mt-5 lg:h-12">
          <div className="bg-input lg:h-full rounded-2xl py-4 lg:py-2 px-3 w-3/4 lg:w-3/5 flex items-center">
            <input
              type="text"
              placeholder="Add promo code"
              className="text-sm outline-none"
            />
          </div>
          <div className="bg-black lg:h-full rounded-2xl py-4 lg:py-2 px-3 w-full lg:w-fit flex-grow text-sm text-white flex justify-center items-center cursor-pointer">
            Apply code
          </div>
        </div>

        <div
          onClick={() => router.push("/checkout")}
          className="w-full py-4 lg:py-3 mt-4 lg:text-sm cursor-pointer gap-3 rounded-2xl bg-black text-white flex items-center justify-center"
        >
          <p>Go to Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
