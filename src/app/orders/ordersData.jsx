import Image from "next/image";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const OrderData = ({ name, ordNum, prodNum, date, id, router }) => {
  const theDate = new Date(date);
  return (
    <div className="w-full h-fit p-3 border-b border-b-[#545454] flex justify-between">
      <div className="flex items-start justify-between w-full">
        <div>
          <p className="font-semibold text-base">{`${String(
            theDate.getDay()
          ).padStart(2, "0")}-${String(theDate.getMonth()).padStart(
            2,
            "0"
          )}-${theDate.getFullYear()}`}</p>
          <p className="text-xs">Order ID: {ordNum}</p>
          <p className="text-xs">{prodNum} products</p>
          {/* <div className="w-20 rounded-sm h-5 flex items-center justify-center bg-green-700 mt-3">
            <p className="text-xs text-white">DELIVERED</p>
          </div> */}
        </div>
        <div
          onClick={() => router.push(`/orders/${id}`)}
          className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded-sm"
        >
          <p>SEE DETAILS</p>
        </div>
      </div>
    </div>
  );
};

export default OrderData;
