import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { VscRefresh } from "react-icons/vsc";
import allLocations from "@/context/locations";

const Locations = ({
  selectStates,
  setSelectState,
  localGovt,
  setLocalGovt,
}) => {
  const handleStateChange = (e) => {
    if (e.target.id === "stateSelect") {
      const state = e.target.value;
      setSelectState(state);
    } else if (e.target.id === "lgaSelect") {
      const lga = e.target.value;
      setLocalGovt(lga);
    }
  };
  return (
    <div className="border-t my-4 lg:my-0 lg:px-3 py-3 lg:border-t-0">
      <p>Choose your location</p>

      <select
        id="stateSelect"
        value={selectStates}
        onChange={(e) => handleStateChange(e)}
        className="w-full h-12 flex items-center px-3 border rounded-lg my-2 justify-between"
      >
        <option value="">--Select a State--</option>
        {Object.keys(allLocations).map((state) => (
          <option
            onClick={() => setSelectState(state)}
            key={state}
            value={state}
          >
            {state}
          </option>
        ))}
      </select>

      <select
        id="lgaSelect"
        onChange={(e) => handleStateChange(e)}
        disabled={!selectStates}
        value={localGovt}
        className="w-full h-12 flex items-center px-3 border rounded-lg my-2 justify-between"
      >
        <option value="">--Select Local Government--</option>
        {selectStates &&
          allLocations[selectStates].map((lga) => (
            <option onClick={() => setLocalGovt(lga)} key={lga} value={lga}>
              {lga}
            </option>
          ))}
      </select>

      <div className="flex mt-3">
        <div className="w-10 h-10 rounded-md border-black border mr-3 flex items-center justify-center">
          <CiDeliveryTruck className="w-7 h-7" />
        </div>
        <div className="flex-grow w-full">
          <p className="font-semibold">Door delivery</p>
          <div>
            <p className="text-sm">Delivery fee around N 1,500</p>
            <p className="text-[8px] mb-3 text-red-600">
              Please note this is just an estimate for your location. The
              despatch riders decide the price
            </p>
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
