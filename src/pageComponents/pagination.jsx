"use client";

import React from "react";
import { useContext } from "react";
import DataContext from "@/context/context";
import { RiSkipRightLine } from "react-icons/ri";
import { RiSkipLeftLine } from "react-icons/ri";

const Pagination = () => {
  const { pages, handlePage } = useContext(DataContext);

  return (
    pages.length > 1 && (
      <section className="flex my-5 justify-center full">
        <span className="px-3 py-2 border cursor-pointer flex items-center justify-center mx-1 border-neutral-800 rounded-md">
          <RiSkipLeftLine className="text-xl" />
        </span>
        {pages?.map((pageNumber) => {
          return (
            <span
              className="px-5 rounded-md py-2 border cursor-pointer mx-1 border-neutral-800"
              key={Math.random()}
              onClick={() => handlePage(pageNumber)}
            >
              {pageNumber}
            </span>
          );
        })}

        <span className="px-3 py-2 border cursor-pointer flex items-center justify-center mx-1 border-neutral-800 rounded-md">
          <RiSkipRightLine className="text-xl" />
        </span>
      </section>
    )
  );
};

export default Pagination;
