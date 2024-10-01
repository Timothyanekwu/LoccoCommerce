"use client";

import React from "react";

import { useContext } from "react";
import DataContext from "@/context/context";
import Products from "../pageComponents/product";
import { MdArrowDropDown } from "react-icons/md";
import SideBar from "./sideBar";

export default function Home() {
  const { products, deviceWidth } = useContext(DataContext);

  return (
    <div className="pt-14">
      <div className="prodContainer">
        <SideBar />
        <div className="w-full">
          <div className="w-full px-5 mx-3 mb-5 flex justify-between h-16 items-center border-y">
            <div>
              <p className="font-[500] text-2xl">Shop quality products</p>
            </div>

            <div className="flex">
              <p>Sort By</p>
              <MdArrowDropDown className="w-5 h-5" />
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
        </div>
      </div>
    </div>
  );
}
