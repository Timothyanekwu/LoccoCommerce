import { FaAngleDown } from "react-icons/fa6";
import React, { useState } from "react";

const Features = ({ description }) => {
  const [view, setView] = useState(false);

  return (
    <section className="w-full py-1 border-b relative">
      {/* Toggle Button */}
      <div
        onClick={() => setView((prev) => !prev)}
        className="flex justify-between items-center h-14 cursor-pointer"
      >
        <p>Features</p>
        <FaAngleDown
          className={`transform transition-transform duration-300 ${
            view ? "rotate-90" : ""
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          view ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-2 p-4 text-sm">{description}</p>
      </div>
    </section>
  );
};

export default Features;
