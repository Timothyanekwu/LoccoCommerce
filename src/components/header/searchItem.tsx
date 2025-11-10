import React, { useState } from "react";
import Search from "../../../public/icons/search";
import { useAppContext } from "@/hooks/useAppContext";

const SearchItem = () => {
  const { search, setSearch, handleSearch } = useAppContext();

  return (
    <form
      onSubmit={handleSearch}
      className="md:bg-input rounded-full h-[50%] flex md:gap-3 md:px-3 items-center md:w-fit"
    >
      <Search className="fill-black md:size-5 md:opacity-25" />
      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="hidden md:block lg:w-60 h-full rounded-r-full outline-none md:text-sm"
      />
    </form>
  );
};

export default SearchItem;
