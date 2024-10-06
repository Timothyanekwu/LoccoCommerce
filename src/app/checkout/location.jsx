import React from "react";

const Location = ({ setLocatView, locations }) => {
  return (
    <div className="border-b px-3">
      <div className="border-b flex justify-between items-center h-14 px-3">
        <p className="font-semibold">CHOOSE YOUR LOCATION</p>
        <div
          onClick={() => setLocatView(true)}
          className="h-11 cursor-pointer bg-[#4D4875] rounded-lg px-3 flex justify-center items-center"
        >
          <p className="text-white text-sm ">Add Location</p>
        </div>
      </div>

      <div>
        {locations.map((loc, index) => {
          return (
            <div className="flex items-center h-fit px-8 py-2" key={index}>
              <input type="checkbox" />
              <div className="ml-3">
                <p className="text-lg font-semibold">
                  {loc.name} {loc.surname}
                </p>
                <p className="text-sm">{loc.address}</p>
                <p className="text-sm">{loc.phone}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Location;
