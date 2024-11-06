"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useContext } from "react";
import DataContext from "@/context/context";
import Image from "next/image";
import Info from "./info";
import Description from "./description";
import Features from "./features";
import Specifications from "./specifications";
import Locations from "./locations";
import { useRouter } from "next/navigation";
import ProductPageLoad from "@/loadingComponent/productPageLoad";

const Page = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const router = useRouter();
  const {
    products,
    setCurrProduct,
    currProduct,
    addCart,
    deviceWidth,
    selectStates,
    setSelectState,
    localGovt,
    setLocalGovt,
    isLoadingProd,
  } = useContext(DataContext);
  const { id } = useParams(); // Fetch the id from the URL

  useEffect(() => {
    if (products && id) {
      const foundProduct = products.find((item) => item._id === id);
      if (foundProduct) {
        setCurrProduct({ ...foundProduct, qty: 1 });
      } else {
        console.warn("Product not found!");
      }
    }
  }, [products, id]);

  if (isLoadingProd) return <ProductPageLoad />;

  return (
    <>
      {currProduct && (
        <div className="mt-10 prodPagePadding">
          <div className="lg:flex w-full">
            <div className="lg:flex lg:w-[90%] lg:mr-4">
              <div className="lg:mr-7">
                <div className="w-full lg:w-80 h-80 relative bg-neutral-100 py-2 p-2">
                  <Image
                    src={currProduct.img[imgIndex]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                    alt={currProduct.name}
                  />
                </div>
                <div className="flex my-3 lg:w-80">
                  {currProduct.img.length > 1 &&
                    currProduct.img.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setImgIndex(index)}
                        className={`w-20 h-20 relative mx-2 border rounded-md cursor-pointer ${
                          index === imgIndex && "border-2 border-blue-500"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={currProduct.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    ))}
                </div>
              </div>
              <Info
                name={currProduct.name}
                price={currProduct.price}
                addCart={addCart}
                qty={currProduct.qty}
                setCurrProduct={setCurrProduct}
                deviceWidth={deviceWidth}
              />
            </div>
            <Locations
              selectStates={selectStates}
              setSelectState={setSelectState}
              localGovt={localGovt}
              setLocalGovt={setLocalGovt}
            />
          </div>
          <Description description={currProduct.description} />
          <Features description={currProduct.description} />
          <Specifications description={currProduct.description} />
          {deviceWidth < 1024 && (
            <section className="w-full flex justify-center items-center bg-white mt-3 pb-2 sticky right-0 left-0 bottom-0">
              <div
                onClick={addCart}
                className="bg-[#4D4875] rounded-lg h-14 flex items-center justify-center w-full cursor-pointer hover:bg-[#3f3a5f] shadow-lg"
              >
                <p className="text-white font-[500] text-lg">Add to cart</p>
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default Page;
