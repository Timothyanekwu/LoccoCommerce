import React from "react";

type DetailProps = {
  name?: string;
  description?: string;
  price?: number;
  qty: number;
  priceValue: number;
};

const Detail = ({ name, description, price, qty, priceValue }: DetailProps) => {
  return (
    <div className="flex flex-col gap-4 py-4 lg:pt-0 border-b border-b-neutral-300">
      <div>
        <p className="text-2xl font-bold">{name}</p>
      </div>

      <div>
        {/* Ratings */}
        <div></div>
        <div className="flex gap-3 lg:items-center">
          <p className="text-2xl font-bold">N {priceValue}</p>
          {/* <div className="text-sm lg:text-[10px] text-red-800 bg-red-200 rounded-full px-3 lg:px-2 py-1 lg:h-fit flex items-center w-fit font-medium">
            -40%
          </div> */}
        </div>
      </div>

      <div>
        <p className="text-sm opacity-60 max-h-24 overflow-y-auto pr-1 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Detail;
