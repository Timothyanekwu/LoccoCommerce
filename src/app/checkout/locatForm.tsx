"use client";

import React from "react";
import { useAppContext } from "@/hooks/useAppContext";
import LocatInput from "./locatInput";

const LocatForm = () => {
  const { setLocatView, addLocation, locat, locatView, locationSubmit } =
    useAppContext();

  if (locatView) {
    return (
      <div
        onClick={() => setLocatView(!locatView)}
        className="bg-[rgba(0,0,0,0.4)] w-full h-full fixed top-0 left-0 z-30 flex items-center justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-[90%] md:w-[45%] sm:w-[65%] lg:w-[35%] rounded-3xl p-5"
        >
          <p className="text-xl mb-4 font-semibold">New Location</p>
          <form
            className="flex flex-col h-[50vh] overflow-y-scroll scrollbar-hide"
            onSubmit={locationSubmit}
          >
            <LocatInput
              label="First Name: "
              action={(e) => addLocation(e)}
              value={locat.name}
              id="name"
              type="text"
            />

            <LocatInput
              label="Last Name: "
              action={(e) => addLocation(e)}
              value={locat.surname}
              id="surname"
              type="text"
            />

            <LocatInput
              label="Full Address: "
              action={(e) => addLocation(e)}
              value={locat.fullAddress}
              id="fullAddress"
              type="text"
            />

            <LocatInput
              label="Additional Information: "
              action={(e) => addLocation(e)}
              value={locat.info}
              id="info"
              type="text"
            />

            <LocatInput
              label="Phone Number: "
              action={(e) => addLocation(e)}
              value={locat.phoneNo}
              id="phone"
              type="text"
            />

            <LocatInput
              label="Additional Phone Number: "
              action={(e) => addLocation(e)}
              value={locat.additionalPhone}
              id="addPhone"
              type="text"
            />
          </form>
          <div className="sticky bottom-0 w-full flex justify-between mt-5">
            <button
              onClick={() => setLocatView(!locatView)}
              className="w-full mr-2 rounded-lg bg-neutral-200 text-black h-12"
            >
              Cancel
            </button>
            <input
              onClick={() => locationSubmit()}
              className="w-full ml-2 rounded-lg bg-black text-white h-12 shadow-xl"
              type="submit"
              value={"Save"}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default LocatForm;
