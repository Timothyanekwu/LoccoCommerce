import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { VscRefresh } from "react-icons/vsc";

const Locations = () => {
  return (
    <div className="border-t my-4 lg:my-0 lg:px-3 py-3 lg:border-t-0">
      <p>Choose your location</p>
      <div className="w-full h-12 flex items-center px-3 border rounded-lg my-2 justify-between">
        <p>Lagos</p>
        <FaAngleDown />
      </div>
      <div className="w-full h-12 flex items-center px-3 border rounded-lg my-2 justify-between">
        <p> Yaba Herbert-Macauley Way</p>

        <FaAngleDown />
      </div>

      <div className="flex items-center mt-3">
        <div className="w-10 h-10 rounded-md border-black border mr-3 flex items-center justify-center">
          <CiDeliveryTruck className="w-7 h-7" />
        </div>
        <div className="flex-grow w-full">
          <p className="font-semibold">Door delivery</p>
          <div>
            <p className="text-sm">Delivery fee N 1,500</p>
            <p className="text-xs">
              Delivery within the next 2 days if you order within the next 12
              hours
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex items-center mt-3">
        <div className="w-10 h-10 rounded-md border-black border mr-3 flex items-center justify-center">
          <VscRefresh className="w-7 h-7" />
        </div>
        <div className="flex-grow w-full">
          <p className="font-semibold">Return policy</p>
          <div>
            <p className="text-sm">This product has no return policy</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Locations;
