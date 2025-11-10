"use client";

import React from "react";
import Search from "../../../public/icons/search";
import Cart from "../../../public/icons/cart";
import Profile from "../../../public/icons/profile";
import Burger from "../../../public/icons/burger";
import SearchItem from "./searchItem";
import { useSearchParams, useRouter } from "next/navigation";

const Header = () => {
  const searchParam = useSearchParams();
  const router = useRouter();

  const testButton = () => {
    const setParams = new URLSearchParams(searchParam.toString());
    setParams.set("query", "search");
    // setParams.delete("page");
    router.push(`/marketplace?${setParams.toString()}`);
  };
  return (
    <div>
      <div className="mx-auto bg-inherit w-full max-w-[1024px] h-20 flex justify-between items-center px-4 md:px-8 lg:px-20 gap-3">
        <div className="flex items-center gap-3">
          <Burger className="fill-black size-6 md:hidden" />
          <p className="text-3xl">LOCCO</p>
        </div>

        <div className="hidden md:flex flex-col md:flex-row md:items-center p-10 md:p-0 gap-8 md:gap-3 fixed md:relative bg-inherit h-full w-full md:w-fit top-0 left-0">
          <p className="border-b-neutral-700 w-full md:w-fit border-b md:border-none pb-2 md:p-0 px-2 md:text-sm md:h-fit">
            Shop Products
          </p>
          <p className="border-b-neutral-700 w-full md:w-fit border-b md:border-none pb-2 md:p-0 px-2 md:text-sm md:h-fit">
            Latest Products
          </p>
          <p
            onClick={testButton}
            className="border-b-neutral-700 w-full md:w-fit border-b md:border-none pb-2 md:p-0 px-2 md:text-sm md:h-fit"
          >
            Stores
          </p>
        </div>

        <div className="md:w-fit h-full flex items-center gap-4">
          {/* <div className="md:bg-input rounded-full h-[50%] flex md:gap-3 md:px-3 items-center md:w-fit">
            <Search className="fill-black md:size-5 md:opacity-25" />
            <input
              placeholder="Search products..."
              className="hidden md:block lg:w-60 h-full rounded-r-full outline-none md:text-sm"
            />
          </div> */}
          <SearchItem />

          <Cart className="md:size-5" />
          <Profile className="md:size-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
