"use client";

import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import DataContext from "@/context/context";
// import CategoryNav from "./categories";

const Head = () => {
  const { search, handleSearch, setSearch } = useContext(DataContext);
  return (
    <div className="bg-white w-full shadow-md pb-2 sticky top-0 z-10 headerPadding">
      <div className="px-3 pt-4">
        <div className="flex w-full justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="text-2xl font-semibold">LOCCO</p>
            {/* input */}
            <div className="inputHd ml-3">
              <form
                onSubmit={handleSearch}
                className="hover:border hover:border-[#4D4875] bg-[#efefef] rounded-lg h-10 flex items-center px-3"
              >
                <FiSearch className="w-7 h-7 stroke-[#a5a5a5] mr-1" />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  className="h-full w-full focus:outline-none text-sm bg-inherit"
                  placeholder="Search for Products..."
                />
              </form>
            </div>
          </div>

          <div className="flex items-center">
            <span className="mx-3">
              <p className="text-sm">Sign in</p>
            </span>
            <span className="flex items-center">
              <p className="text-sm">Cart</p>
              <TiShoppingCart className="ml-1 h-6 w-6" />
            </span>
          </div>
        </div>
        <div className="inputBd">
          <div className="w-full hover:border hover:border-[#4D4875] bg-[#efefef] rounded-xl h-10 flex items-center px-3">
            <FiSearch className="w-7 h-7 stroke-[#a5a5a5] mr-3" />
            <input
              className="h-full w-full focus:outline-none text-sm bg-inherit"
              placeholder="Search for Products..."
            />
          </div>
        </div>
      </div>
      {/* <CategoryNav /> */}
    </div>
  );
};

export default Head;
