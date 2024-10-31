"use client";

import React from "react";

import { useContext } from "react";
import DataContext from "@/context/context";
import Products from "../../pageComponents/product";
import { MdArrowDropDown } from "react-icons/md";
import SideBar from "./sideBar";
import Pagination from "@/pageComponents/pagination";

export default function Home() {
  const { products, sortView, setSortView, handleSort } =
    useContext(DataContext);

  return (
    <div className="pt-14">
      <div className="prodContainer">
        <SideBar />
        <div className="w-full">
          <div className="w-full px-5 mx-3 mb-5 flex justify-between h-16 items-center border-y">
            <div>
              <p className="font-[500] text-2xl">Shop quality products</p>
            </div>
            <div className="relative">
              <div
                onClick={() => setSortView(!sortView)}
                className="flex cursor-pointer"
              >
                <p>Sort By</p>
                <MdArrowDropDown className="w-5 h-5" />
              </div>
              {sortView ? (
                <div className="w-40 border flex flex-col bg-white absolute right-0 z-10 rounded-lg">
                  <span
                    className="h-10 hover:bg-neutral-200 flex items-center px-3 w-full cursor-pointer"
                    onClick={() => handleSort("popularity")}
                  >
                    By popularity
                  </span>
                  <span
                    className="h-10 hover:bg-neutral-200 flex items-center px-3 w-full cursor-pointer"
                    onClick={() => handleSort("priceAsc")}
                  >
                    Price: Low to High
                  </span>
                  <span
                    className="h-10 hover:bg-neutral-200 flex items-center px-3 w-full cursor-pointer"
                    onClick={() => handleSort("priceDes")}
                  >
                    Price: High to Low
                  </span>
                  <span
                    className="h-10 hover:bg-neutral-200 flex items-center px-3 w-full cursor-pointer"
                    onClick={() => handleSort("latest")}
                  >
                    Latest posted
                  </span>
                </div>
              ) : null}
            </div>
          </div>
          <div className="productGrid">
            {products.map((item, index) => {
              return (
                <Products
                  name={item.name}
                  img={item.img[0]}
                  price={item.price}
                  id={item._id}
                  key={index}
                />
              );
            })}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
