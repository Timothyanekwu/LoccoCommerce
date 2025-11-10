"use client";

import { useAppContext } from "@/hooks/useAppContext";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

const Pagination = () => {
  const { handlePage, pages, totalPages } = useAppContext();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePrevious = () => {
    const setParams = new URLSearchParams(searchParams.toString());
    const curr = parseInt(setParams.get("page") || "1");

    if (curr <= 1) return;

    setParams.set("page", `${curr - 1}`);
    router.push(`/marketplace?${setParams.toString()}`);
  };

  const handleNext = () => {
    const setParams = new URLSearchParams(searchParams.toString());
    const curr = parseInt(setParams.get("page") || "1");

    if (curr >= totalPages) return;

    setParams.set("page", `${curr + 1}`);
    router.push(`/marketplace?${setParams.toString()}`);
  };

  return (
    <div className="border-t border-t-neutral-300 py-4 mt-5 flex justify-center items-center md:gap-3">
      <div
        onClick={handlePrevious}
        className="py-1 px-2 md:py-2 md:px-4 border border-neutral-300 cursor-pointer hover:bg-input rounded-md"
      >
        <p className="text-xs text-neutral-500">Previous</p>
      </div>
      <div className="flex md:gap-1 item-center ">
        {pages.map((page, index) => {
          const paginate = () =>
            typeof page == "number" && handlePage(page.toString());

          return (
            <p
              onClick={() => paginate()}
              className=" hover:bg-input rounded-sm cursor-pointer w-7 aspect-square flex items-center justify-center text-xs text-neutral-500"
              key={index}
            >
              {page}
            </p>
          );
        })}
      </div>
      <div
        onClick={handleNext}
        className="py-1 px-2 md:py-2 md:px-4 border border-neutral-300 cursor-pointer hover:bg-input rounded-md"
      >
        <p className="text-xs text-neutral-500">Next</p>
      </div>
    </div>
  );
};

export default Pagination;
