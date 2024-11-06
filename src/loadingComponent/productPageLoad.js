"use client";

import React, { useEffect, useState } from "react";
import { useContext } from "react";
import DataContext from "@/context/context";

const ProductPageLoad = () => {
  const { deviceWidth } = useContext(DataContext);

  return (
    <div className="mt-10 prodPagePadding">
      <div className="lg:flex w-full">
        <div className="lg:flex lg:w-[90%] lg:mr-4">
          <div className="lg:mr-7">
            <div className="w-full lg:w-80 h-80 relative bg-neutral-100 py-2 p-2 animate-colorChange">
              {/* the large image */}
            </div>
            <div className="flex my-3 lg:w-80">
              <div
                className={`w-20 h-20 relative mx-2 border rounded-md cursor-pointer`}
              >
                {/* the small images under the large one */}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:justify-between">
            {/* the info component */}
            <div>
              <div className="text-lg lg:text-2xl">{/* name of product */}</div>

              <div className="text-2xl font-semibold w-full lg:border-t">
                {/* price of product */}
              </div>
              <div className="flex ml-1">{/* stars rating */}</div>
            </div>

            <div>
              <div className="flex w-full items-center justify-between mt-4">
                <div className="flex items-center">{/* quantity to buy */}</div>
                <div className="flex">{/* share and like */}</div>
              </div>
              {deviceWidth > 1024 && (
                <section className="w-full flex justify-center items-center bg-white pb-2">
                  <div className="bg-[#4D4875] rounded-lg h-12 flex items-center justify-center w-full cursor-pointer hover:bg-[#3f3a5f] shadow-lg">
                    {/* add to cart */}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
        {/* LOCATIONS COMPONENT */}
        <div className="border-t my-4 lg:my-0 lg:px-3 py-3 lg:border-t-0">
          <div>{/* choose your location */}</div>

          <select className="w-full h-12 flex items-center px-3 border rounded-lg my-2 justify-between">
            {/* select state */}
          </select>

          <select className="w-full h-12 flex items-center px-3 border rounded-lg my-2 justify-between">
            {/* select local government */}
          </select>

          <div className="flex mt-3">
            <div className="w-10 h-10 rounded-md border-black border mr-3 flex items-center justify-center">
              <div className="w-7 h-7">{/* truck Icon */}</div>
            </div>

            <div className="flex-grow w-full">
              <div className="font-semibold">{/* Door Delivery */}</div>
              <div>{/* component under door delivery */}</div>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="w-10 h-10 rounded-md border-black border mr-3 flex items-center justify-center">
              <div className="w-7 h-7">{/* truck Icon */}</div>
            </div>

            <div className="flex-grow w-full">
              <div className="font-semibold">{/* Door Delivery */}</div>
              <div>{/* component under door delivery */}</div>
            </div>
          </div>
        </div>
      </div>

      {deviceWidth <= 1024 && (
        <section className="w-full flex justify-center items-center bg-white mt-3 pb-2 sticky right-0 left-0 bottom-0">
          <div className="bg-[#4D4875] rounded-lg h-14 flex items-center justify-center w-full cursor-pointer hover:bg-[#3f3a5f] shadow-lg">
            {/* add to cart */}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPageLoad;
