import React from "react";
import Location from "./location";
import PayOptions from "./payOptions";
import Summary from "./summary";

const Page = () => {
  return (
    <div className="pt-5 lg:flex lg:px-[7vw]">
      <div className="lg:w-[70%] lg:mr-5">
        <Location />
        <div className="w-full h-10 flex items-center px-3 border-b">
          <input type="checkbox" />
          <p className="ml-3 text-base">Additional Notes</p>
        </div>

        <PayOptions />
      </div>
      <Summary />

      <div className="w-full p-4 bg-white my-6 lg:hidden">
        <div className="w-full h-12 rounded-md bg-[#4D4875] flex items-center justify-center">
          <p className="text-white">Proceed to Payment</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
