"use client";

import React, { useState } from "react";
import Filter from "../../../public/icons/filter";
import Angle from "../../../public/icons/angle";
import { useAppContext } from "@/hooks/useAppContext";

const Sub = () => {
  const [view, setView] = useState<boolean>(false);
  const { handleSort } = useAppContext();

  return (
    <div className="flex w-full justify-between items-center h-10 mb-5">
      <p className="text-2xl  font-semibold"> Products</p>
      <div className="flex items-center gap-2 ">
        <p className="hidden md:block text-xs text-neutral-500">
          Showing 1-20 of 1000 Products
        </p>
        <div
          onClick={() => setView((prev) => !prev)}
          className="flex items-center rounded-lg cursor-pointer bg-input border-lg pl-3 relative"
        >
          <p className="text-xs underline">Sort by</p>
          <Angle className="-rotate-90 size-8 p-0" />
          {view && (
            <div className="absolute bg-inherit top-full mt-3 z-10 text-sm right-0 p-2 rounded-lg shadow-lg flex flex-col">
              <div
                onClick={() => handleSort("nameAsc")}
                className="border-b border-b-neutral-300 flex items-center py-1.5 hover:bg-neutral-200 cursor-pointer px-2 transition-colors duration-200"
              >
                nameAsc
              </div>
              <div
                onClick={() => handleSort("nameDesc")}
                className="border-b border-b-neutral-300 flex items-center py-1.5 hover:bg-neutral-200 cursor-pointer px-2 transition-colors duration-200"
              >
                nameDesc
              </div>
              <div
                onClick={() => handleSort("priceAsc")}
                className="border-b border-b-neutral-300 flex items-center py-1.5 hover:bg-neutral-200 cursor-pointer px-2 transition-colors duration-200"
              >
                priceAsc
              </div>
              <div
                onClick={() => handleSort("priceDesc")}
                className=" flex items-center py-1.5 hover:bg-neutral-200 cursor-pointer px-2 transition-colors duration-200"
              >
                priceDesc
              </div>
            </div>
          )}
        </div>

        <div className="h-9 w-9 bg-input rounded-lg cursor-pointer flex items-center justify-center lg:hidden">
          <Filter className="size-4 opacity-85" />
        </div>
      </div>
    </div>
  );
};

export default Sub;
