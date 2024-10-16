"use client";

import React from "react";
import Location from "./location";
import PayOptions from "./payOptions";
import Summary from "./summary";
import NewLocationModal from "./newLocationModal";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import DataContext from "@/context/context";
import Payment from "./payment";

const Page = () => {
  const router = useRouter();
  const {
    addLocation,
    locat,
    locationSubmit,
    locatView,
    setLocatView,
    locations,
    noteView,
    setAddView,
    addNote,
    setAddNote,
    payType,
    setPayType,
    locationId,
    setLocationId,
    placeOrder,
  } = useContext(DataContext);
  return (
    <div className="pt-5 lg:flex lg:flex-row-reverse md:px-5 lg:px-[7vw]">
      <Summary router={router} />

      <div className="lg:w-[70%] lg:mr-5">
        <Location
          setLocatView={setLocatView}
          locations={locations}
          locationId={locationId}
          setLocationId={setLocationId}
        />
        <div className="w-full px-3 border-b">
          <div className="flex items-center my-3">
            <input
              checked={noteView}
              onChange={() => setAddView((prev) => !prev)}
              type="checkbox"
            />
            <p className="ml-3 text-base">Additional Notes</p>
          </div>

          {noteView && (
            <textarea
              className="w-full focus:outline-none border h-24 resize-none p-2"
              value={addNote}
              onChange={(e) => setAddNote(e.target.value)}
              placeholder="Enter additional notes here"
            />
          )}
        </div>

        <PayOptions payType={payType} setPayType={setPayType} />
        {payType === "Pay now" && <Payment />}
        <div className="w-full p-4 bg-white my-6">
          <button
            onClick={placeOrder}
            className="w-full h-12 rounded-md bg-[#4D4875] flex items-center justify-center"
          >
            <p className="text-white">Place Order</p>
          </button>
        </div>
      </div>

      {locatView && (
        <NewLocationModal
          addLocation={addLocation}
          locat={locat}
          locationSubmit={locationSubmit}
          locatView={locatView}
          setLocatView={setLocatView}
        />
      )}
    </div>
  );
};

export default Page;
