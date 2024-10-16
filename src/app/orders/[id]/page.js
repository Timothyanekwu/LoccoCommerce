"use client";

import { useParams } from "next/navigation";
import { useEffect, useContext } from "react";
import Products from "./products";
import DataContext from "@/context/context";
import React from "react";

const OrderDetail = () => {
  const { orders, currOrder, setCurrOrder } = useContext(DataContext);
  const { id } = useParams(); // Fetch the id from the URL

  useEffect(() => {
    if (orders && id) {
      const foundProduct = orders.find((item) => item._id === id);
      if (foundProduct) {
        setCurrOrder(foundProduct);
      } else {
        console.warn("Product not found!");
      }
    }
  }, [orders, id]);

  const theDate = new Date(currOrder.createdAt);

  return (
    <div className="lg:w-[70vw] md:w-[85vw] w-full px-4 mx-auto">
      <div className="w-full h-fit p-3 border-b border-b-[#898989] flex justify-between">
        <div className="flex items-start justify-between w-full">
          <div>
            <p className="font-semibold text-base">{`${String(
              theDate.getDay()
            ).padStart(2, "0")}-${String(theDate.getMonth()).padStart(
              2,
              "0"
            )}-${theDate.getFullYear()}`}</p>
            <p className="text-xs">Order ID: {currOrder.orderNumber}</p>
            <p className="text-xs">{currOrder?.products?.length} products</p>
          </div>
        </div>
      </div>
      <div className="w-full h-70 md:flex items-between mt-4">
        <div className="w-full mr-2 border-[#898989] border rounded-lg">
          <div className="w-full h-8 px-3 flex items-center border-b border-b-[#898989]">
            <p className="text-sm font-semibold">PAYMENT INFORMATION</p>
          </div>
          <div className="p-3">
            <p className="text-base font-semibold">Payment Method</p>
            <p className="text-sm">{currOrder.payMethod}</p>
          </div>
          <div className="p-3">
            <p className="text-base font-semibold">Payment details</p>
            <p className="text-sm">Items total: N {currOrder.totalPrice}</p>
            <p className="text-sm">Delivery fee: N 1500</p>
            <p className="text-sm">Total: N 6500</p>
          </div>
        </div>
        <div className="w-full md:ml-2 mt-4 md:mt-0 border-[#898989] border rounded-lg">
          <div className="w-full h-8 px-3 flex items-center border-b border-b-[#898989]">
            <p className="text-sm font-semibold">DELIVERY INFORMATION</p>
          </div>

          <div className="p-3">
            <p className="text-base font-semibold">Shipping address</p>
            <p className="text-sm">{currOrder.customerFullName}</p>
            <p className="text-sm">{currOrder.customerAddress}</p>
            <p className="text-base font-semibold mt-5">Shipping Details</p>
            <p className="text-sm">Door Delivery</p>
            <p className="text-sm">
              Fufiled between 02 December and 04 December.
            </p>
          </div>
        </div>
      </div>
      <div className="my-8">
        <p className="font-semibold">Products in this order</p>
        {currOrder?.products?.map((item) => {
          return (
            <Products
              name={item.name}
              qty={item.qty}
              price={item.price}
              img={item.img[0]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OrderDetail;
