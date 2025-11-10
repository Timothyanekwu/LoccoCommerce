"use client";

import React from "react";
import { useParams } from "next/navigation";
// import products from "../../../../data/products";
import Image from "next/image";
import ImageSection from "./image";
import Detail from "./details";
import Variant from "./variant";
import Filter from "../../../../public/icons/filter";
import Comment from "./comment";
import { useAppContext } from "@/hooks/useAppContext";
import { useState } from "react";

const Item = () => {
  const { products, addToCart, qty, setQty } = useAppContext();

  const [currImg, setCurrImg] = useState<number>(0);

  const params = useParams();
  const { id } = params;
  const decodedId = decodeURIComponent(id as string);
  const item = products.find((item) => item._id == decodedId);

  const priceValue = item?.price ? item.price + ((qty - 1) * (item.price)) : 0 // prettier-ignore

  const quantityHandler = (operation: string) => {
    if (operation === "increment") {
      setQty((prev) => (prev += 1));
    } else if (operation === "decrement") {
      setQty((prev) => (prev > 1 ? (prev -= 1) : 1));
    }
  };

  return (
    <div className="px-3 md:px-20 pt-3 pb-12">
      <div className="lg:flex lg:gap-x-6">
        <ImageSection
          currImg={currImg}
          setCurrImg={setCurrImg}
          img={item?.img || []}
          name={item?.name || ""}
        />
        <div className="lg:w-[50%]">
          <Detail
            name={item?.name}
            price={item?.price}
            description={item?.description}
            qty={qty}
            priceValue={priceValue}
          />
          <Variant
            qty={qty}
            setQty={setQty}
            addToCart={addToCart}
            item={item}
            quantityHandler={quantityHandler}
            priceValue={priceValue}
          />
        </div>
      </div>

      <div className="mt-10">
        {/* <div className="w-full flex items-center justify-between md:justify-normal md:gap-4 py-2 border-b border-b-neutral-300">
          <p className="cursor-pointer">Ratings & Reviews</p>
          <p className="cursor-pointer">FAQs</p>
        </div> */}
        <div className="flex justify-between items-center py-3">
          <div className="flex gap-2 items-baseline">
            <p className="font-bold text-xl">All Reviews</p>
            <p className="text-sm">(451)</p>
          </div>

          <div className="flex gap-3">
            <div className="h-12 aspect-square rounded-full bg-input flex items-center justify-center cursor-pointer">
              <Filter />
            </div>
            <div className="h-12 flex items-center px-5 rounded-full bg-black text-white text-xs font-medium cursor-pointer">
              Write A Review
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:grid grid-cols-2 lg:gap-5">
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div className="px-4 py-3 rounded-full border border-neutral-300 text-sm w-fit mx-auto mt-5">
          Load More Reviwes
        </div>
      </div>
    </div>
  );
};

export default Item;
