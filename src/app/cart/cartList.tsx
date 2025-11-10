"use client";

import React from "react";
import CartItem from "./cartItem";
import { useAppContext } from "@/hooks/useAppContext";

const CartList = () => {
  const { cart, removeFromCart } = useAppContext();
  // console.log("CART ITEMS:", cart);

  return (
    <div className="flex flex-col gap-3 p-3 border border-neutral-300 rounded-2xl col-span-2">
      {cart.length > 0 &&
        cart.map((item, index) => {
          return (
            <CartItem
              key={index}
              name={item.name}
              img={item.img}
              price={item.price}
              qty={item.qty}
              removeFromCart={() => removeFromCart(item._id)}
            />
          );
        })}

      {/* <CartItem />
      <CartItem />
      <CartItem />
      <CartItem /> */}
    </div>
  );
};

export default CartList;
