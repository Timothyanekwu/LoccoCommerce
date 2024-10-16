import React from "react";
import Flutterwave from "../../../public/flutterWave";

const Payment = () => {
  return (
    <div className="mt-9 px-3">
      <div className="border-b flex justify-between items-center h-14 px-3">
        <p className="font-semibold">MAKE PAYMENT</p>
      </div>

      <div className="w-full px-3 mt-10">
        <p className="text-base mb-3">Total amount: N 95000</p>
        <div className="w-full h-32 rounded-xl bg-[#090053] p-4 flex flex-col justify-between shadow-xl">
          <Flutterwave width={150} />
          <p className="text-white text-xs">
            Multiple payment option that best suits you...
          </p>
        </div>

        <div className="w-full h-fit rounded-xl border border-[#4D4875] text-[#4D4875] mt-5 p-4">
          <p className="text-xl">Make Transfer Now</p>
          <p className="text-xs">Make sure to submit proof of payment.</p>

          <div className="font-semibold mt-4">
            <p>Opay</p>
            <p>7048995533</p>
            <p>timothy anekwu</p>
          </div>

          <div className="mt-4">
            <p>Upload the bank payment receipt</p>

            <div className="relative w-full h-10">
              <input
                type="file"
                id="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label
                htmlFor="file"
                className="flex items-center justify-center w-full h-full bg-[#4D4875] text-white cursor-pointer rounded-md"
              >
                Choose a file
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
