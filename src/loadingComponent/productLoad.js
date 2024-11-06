import React from "react";

const ProductLoading = () => {
  return (
    <div className="w-full p-2 mb-5 rounded-lg flex flex-col justify-between">
      <div>
        {/* image */}
        <div className="w-full h-40 relative mb-2 animate-colorChange"></div>

        <div className="w-full">
          {/* name */}
          <div className="animate-colorChange"></div>

          {/* price */}
          <div className="mt-3">
            <div className="h-14 w-[50%] animate-colorChange"></div>
          </div>
          <div className="w-[70%] h-6 mt-3 animate-colorChange"></div>
        </div>
      </div>
      <div className="h-9 rounded-md w-full mt-3 animate-colorChange"></div>
    </div>
  );
};

export default ProductLoading;
