import Image from "next/image";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const CartProduct = ({ name, price, img, qty, cartUpdate, id, cartDelete }) => {
  return (
    <div className="w-full h-fit p-3 border-b border-b-[#545454] flex justify-between">
      <div className="flex items-start">
        <div className="relative h-20 w-20 mr-4">
          <Image
            src={img[0]}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div>
          <p className="text-sm">{name}</p>
          <p className="text-lg font-semibold">N {price}</p>
          <div className="flex items-center mt-4">
            <div
              onClick={(e) => cartUpdate(e, id)}
              id="minus"
              className="bg-neutral-200 hover:bg-[#4D4875] hover:text-white text-black text-xl w-6 h-6 flex items-center justify-center rounded-sm"
            >
              -
            </div>
            <div className="w-12 h-8 flex items-center justify-center">
              {qty}
            </div>
            <div
              id="add"
              onClick={(e) => cartUpdate(e, id)}
              className="bg-neutral-200 hover:bg-[#4D4875] hover:text-white text-black text-xl w-6 h-6 flex items-center justify-center rounded-sm"
            >
              +
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => cartDelete(id)}
        className="flex justify-center items-start h-full cursor-pointer"
      >
        <MdDeleteOutline className="mr-1 fill-red-700 flex items-center justify-center w-4 h-4" />
        <p className="text-xs font-[500] text-red-700">DELETE</p>
      </div>
    </div>
  );
};

export default CartProduct;
