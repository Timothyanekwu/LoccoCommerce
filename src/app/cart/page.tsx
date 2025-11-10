import React from "react";
import CartItem from "./cartItem";
import Summary from "./summary";
import CartList from "./cartList";

const Cart = () => {
  return (
    <div className="px-3 pb-12">
      <p className="font-bold text-3xl my-3">Your Cart</p>

      <div className="lg:grid w-full grid-cols-3 lg:gap-5">
        <CartList />

        <div className="flex flex-col gap-3 p-3 border border-neutral-300 rounded-2xl mt-3 lg:mt-0 h-fit">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
