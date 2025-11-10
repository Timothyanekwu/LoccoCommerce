"use client";

import { useAppContext } from "@/hooks/useAppContext";
import React from "react";

const PlaceOrder = () => {
  const { placeOrder } = useAppContext();
  return (
    <div className="w-full p-4 bg-white my-6">
      <button
        onClick={placeOrder}
        className="w-full h-12 rounded-md bg-black flex items-center justify-center cursor-pointer"
      >
        <p className="text-white">Place Order</p>
      </button>
    </div>
  );
};

export default PlaceOrder;
