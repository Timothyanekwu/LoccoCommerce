import Image from "next/image";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const CartProduct = ({ name, price, img, qty, cartUpdate, id, cartDelete }) => {
  return (
    <div className="w-full h-fit p-3 border-b border-b-[#545454] flex justify-between">
      <div className="flex items-start">
        <div className="relative h-20 w-20 mr-4">
          <Image
            src={img}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div>
          <p className="text-sm">{name}</p>
          <p className="text-lg font-semibold">N {price}</p>
          <p>{qty}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
