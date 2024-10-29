import React from "react";
import Form from "./form";
import BackgroundPattern from "../../../../public/background";
import Illustration from "../../../../public/illustration";

const Signup = () => {
  return (
    <div className="flex h-screen fixed w-screen">
      <BackgroundPattern color="#4D4875" className="absolute -z-30" />

      <div className="bg-neutral-50 hidden lg:block w-[64%] px-28 py-14">
        <p className="jaro text-6xl">Shop Smarter,</p>
        <p className="jaro text-6xl">Live Better.</p>
        <p>
          Shop our carefully curated selection of products to enhance your
          lifestyle and showcase your unique style!
        </p>

        <div>
          <Illustration height={290} width={290} className="text-md" />
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Signup;
