"use client";

import React, { Suspense } from "react";

import { useContext } from "react";
import DataContext from "@/context/context";
import Products from "../../pageComponents/product";
import { MdArrowDropDown } from "react-icons/md";
import SideBar from "./sideBar";
import Pagination from "@/pageComponents/pagination";
import ProductLoading from "@/loadingComponent/productLoad";
import NoItem from "../../../public/noItem";
import { IoMenu } from "react-icons/io5";

export default function Home() {
  const {
    products,
    sortView,
    setSortView,
    handleSort,
    isLoadingProducts,
    setSidebarView,
  } = useContext(DataContext);

  return (
    <div className="pt-14">
      <div className="w-full prodContainer">
        <SideBar />
        <div className="w-full">
          <div className="px-3 lg:px-5 mx-3 mb-5 flex justify-between h-16 items-center border-y">
            <div className="flex items-center">
              <IoMenu
                onClick={() => setSidebarView(true)}
                className="mr-2 text-2xl sideBarMenu"
              />
              <p className="font-[500] text-xl md:text-2xl">
                Shop quality products
              </p>
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

          <Suspense fallback={<div>Loading...</div>}>
            {isLoadingProducts ? (
              <div className="productGrid">
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
              </div>
            ) : products.length !== 0 ? (
              <div className="productGrid">
                {products.map((item, index) => {
                  return (
                    <Products
                      name={item.name}
                      img={item.img[0]}
                      price={item.price}
                      id={item._id}
                      discountPrice={item.discountPrice}
                      key={index}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center flex-col">
                <NoItem width={350} height={350} />
                <p className="text-3xl text-neutral-300">No product found</p>
              </div>
            )}
          </Suspense>

          <Pagination />
        </div>
      </div>
    </div>
  );
}
