import React from "react";
import Image from "next/image";

type CartItemProps = {
  name: string;
  img: string;
  price: number;
  qty: number;
  removeFromCart: () => void;
};

const CartItem = ({ name, img, price, qty, removeFromCart }: CartItemProps) => {
  const formatCurrency = (
    amount: number,
    currency: string = "NGN",
    locale: string = "en-US"
  ): string => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amount);
  };

  const formattedPrice = formatCurrency(price);

  return (
    <div className="border-b border-b-neutral-300 py-3 w-full flex gap-4">
      {/* Product Image */}

      <div className="min-w-36 aspect-square rounded-xl relative bg-neutral-100">
        <Image
          src={img || "/images/placeholder.png"}
          alt={""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="font-bold">{name}</h2>
            <p className="text-sm text-neutral-600">Stainless Steel • Black</p>
          </div>
          <div className="cursor-pointer" onClick={() => removeFromCart()}>
            {" "}
            X
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Price */}
          <span className="text-xl font-bold">{formattedPrice}</span>

          {/* Quantity Control */}
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border rounded cursor-pointer">
              -
            </button>
            <span className="px-2">{qty}</span>
            <button className="px-3 py-1 border rounded cursor-pointer">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
