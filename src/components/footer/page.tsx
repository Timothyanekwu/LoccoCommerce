import React from "react";
import FacebookIcon from "../../../public/icons/facebook";
import InstagramIcon from "../../../public/icons/instagram";
import Visa from "../../../public/icons/visa";
import Mastercard from "../../../public/icons/mastercard";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1024px] mx-auto bg-input min-h-20 relative bottom-0 p-8 md:p-12 pt-[50vw] md:pt-[8vw] lg:pt-[10vw]">
      <div className="bg-black rounded-xl w-[90%] absolute p-6 flex flex-col md:flex-row gap-8 justify-between text-white left-1/2 -translate-x-1/2 -top-[25vw] md:-top-[10vw] lg:-top-[5vw]">
        <div className="md:w-1/2">
          <p className="text-3xl">STAY UP TO DATE ABOUT OUR LATEST OFFERS</p>
        </div>
        <div className="flex flex-col gap-2 md:w-1/3">
          <input
            type="email"
            placeholder="Enter your email fullAddress"
            className="bg-white w-full rounded-full outline-none h-10 px-4 text-sm placeholder:text-neutral-300 text-center"
          />
          <button className="cursor-pointer bg-white w-full rounded-full h-10 text-black">
            Subscribe to our Newsletter
          </button>
        </div>
      </div>

      <div className="lg:flex gap-4">
        <div className="py-6 space-y-3 lg:w-[50%]">
          <div>
            <p className="text-3xl font-semibold">LOCCO</p>
          </div>
          <div>
            <p className="text-neutral-600">
              We have products of all kinds that you may need in your daily
              lives
            </p>
          </div>
          <div className="flex w-full space-x-3">
            <div className="cursor-pointer hover:bg-black bg-white border-input rounded-full flex items-center justify-center w-12 h-12">
              <FacebookIcon className="fill-black size-8" />
            </div>
            <div className="cursor-pointer hover:bg-black bg-white border-input rounded-full flex items-center justify-center w-12 h-12">
              <InstagramIcon className="fill-black size-8" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          <div className="space-y-2">
            <p className="text-lg text-neutral-600">COMPANY</p>
            <p className="text-sm font-light text-neutral-600">About</p>
            <p className="text-sm font-light text-neutral-600">Features</p>
            <p className="text-sm font-light text-neutral-600">Works</p>
            <p className="text-sm font-light text-neutral-600">Career</p>
          </div>

          <div className="space-y-2">
            <p className="text-lg text-neutral-600">HELP</p>
            <p className="text-sm font-light text-neutral-600">
              Customer Support
            </p>
            <p className="text-sm font-light text-neutral-600">
              Delivery Details
            </p>
            <p className="text-sm font-light text-neutral-600">
              Terms & Conditions
            </p>
            <p className="text-sm font-light text-neutral-600">
              Privicacy Policy
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-lg text-neutral-600">FAQ</p>
            <p className="text-sm font-light text-neutral-600">Account</p>
            <p className="text-sm font-light text-neutral-600">
              Manage Deliveries
            </p>
            <p className="text-sm font-light text-neutral-600">Orders</p>
            <p className="text-sm font-light text-neutral-600">Payment</p>
          </div>
        </div>
      </div>

      <div className="border-t border-t-neutral-300 flex flex-col md:flex-row mt-5 w-full justify-center md:justify-between text-sm items-center text-neutral-600 h-20 md:h-12 px-8 space-y-3">
        <div>
          <p>Locco © 2000-2023, All Rights Reserved</p>
        </div>
        <div className="flex space-x-4">
          <div className="px-4 py-2 rounded-lg bg-white">
            <Visa />
          </div>

          <div className="px-4 py-2 rounded-lg bg-white">
            <Mastercard />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
