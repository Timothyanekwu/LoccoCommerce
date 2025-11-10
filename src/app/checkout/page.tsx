import React from "react";
import Summary from "./summary";
import Locations from "./locations";
import PayOptions from "./payOptions";
import LocatForm from "./locatForm";
import PlaceOrder from "./placeOrder";

const Checkout = () => {
  return (
    <div className="pt-5 lg:flex lg:flex-row-reverse">
      <Summary />
      <div className="lg:w-[70%] lg:mr-5">
        <Locations />

        <PayOptions />

        <PlaceOrder />
      </div>

      <LocatForm />
    </div>
  );
};

export default Checkout;
