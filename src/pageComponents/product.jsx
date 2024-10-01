"use client";

import React from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/navigation";

const Products = ({ name, img, price, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      key={id}
      className="w-full p-2 mb-5 cursor-pointer hover:bg-neutral-100 rounded-lg transition-colors flex flex-col justify-between "
    >
      <div>
        <div className="w-full h-40 relative mb-2">
          <Image
            src={img}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-full">
          <p className="font-[500] productFont leading-tight">{name}</p>

          {/* <div className="flex my-2">
          <div className="flex flex-wrap items-center mr-2">
            <p className="text-sm">4.2</p>
            <div className="flex ml-1">
              <CiStar className="fill-[#E3CC00] h-5 w-5" />
              <CiStar className="fill-[#E3CC00] h-5 w-5" />
              <CiStar className="fill-[#E3CC00] h-5 w-5" />
              <CiStar className="fill-[#E3CC00] h-5 w-5" />
              <CiStar className="fill-[#E3CC00] h-5 w-5" />
            </div>
            <p className="text-sm">(427)</p>
          </div>
        </div> */}

          <div className="mt-3">
            <p className="text-xl">N {price}</p>
          </div>
          <p className="text-xs">234 sold in the last month</p>
        </div>
      </div>
      <button className="bg-[#4D4875] text-xs text-white shadow-lg h-9 rounded-md w-full flex items-center justify-center mt-3">
        ADD TO CART
      </button>
    </div>
  );
};

export default Products;
