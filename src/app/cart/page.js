"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import DataContext from "@/context/context";
import CartProduct from "./product";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Page = () => {
  const { cart, deviceWidth, cartUpdate, cartDelete, setDeviceWidth } =
    useContext(DataContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        setLoading(true);
        const handleResize = () => setDeviceWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      } catch (error) {
        console.error("Failed to fetch cart data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchCartData();
  }, []); // Run only once on component mount

  if (loading) {
    return <p>Loading...</p>; // Show a loading state while data is being fetched
  }

  return (
    <div className="cartPadding pt-3">
      <div className="mt-5 h-10 flex items-center border-y border-[#545454]">
        <p className="text-lg font-[500]">Cart Page</p>
      </div>
      <Suspense>
        <div className="lg:flex lg:flex-row-reverse">
          <div className="lg:h-fit flex lg:flex-col lg:justify-normal justify-between items-center lg:items-start text-lg lg:border-b-0 border-b py-3 lg:px-3 border-[#545454] lg:flex-grow">
            <div
              onClick={() => {
                router.push("/marketplace");
              }}
              className="rounded-lg bg-[#4D4875] h-fit py-2 px-3 flex items-center lg:mb-3 lg:hidden cursor-pointer"
            >
              <FaLongArrowAltLeft className="fill-white mr-2" />
              <p className="text-xs text-white">Continue shopping</p>
            </div>
            <div className="lg:w-full lg:border rounded-xl lg:border-[#4D4875] lg:p-4">
              <p className="lg:block hidden">CART SUMMARY</p>
              {cart.length > 0 && (
                <div className="lg:flex lg:justify-between lg:items-center lg:w-full lg:my-2">
                  <p className="text-sm">Sub Total ({cart.length} items)</p>
                  <p className="text-sm font-semibold lg:text-lg">
                    {cart
                      .reduce((prev, curr) => prev + curr.price, 0)
                      .toFixed(2)}
                  </p>
                </div>
              )}
              <p className="text-xs text-neutral-500">
                Delivery fees not included yet
              </p>
              {deviceWidth >= 1024 && (
                <button
                  disabled={cart.length === 0}
                  onClick={() => router.push("/checkout")}
                  className={`rounded-md ${
                    cart.length === 0 ? "bg-neutral-500" : "bg-[#4D4875]"
                  } w-full h-10 justify-center py-2 px-3 items-center lg:mb-3 mt-4 lg:flex cursor-pointer`}
                >
                  <p className="text-sm text-white">CHECKOUT</p>
                </button>
              )}
            </div>
          </div>

          <div className="mt-5 pt-4 lg:mt-0 lg:w-[70%] lg:p3 lg:mr-3 mb-8">
            {deviceWidth >= 1024 && (
              <div
                onClick={() => {
                  router.push("/marketplace");
                }}
                className="rounded-lg bg-[#4D4875] w-40 h-fit py-2 px-3 flex items-center cursor-pointer hover:bg-[#3b3758] lg:mb-3"
              >
                <FaLongArrowAltLeft className="fill-white mr-2" />
                <p className="text-xs text-white">Continue shopping</p>
              </div>
            )}
            {cart.map((item) => (
              <CartProduct
                key={item._id}
                cartUpdate={cartUpdate}
                name={item.name}
                price={item.price}
                img={item.img}
                qty={item.qty}
                id={item._id}
                cartDelete={cartDelete}
              />
            ))}
          </div>
        </div>

        {deviceWidth < 1024 && (
          <div className="bg-white h-16 w-full sticky bottom-0 p-2 my-5">
            <button
              disabled={cart.length === 0}
              onClick={() => router.push("/checkout")}
              className={`${
                cart.length === 0 ? "bg-neutral-500" : "bg-[#4D4875]"
              } rounded-md flex items-center h-full justify-center w-full cursor-pointer`}
            >
              <p className="text-white text-sm">Proceed to Checkout</p>
            </button>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default Page;
