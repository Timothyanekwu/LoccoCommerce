"use client";

import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Product,
  AppContextType,
  Orders,
  CartItem,
  Location,
} from "@/types/types";
import pageGutter from "./pagination";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Orders[]>([]);
  const [pages, setPages] = useState<(string | number)[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [qty, setQty] = useState<number>(1);
  const [locations, setLocations] = useState<Location[]>([]);
  const [locat, setLocat] = useState<Location>({
    _id: "",
    name: "",
    surname: "",
    fullAddress: "",
    info: "",
    phoneNo: "",
    additionalPhone: "",
  });
  const [locatView, setLocatView] = useState<boolean>(false);
  const [locationId, setLocationId] = useState<string>("");
  const [payType, setPayType] = useState<string>("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const userCheck = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      console.error("User not found in localStorage");
      return false;
    }

    const parsedUser = JSON.parse(user);
    const token = parsedUser.token;

    return token;
  };

  useEffect(() => {
    const getProducts = async () => {
      // const localUser = localStorage.getItem("user");

      // if (!localUser) return;
      try {
        const response = await axios.get(
          `${
            process.env.NEXT_PUBLIC_BASE_URL
          }/products?${searchParams.toString()}`
        );
        const result = await response.data;
        setProducts(result.final);
        setPages(pageGutter(result.totalPages, 1));
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [searchParams]);

  useEffect(() => {
    const fetchCart = async () => {
      const token = userCheck();
      if (!token) return;

      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products/cartData`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await res.data;
        setCart(result);
      } catch (e) {
        console.log(e);
      }
    };

    fetchCart();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      const token = userCheck();
      if (!token) return;

      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products/locations`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await res.data;
        setLocations(result);
      } catch (e) {
        console.log(e);
      }
    };

    fetchCart();
  }, []);
  // product search handler
  interface SearchHandlerEvent extends React.FormEvent<HTMLFormElement> {
    preventDefault: () => void;
  }

  const handleSearch = (e: SearchHandlerEvent) => {
    e.preventDefault();
    if (!search) return;
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("query", search);
    router.push(`/marketplace?${setParams.toString()}`);

    // setIsLoadingProducts(true);
  };

  // product sort handler
  const handleSort = (opt: string) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("sortBy", opt);
    router.push(`/marketplace?${setParams.toString()}`);

    // setSortView(false);
    // setIsLoadingProducts(true);
  };

  const handlePage = (page: string) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("page", page);
    router.push(`/marketplace?${setParams.toString()}`);
  };

  const handleCat = (item: string) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("category", item.toLowerCase());
    router.push(`/marketplace?${setParams.toString()}`);

    // setIsLoadingProducts(true);
    // setSidebarView(false);
  };

  const handlePrice = (min: number, max: number) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("priceRange", `${min},${max}`);
    router.push(`/marketplace?${setParams.toString()}`);
    // setSelectedOption(msg);
    // setIsLoadingProducts(true);
    // setSidebarView(false);
  };

  const addToCart = async (item: CartItem) => {
    const token = userCheck();
    if (!token) return;

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/cartData`,
        item,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.data;

      setCart((prev) => [...prev, result]);

      router.push("/cart");
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromCart = async (itemId: string) => {
    const token = userCheck();
    if (!token) return;

    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/cartData/${itemId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        setCart((prev) => prev.filter((item) => item._id !== itemId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addLocation = (e: { target: any }) => {
    switch (e.target.id) {
      case "name":
        setLocat((prev) => ({ ...prev, name: e.target.value }));
        break;
      case "surname":
        setLocat((prev) => ({ ...prev, surname: e.target.value }));
        break;
      case "fullAddress":
        setLocat((prev) => ({ ...prev, fullAddress: e.target.value }));
        break;
      case "info":
        setLocat((prev) => ({ ...prev, info: e.target.value }));
        break;
      case "phone":
        setLocat((prev) => ({ ...prev, phoneNo: e.target.value }));
        break;
      case "addPhone":
        setLocat((prev) => ({ ...prev, additionalPhone: e.target.value }));
        break;
      default:
        setLocat((prev) => prev);
        break;
    }
  };

  const locationSubmit = async () => {
    const token = userCheck();
    if (!token) return;

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/locations`,
      {
        name: locat.name,
        surname: locat.surname,
        fullAddress: locat.fullAddress,
        additionalInfo: locat.info,
        phoneNo: locat.phoneNo,
        additionalPhone: locat.additionalPhone,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = response.data;
    alert("Location added successfully!");
    setLocations((prev) => [
      ...prev,
      {
        ...result,
        fullAddress: result.fullAddress,
        phoneNo: result.phoneNo,
        additionalPhone: result.additionalPhone,
      },
    ]);

    setLocat({
      _id: "",
      name: "",
      surname: "",
      fullAddress: "",
      phoneNo: "",
      additionalPhone: "",
      info: "",
    });

    setLocatView(false);
  };

  const placeOrder = async () => {
    const token = userCheck();
    if (!token) return;

    const location = locations.find((location) => location._id === locationId);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/orders`,
      {
        customerFullName: `${location?.name || ""} ${location?.surname || ""}`,
        customerPhone: location?.phoneNo,
        secondPhone: location?.additionalPhone,
        customerAddress: location?.fullAddress,
        orderNumber: Math.round(Math.random() * 10000000000), // still change this later
        products: cart,
        payMethod: payType,
        totalPrice: cart.reduce((prev, curr) => prev + curr.price, 0),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/clearCart`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    alert("Order placed successfully!!!");

    setOrders((prev) => [...prev, res.data]);
    setCart([]);

    router.push("/marketplace");
  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        orders,
        setOrders,
        search,
        setSearch,
        handleSearch,
        handleSort,
        handlePage,
        handleCat,
        handlePrice,
        pages,
        setPages,
        searchParams,
        totalPages,
        setTotalPages,
        addToCart,
        removeFromCart,
        qty,
        setQty,
        locations,
        setLocations,
        locat,
        setLocat,
        locatView,
        setLocatView,
        addLocation,
        locationSubmit,
        locationId,
        setLocationId,
        payType,
        setPayType,
        placeOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
