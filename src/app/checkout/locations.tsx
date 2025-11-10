"use client";

import React from "react";
import { useAppContext } from "@/hooks/useAppContext";
import { useState } from "react";

// type Location = {
//   name: string;
//   surname: string;
//   fullAddress: string;
//   phoneNo: string;
// };

type LocationsProp = {
  locations: Location[];
};

const Locations = () => {
  const { setLocatView, locations, setLocationId, locationId } =
    useAppContext();
  const [noteView, setNoteView] = useState<boolean>(false);
  const [addNote, setAddNote] = useState<string>("");
  return (
    <div className="border-b px-3">
      <div className="border-b flex justify-between items-center h-14 px-3">
        <p className="font-semibold">CHOOSE YOUR LOCATION</p>
        <div
          onClick={() => setLocatView(true)}
          className="cursor-pointer bg-black rounded-lg px-3 py-2 flex justify-center items-center"
        >
          <p className="text-white text-sm">Add Location</p>
        </div>
      </div>

      <div>
        {locations.map((loc, index) => {
          return (
            <div className="flex items-center h-fit px-8 py-2" key={index}>
              <input
                type="checkbox"
                onChange={() => setLocationId(loc._id)}
                checked={locationId === loc._id}
              />
              <div className="ml-3">
                <p className="text-lg font-semibold">
                  {loc.name} {loc.surname}
                </p>
                <p className="text-sm">{loc.fullAddress}</p>
                <p className="text-sm">{loc.phoneNo}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full px-3 ">
        <div className="flex items-center my-3">
          <input
            checked={noteView}
            onChange={() => setNoteView((prev) => !prev)}
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
    </div>
  );
};

export default Locations;
