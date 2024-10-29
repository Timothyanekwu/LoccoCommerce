"use client";

import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import DataContext from "@/context/context";
import { useRouter, usePathname } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";
// import CategoryNav from "./categories";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GrShop } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";

const Head = () => {
  const {
    search,
    handleSearch,
    setSearch,
    cart,
    accView,
    setAccView,
    profile,
  } = useContext(DataContext);
  const { logout } = useLogout();
  const router = useRouter();
  const pathname = usePathname();
  const options = [
    {
      icon: <GrShop />,
      name: "Orders",
    },
    {
      icon: <FaHeart />,
      name: "Liked products",
    },
  ];

  const toOrders = () => {
    router.push("/orders");
  };

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };
  return (
    !pathname.includes("auth") && (
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

            <div className="flex items-center h-full">
              <span className="mx-3 h-full relative">
                {profile && (
                  <div
                    onClick={() => setAccView((prev) => !prev)}
                    className="flex h-full items-center cursor-pointer group"
                  >
                    <VscAccount className="text-xl group-hover:fill-[#4D4875]" />
                    <p className="text-sm ml-2 lg:text-base group-hover:text-[#4D4875]">
                      {`Hi ${profile.firstName}!`}
                    </p>
                    <MdOutlineArrowDropDown className="text-xl group-hover:fill-[#4D4875]" />
                  </div>
                )}

                {accView && (
                  <div className="absolute top-12 shadow-lg left-0 bg-white w-44 border">
                    {options.map((item, index) => {
                      return (
                        <span
                          key={index}
                          onClick={() => item.name === "Orders" && toOrders()}
                          className="flex py-2 items-center cursor-pointer hover:bg-neutral-100 px-3"
                        >
                          <div>{item.icon}</div>

                          <p className="ml-3">{item.name}</p>
                        </span>
                      );
                    })}
                    <div
                      onClick={handleLogout}
                      className="w-full py-2 flex items-center justify-center border-t px-3 hover:bg-neutral-100 cursor-pointer"
                    >
                      <p className="text-[#4D4875]">LOGOUT</p>
                    </div>
                  </div>
                )}
              </span>
              <span
                onClick={() => router.push("/cart")}
                className="flex items-center cursor-pointer"
              >
                <p className="text-sm lg:text-base">Cart</p>
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
      </div>
    )
  );
};

export default Head;
