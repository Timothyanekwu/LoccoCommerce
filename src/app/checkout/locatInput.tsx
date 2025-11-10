import React from "react";

type LocatInputProp = {
  label: string;
  value: string;
  action: (e: { target: any }) => void;
  id: string;
  type: string;
};

const LocatInput = ({ label, value, action, id, type }: LocatInputProp) => {
  return (
    <div>
      <label className="w-full text-sm">{label}:</label>
      <input
        value={value}
        onChange={action}
        id={id}
        className="border focus:border-[#4D4875] focus:border-2 w-full h-10 px-3 rounded-sm focus:outline-none mb-3"
        type={type}
      />
    </div>
  );
};

export default LocatInput;
