import React from "react";

const NewLocationModal = ({
  addLocation,
  locat,
  locationSubmit,
  locatView,
  setLocatView,
}) => {
  return (
    <div
      // onClick={() => setLocatView(!locatView)}
      className="bg-black bg-opacity-10 w-full h-full fixed top-0 left-0 z-30 flex items-center justify-center"
    >
      <div className="bg-white w-[90%] md:w-[45%] sm:w-[65%] lg:w-[35%] rounded-3xl p-5">
        <p className="text-xl mb-4 font-semibold">New Location</p>
        <form
          className="flex flex-col h-[50vh] overflow-y-scroll scrollbar-hide"
          onSubmit={locationSubmit}
        >
          <span>
            <label className="w-full text-sm">First Name:</label>
            <input
              value={locat.name}
              onChange={(e) => addLocation(e)}
              id="name"
              className="border focus:border-[#4D4875] focus:border-2 w-full h-10 px-3 rounded-sm focus:outline-none mb-3"
              type="text"
            />
          </span>
          <span>
            <label className="w-full text-sm">Last Name:</label>
            <input
              value={locat.surname}
              onChange={(e) => addLocation(e)}
              id="surname"
              className="border focus:border-[#4D4875] focus:border-2 w-full h-10 px-3 rounded-sm focus:outline-none mb-3"
              type="text"
            />
          </span>
          <span>
            <label className="w-full text-sm">Full Address:</label>
            <input
              value={locat.address}
              onChange={(e) => addLocation(e)}
              id="address"
              className="border focus:border-[#4D4875] focus:border-2 w-full h-10 px-3 rounded-sm focus:outline-none mb-3"
              type="text"
            />
          </span>
          <span>
            <label className="w-full text-sm">Additional Information:</label>
            <input
              value={locat.info}
              onChange={(e) => addLocation(e)}
              id="info"
              className="border focus:border-[#4D4875] focus:border-2 w-full h-10 px-3 rounded-sm focus:outline-none mb-3"
              type="text"
            />
          </span>
          <span>
            <label className="w-full text-sm">Phone number:</label>
            <input
              value={locat.phone}
              onChange={(e) => addLocation(e)}
              id="phone"
              className="border focus:border-[#4D4875] focus:border-2 w-full h-10 px-3 rounded-sm focus:outline-none mb-3"
              type="text"
            />
          </span>
          <span>
            <label className="w-full text-sm">Additional Phone Number:</label>
            <input
              value={locat.addPhone}
              onChange={(e) => addLocation(e)}
              id="addPhone"
              className="border focus:border-[#4D4875] focus:border-2 w-full h-10 px-3 rounded-sm focus:outline-none mb-3"
              type="text"
            />
          </span>
        </form>
        <div className="sticky bottom-0 w-full flex justify-between mt-5">
          <button
            onClick={() => setLocatView(!locatView)}
            className="w-full mr-2 rounded-lg bg-neutral-200 text-black h-14"
          >
            Cancel
          </button>
          <input
            onClick={locationSubmit}
            className="w-full ml-2 rounded-lg bg-[#4D4875] text-white h-14 shadow-xl"
            type="submit"
            value={"Save"}
          />
        </div>
      </div>
    </div>
  );
};

export default NewLocationModal;
