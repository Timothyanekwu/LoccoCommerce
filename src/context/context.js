"use client";

import { createContext, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

const DataContext = createContext();

export const Data = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProds, setFilteredProds] = useState([]);
  const [currProduct, setCurrProduct] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [discOption, setDiscOption] = useState("");
  const [deviceWidth, setDeviceWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // fetch products from the database
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5500/products?${searchParams.toString()}`
        );
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [searchParams]);

  // fetch cart products from the database
  useEffect(() => {
    const getData = async () => {
      try {
        const cartItems = localStorage.getItem("cartProd");

        if (!cartItems) {
          const result = await axios.get(
            "http://localhost:5500/products/cartData"
          );
          setProducts(result.data);
          localStorage.setItem("cartProd", JSON.stringify(result.data));
        } else {
          const parsedItems = JSON.parse(cartItems);
          setCart(parsedItems);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const handleCat = (item) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("category", item.toLowerCase());
    router.push(`/?${setParams.toString()}`, undefined, { shallow: true });
  };

  const handlePrice = (msg, value) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("priceRange", value);
    router.push(`/?${setParams.toString()}`, undefined, { shallow: true });
    setSelectedOption(msg);
  };

  const handleDisc = (item) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("discount", item.toString());
    router.push(`/?${setParams.toString()}`, undefined, { shallow: true });
    setDiscOption(item);
  };

  const clearFilter = () => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.delete("priceRange");
    router.push(`/?${setParams.toString()}`, undefined, {
      shallow: true,
    });

    setSelectedOption(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("query", search);
    router.push(`/?${setParams.toString()}`, undefined, {
      shallow: true,
    });
  };

  return (
    <DataContext.Provider
      value={{
        products,
        currProduct,
        setCurrProduct,
        cart,
        setCart,
        deviceWidth,
        handleCat,
        handlePrice,
        selectedOption,
        discOption,
        handleDisc,
        clearFilter,
        search,
        setSearch,
        handleSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
