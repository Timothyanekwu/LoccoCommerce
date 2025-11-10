import React from "react";
import Image from "next/image";

type ItemProp = {
  img: string[];
  name: string;
  currImg: number;
  setCurrImg: React.Dispatch<React.SetStateAction<number>>;
};

const ImageSection = ({ img, name, currImg, setCurrImg }: ItemProp) => {
  return (
    <div className="flex flex-col gap-3 lg:w-[50%]">
      {/* <div className="w-full h-[40vh] lg:h-[25vw] aspect-square lg:aspect-auto relative"> */}
      <div className="w-full aspect-square rounded-xl h-[40vh] lg:h-[25vw] relative bg-neutral-100">
        <Image
          src={img[currImg] || "/images/placeholder.png"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex w-full gap-3 h-32 lg:h-24 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto">
        {img.length > 1 &&
          img.map((image, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrImg(index)}
                className="h-full aspect-square relative cursor-pointer"
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImageSection;
