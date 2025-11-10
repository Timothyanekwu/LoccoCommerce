import React from "react";
import CircleTick from "../../../../public/icons/circleTick";
import RatingStar from "../../../../public/icons/ratingStar";

const Comment = () => {
  return (
    <div className="p-3 rounded-xl border border-neutral-300 flex flex-col gap-y-4">
      <div className="flex gap-1">
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
      </div>
      <div className="flex gap-2 items-center">
        <p className="font-bold">Samantha D. </p>
        <CircleTick />
      </div>
      <div>
        <p className="text-sm text-neutral-600">
          "I absolutely love this t-shirt! The design is unique and the fabric
          feels so comfortable. As a fellow designer, I appreciate the attention
          to detail. It's become my favorite go-to shirt."
        </p>
      </div>
      <div className="text-neutral-600 text-sm">Posted on August 14, 2023</div>
    </div>
  );
};

export default Comment;
