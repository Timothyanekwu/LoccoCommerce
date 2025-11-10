"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/hooks/useAppContext";

type CardProps = {
  _id: string;
  img?: string;
  name?: string;
  price?: number | string;
};

const Card = ({ img, name, price, _id }: CardProps) => {
  const router = useRouter();
  const { setQty } = useAppContext();

  const handleClick = () => {
    setQty(1);
    router.push(`/marketplace/${_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-xl flex flex-col gap-2 w-full cursor-pointer"
    >
      <div className="min-w-36 w-full h-36 md:h-60 lg:h-60 relative">
        <Image
          src={img || ""}
          alt="Product Image"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="px-2 space-y-3">
        <p className="text-xs font-semibold">
          {(name?.length ?? 0) > 30
            ? name?.substring(0, 30) + "..."
            : name ?? ""}

          {/* if we have name, and its length is greater than 30, 
          cut the first 30 characters of the string and add ..., 
          else just render the name like that as long as its not empty */}
        </p>
        <p className="font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default Card;
