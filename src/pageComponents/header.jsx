"use client";

import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import DataContext from "@/context/context";
import { useRouter } from "next/navigation";
// import CategoryNav from "./categories";

const Head = () => {
  const { search, handleSearch, setSearch, cart } = useContext(DataContext);
  const router = useRouter();
  return (
    <div className="bg-white w-full shadow-md pb-2 sticky top-0 z-20 headerPadding">
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
            <span
              onClick={() => router.push("/cart")}
              className="flex items-center cursor-pointer"
            >
              <p className="text-sm">Cart</p>
              <div className="relative ml-1">
                {cart.length > 0 && (
                  <div className="text-[9px] font-bold flex items-center justify-center rounded-full bg-green-500 text-white h-3 w-3 absolute top-[-4px] right-[-2px]">
                    {cart.length}
                  </div>
                )}

                <TiShoppingCart className="h-6 w-6" />
              </div>
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
