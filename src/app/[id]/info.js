import { CiStar } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

import React from "react";

const Info = ({ name, price, addCart, deviceWidth, qty, setCurrProduct }) => {
  return (
    <div className="flex flex-col lg:justify-between">
      <div>
        <p className="text-lg lg:text-2xl">{name}</p>
        <p className="text-xs text-neutral-400 my-3">productCode: 327288483</p>
        <p className="text-2xl font-semibold w-full lg:border-t">N {price}</p>
        <p className="text-xs lg:my-3">In stock</p>

        <div className="flex ml-1">
          <CiStar className="fill-[#E3CC00] h-6 w-6" />
          <CiStar className="fill-[#E3CC00] h-6 w-6" />
          <CiStar className="fill-[#E3CC00] h-6 w-6" />
          <CiStar className="fill-[#E3CC00] h-6 w-6" />
          <CiStar className="fill-[#E3CC00] h-6 w-6" />
        </div>
      </div>

      <div>
        <div className="flex w-full items-center justify-between mt-4">
          <div className="flex items-center">
            <p>Quantity: </p>
            <div className="flex my-4 ml-2">
              <div
                onClick={() =>
                  setCurrProduct((prev) =>
                    prev.qty > 1 ? { ...prev, qty: prev.qty - 1 } : prev
                  )
                }
                className="w-10 h-8 flex items-center justify-center border cursor-pointer hover:bg-neutral-100"
              >
                -
              </div>
              <div className="w-10 h-8 flex items-center justify-center border">
                {qty}
              </div>
              <div
                onClick={() =>
                  setCurrProduct((prev) => ({
                    ...prev,
                    qty: prev.qty + 1,
                  }))
                }
                className="w-10 h-8 flex items-center justify-center border cursor-pointer hover:bg-neutral-100"
              >
                +
              </div>
            </div>
          </div>
          <div className="flex">
            <IoShareSocial className="w-6 h-6 mx-3" />
            <FaHeart className="w-6 h-6 mx-2" />
          </div>
        </div>
        {deviceWidth > 1024 && (
          <section className="w-full flex justify-center items-center bg-white pb-2">
            <div
              onClick={addCart}
              className="bg-[#4D4875] rounded-lg h-12 flex items-center justify-center w-full cursor-pointer hover:bg-[#3f3a5f] shadow-lg"
            >
              <p className="text-white font-[500] text-lg">Add to cart</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Info;
