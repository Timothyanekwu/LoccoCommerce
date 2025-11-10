"use client";

import Card from "@/components/card/page";
import { useAppContext } from "@/hooks/useAppContext";
import React, { useContext } from "react";

const Products = () => {
  const { products } = useAppContext();

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 ">
      {products.map((item, index) => {
        return (
          <Card
            key={index}
            _id={item._id}
            img={item.img[0]}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
