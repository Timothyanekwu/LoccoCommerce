"use client";

import DataContext from "@/context/context";
import OrderData from "./ordersData";
import { useContext } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Orders = () => {
  const router = useRouter();
  const { orders } = useContext(DataContext);

  return (
    <div className="cartPadding pt-3">
      <div className="mt-5 h-10 flex items-center border-y border-[#545454]">
        <p className="text-lg font-[500]">Order Page</p>
      </div>

      <div className="">
        <div className="mt-5 pt-4 lg:mt-0 lg:w-[70%] lg:p3 lg:mr-3 mb-8">
          {orders.map((item) => {
            return (
              <OrderData
                key={item._id}
                id={item._id}
                ordNum={item.orderNumber}
                prodNum={item.products.length}
                date={item.createdAt}
                router={router}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
