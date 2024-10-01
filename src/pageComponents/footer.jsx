import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#413E58] to-[#4D4875] h-64 text-white grid grid-cols-2 p-5 text-xs">
        <div className="flex flex-col pb-10 justify-between">
          <p className="text-base font-semibold">NEED HELP?</p>
          <p>Contact us</p>
          <p>Chat us</p>
          <p>Help center</p>
        </div>
        <div className="flex flex-col pb-5 justify-between">
          <p className="text-base font-semibold">ABOUT LOCCO</p>
          <p>About us</p>
          <p>Terms and Conditions</p>
          <p>Privicacy Policy</p>
          <p>Return Policy</p>
        </div>
        <div className="flex flex-col pb-5 justify-between">
          <p className="text-base font-semibold">LINK US ON</p>
          <div></div>
        </div>
        <div className="">
          <p className="text-base font-semibold">SUBSCRIBE</p>
          <form className="relative flex flex-col">
            <label>Join our newsletter</label>
            <input
              type="email"
              className="h-8 w-40 px-3 mt-2 rounded-full focus:outline-none "
              placeholder="Enter your email"
            />
          </form>
        </div>
      </div>
      <div className="bg-[#D2D2D2] h-14 w-full flex items-center justify-center">
        <p>© 2024, Locco.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Footer;
