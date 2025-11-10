import React from "react";
import Link from "next/link";
import { CartItem, Product } from "@/types/types";

type VariantProp = {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
  addToCart: (item: CartItem) => void;
  item: Product | undefined;
  quantityHandler: (operation: string) => void;
  priceValue: number;
};

const Variant = ({
  qty,
  setQty,
  addToCart,
  item,
  quantityHandler,
  priceValue,
}: VariantProp) => {
  const colors = ["#314F4A", "#31344F", "#000000", "#ffffff"];

  return (
    <div>
      <div className="border-b border-b-neutral-300 py-3">
        <p className="text-sm">Select Colors</p>
        <div className="flex h-16 lg:h-14 space-x-3 py-3">
          {colors.map((color, index) => {
            return (
              <div
                key={index}
                className="h-full aspect-square rounded-full border cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="py-3 border-b border-b-neutral-300">
        <p className="text-sm">Choose Size</p>
        <div className="flex gap-3 py-3">
          <div className="py-3 lg:py-1 px-5 lg:px-2 rounded-full bg-input hover:bg-black cursor-pointer text-sm lg:text-xs hover:text-white">
            Small
          </div>
          <div className="py-3 lg:py-1 px-5 lg:px-2 rounded-full bg-input hover:bg-black cursor-pointer text-sm lg:text-xs hover:text-white">
            Medium
          </div>
          <div className="py-3 lg:py-1 px-5 lg:px-2 rounded-full bg-input hover:bg-black cursor-pointer text-sm lg:text-xs hover:text-white">
            Large
          </div>
          <div className="py-3 lg:py-1 px-5 lg:px-2 rounded-full bg-input hover:bg-black cursor-pointer text-sm lg:text-xs hover:text-white">
            X Large
          </div>
        </div>
      </div>

      <div className="h-12 lg:h-10 flex justify-between w-full md:w-[50vw] lg:w-full gap-3 my-3 lg:pr-5">
        <div className="bg-input rounded-full flex justify-between items-center w-[60%]">
          <button
            onClick={() => quantityHandler("decrement")}
            className="h-full w-full cursor-pointer flex items-center justify-center"
          >
            -
          </button>
          <p className="w-full h-full flex items-center justify-center">
            {qty}
          </p>
          <button
            onClick={() => quantityHandler("increment")}
            className="h-full w-full cursor-pointer flex items-center justify-center"
          >
            +
          </button>
        </div>
        <div
          onClick={() =>
            addToCart({
              _id: "",
              name: item?.name || "",
              img: item?.img[0] || "",
              price: priceValue || 0,
              qty: qty,
            })
          }
          // href="/cart"
          className="h-full rounded-full cursor-pointer flex items-center justify-center flex-grow w-full bg-black text-white text-sm lg:text-xs"
        >
          <p>Add to Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Variant;
