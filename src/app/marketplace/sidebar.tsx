"use client";

import React from "react";
import Filter from "../../../public/icons/filter";
import Angle from "../../../public/icons/angle";
import PriceRangeSlider from "./slider";
import { useAppContext } from "@/hooks/useAppContext";
import { useState } from "react";

const SideBar = () => {
  const { handleCat, handlePrice } = useAppContext();
  const [range, setRange] = useState([0, 500]);

  const filters = [
    {
      name: "Electronics & Gadgets",
      subcategories: [
        "Mobile Phones & Accessories",
        "Computers & Laptops",
        "Cameras & Photography",
        "Wearables & Smart Devices",
      ],
    },
    {
      name: "Fashion & Apparel",
      subcategories: [
        "Men’s Clothing",
        "Women’s Clothing",
        "Kids & Baby Clothing",
        "Shoes & Footwear",
        "Bags & Accessories",
      ],
    },
    {
      name: "Beauty & Personal Care",
      subcategories: [
        "Makeup",
        "Skincare",
        "Haircare",
        "Fragrances",
        "Grooming Products",
      ],
    },
    {
      name: "Home & Living",
      subcategories: [
        "Furniture",
        "Kitchenware",
        "Home Décor",
        "Bedding & Bath",
        "Cleaning Supplies",
      ],
    },
    {
      name: "Groceries & Food",
      subcategories: [
        "Fresh Produce",
        "Packaged Foods",
        "Beverages",
        "Organic & Health Foods",
      ],
    },

    {
      name: "Sports & Outdoors",
      subcategories: ["Exercise & Gym Equipment", "Outdoor Gear", "Sportswear"],
    },
    {
      name: "Toys, Kids & Baby",
      subcategories: [
        "Toys & Games",
        "Baby Gear & Strollers",
        "School Supplies",
      ],
    },
    {
      name: "Automotive",
      subcategories: ["Car Accessories", "Motorcycle Gear", "Spare Parts"],
    },
    {
      name: "Books & Media",
      subcategories: ["Books & eBooks", "Movies & Music", "Stationery"],
    },
  ];

  return (
    <div className="border rounded-xl border-neutral-300 min-h-[80vh] p-5  - hidden fixed bg-white top-0 left-0 w-full h-full z-10 md:px-14 lg:px-5 lg:relative - lg:block lg:h-fit">
      <div className="flex items-center justify-between border-b border-b-neutral-300 pb-3">
        <p>Filters</p>
        <Filter />
      </div>

      <div className="border-b border-b-neutral-300">
        <div className="text-neutral-500 text-sm space-y-2 py-3">
          {filters.map((filter, index) => {
            return (
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-input pl-2 rounded-lg transition-colors duration-200"
                key={index}
                onClick={() => handleCat(filter.name)}
              >
                <p className="text-sm">{filter.name}</p>
                <Angle className="size-8 rotate-180" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-b border-b-neutral-300 pb-5">
        <div className="flex items-center justify-between py-3">
          <p>Price</p>
          <Angle className="size-8 rotate-90" />
        </div>

        <div>
          <PriceRangeSlider range={range} setRange={setRange} />
        </div>
      </div>

      <button
        onClick={() => handlePrice(range[0], range[1])}
        className="bg-black rounded-full w-full h-12 mt-3 text-white text-xs"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default SideBar;
