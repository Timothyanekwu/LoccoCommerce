"use client";

import React from "react";
import { useContext } from "react";
import DataContext from "@/context/context";
import CartProduct from "./product";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Page = () => {
  const { cart, deviceWidth } = useContext(DataContext);

  return (
    <div className="cartPadding pt-3">
      <div className="mt-5 h-10 flex items-center border-y border-[#545454]">
        <p className="text-lg font-[500]">Cart Page</p>
      </div>

      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:h-fit flex lg:flex-col lg:justify-normal justify-between items-center lg:items-start text-lg lg:border-b-0 border-b py-3 lg:px-3 border-[#545454] lg:flex-grow">
          <div className="rounded-lg bg-[#4D4875] h-fit py-2 px-3 flex items-center lg:mb-3 lg:hidden">
            <FaLongArrowAltLeft className="fill-white mr-2" />
            <p className="text-xs text-white">Continue shopping</p>
          </div>
          <div className="lg:w-full">
            <p className="lg:block hidden">CART SUMMARY</p>
            <div className="lg:flex lg:justify-between lg:items-center lg:w-full lg:my-2">
              <p className="text-sm">Sub Total (4 items)</p>
              <p className="text-sm font-semibold lg:text-lg">N 40,000</p>
            </div>

            <p className="text-xs text-neutral-500">
              Delivery fees not included yet
            </p>
            {deviceWidth >= 1024 && (
              <div className="rounded-md bg-[#4D4875] w-full h-10 justify-center py-2 px-3 flex items-center lg:mb-3 mt-4 lg:block">
                <p className="text-xs text-white">CHECKOUT</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 lg:mt-0 lg:w-[77%] lg:p3 lg:mr-3 mb-8">
          {cart.map((item) => {
            return (
              <CartProduct name={item.name} price={item.price} img={item.img} />
            );
          })}
        </div>
      </div>

      {deviceWidth < 1024 && (
        <div className="bg-white h-16 w-full sticky bottom-0 p-2 my-5">
          <div className="bg-[#4D4875] rounded-md flex items-center h-full justify-center w-full">
            <p className="text-white text-sm">Proceed to Checkout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
