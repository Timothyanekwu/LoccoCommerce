import React from "react";
import Image from "next/image";
import Star from "../../../public/icons/star";
import Card from "@/components/card/page";
import Link from "next/link";

const Landing = () => {
  const products = [
    {
      img: "/images/camera.jpeg",
      name: "Sony a6500 Premium E-mount APS-C Camera",
      price: "N 35000",
    },
    {
      img: "/images/camera2.jpeg",
      name: "Canon EOS 5D Mark III",
      price: "N 260000",
    },
    {
      img: "/images/headset.jpeg",
      name: "Sony WH-1000XM4 Wireless Noise-Canceling Over-Ear Headphones",
      price: "N 28000",
    },
    {
      img: "/images/watch.jpeg",
      name: "Apple Watch Series 6",
      price: "N 125000",
    },
  ];

  return (
    <div className="max-w-[1024px] mx-auto">
      {/* Hero Section */}
      <div className="w-full max-w-[1024px] mx-auto bg-input pt-6 px-4 md:px-16 flex flex-col md:flex-row md:gap-20">
        <div className="flex flex-col gap-6 md:w-[70%] lg:w-[50%] lg:py-12">
          <p className="font-semibold text-3xl">
            EVERYTHING YOU NEED. ALL IN ONE PLACE.
          </p>
          <p className="text-sm md:text-xs font-light text-neutral-600">
            Browse through our diverse range of products, from electronics to
            fashion, home essentials to outdoor gear, and find exactly what you
            need.
          </p>
          <Link
            href="/marketplace"
            className="bg-black text-white py-4 md:py-2 rounded-full md:w-40 md:text-xs flex items-center justify-center"
          >
            Shop Now
          </Link>
        </div>
        <div className="relative flex justify-center">
          <Star className="absolute top-[35%] left-[10%] fill-black w-[10vw] md:w-[5vw] lg:w-[4vw] h-[10vw] md:h-[5vw] lg:h-[4vw]" />
          <Star className="absolute top-10 right-5 fill-black w-[15vw] md:w-[8vw] lg:w-[6vw] h-[15vw] md:h-[8vw] lg:h-[6vw]" />
          <Image
            src="/images/HeroImage1.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full h-16 bg-black"></div>

      <div className="py-10">
        <div className="w-full flex justify-center mb-8">
          <p className="text-2xl">New Arrivals</p>
        </div>

        <div className="flex overflow-x-auto md:grid gap-8 grid-cols-4 px-10">
          {products.map((product, index) => {
            return (
              <Card
                key={index}
                img={product.img}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>

        <div className="border-b border-b-input py-8 w-full flex items-center justify-center ">
          <button className="border cursor-pointer border-input rounded-full px-4 py-2 text-xs">
            View All
          </button>
        </div>
      </div>

      <div className="py-10">
        <div className="w-full flex justify-center mb-8">
          <p className="text-2xl">Top Selling</p>
        </div>

        <div className="flex overflow-x-auto md:grid gap-8 grid-cols-4 px-10">
          {products.map((product, index) => {
            return (
              <Card
                key={index}
                img={product.img}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>

        <div className="border-b border-b-input py-8 w-full flex items-center justify-center ">
          <button className="border cursor-pointer border-input rounded-full px-4 py-2 text-xs">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
