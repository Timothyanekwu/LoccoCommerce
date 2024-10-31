// SideBar.jsx

"use client";

import React, { useContext } from "react";

import DataContext from "@/context/context";

const SideBar = () => {
  const {
    handleCat,
    handlePrice,
    selectedOption,
    discOption,
    handleDisc,
    clearFilter,
  } = useContext(DataContext);

  const categories = [
    "Fashion",
    "Electronics",
    "Home",
    "Books",
    "Gadgets",
    "Furniture",
    "Wine",
  ];

  const priceRange = [
    {
      msg: "Under 10000",
      value: [10, 10000],
    },
    {
      msg: "10000 - 50000",
      value: [10000, 50000],
    },
    {
      msg: "50000 - 100000",
      value: [50000, 100000],
    },
    {
      msg: "100000 - 150000",
      value: [100000, 150000],
    },

    {
      msg: "150000 - 200000",
      value: [150000, 200000],
    },
  ];

  const discount = [
    "Free Delivery",
    "25% discount or more",
    "40% discount or more",
    "50% discount or more",
  ];

  return (
    <div className="h-fit w-60 bg-white border-x-2 sideBar py-5">
      {/* Categories */}
      <div className="border-b">
        <div className="h-8 w-full px-3 flex items-center">
          <p>CATEGORIES</p>
        </div>
        <div>
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCat(item)}
              className="h-8 w-full hover:bg-neutral-100 flex items-center px-4 cursor-pointer"
            >
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="border-b pt-5 pb-3">
        <div className="h-8 w-full px-3 flex items-center">
          <p>PRICE</p>
        </div>
        <div>
          {priceRange.map((item, index) => (
            <label
              key={index}
              className="h-8 w-full hover:bg-neutral-100 flex items-center px-4 cursor-pointer"
            >
              <input
                type="radio"
                name="priceOptions"
                value={item.value}
                id={`priceOption${index}`}
                checked={selectedOption === item.msg}
                onChange={() => handlePrice(item.msg, item.value)} // Handle price change
              />
              <p className="text-sm ml-2">{item.msg}</p>
            </label>
          ))}
        </div>
        <div
          onClick={clearFilter}
          className="w-full h-10 px-3 flex items-center"
        >
          <p className="underline underline-offset-2 cursor-pointer text-[#4D4875] text-sm">
            Cancel filter
          </p>
        </div>
      </div>

      {/* Discounts */}
      <div className="border-b pt-5">
        <div className="h-8 w-full px-3 flex items-center">
          <p>SPECIAL OFFER</p>
        </div>
        <div>
          {discount.map((item, index) => (
            <label
              key={index}
              className="h-8 w-full hover:bg-neutral-100 flex items-center px-4 cursor-pointer"
            >
              <input
                type="radio"
                name="discOptions"
                value={item}
                id={`priceOption${index}`}
                checked={discOption === item}
                onChange={() => handleDisc(item)} // Handle price change
              />
              <p className="text-sm ml-2">{item}</p>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
