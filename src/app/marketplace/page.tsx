import React from "react";
import SideBar from "./sidebar";
import Products from "./products";
import Sub from "./sub";
import Pagination from "./pagination";

const Marketplace = () => {
  return (
    <div className="px-3 md:px-12 lg:px-3 grid lg:grid-cols-12 md:grid-cols-9 gap-5 pb-10 pt-5">
      <div className="lg:col-span-3">
        <SideBar />
      </div>
      <div className="col-span-9">
        <Sub />
        <Products />
        <Pagination />
      </div>
    </div>
  );
};

export default Marketplace;
