import React from "react";

const FormInput = ({ label, type, method, value, placeholder }) => {
  return (
    <div className="flex flex-col mb-6">
      <label className="text-sm">{label}: </label>
      <input
        className="border h-9 px-2 rounded-sm w-full border-neutral-500 focus:outline-none focus:border-2 focus:border-[#4D4875] text-sm"
        type={type}
        onChange={method}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
