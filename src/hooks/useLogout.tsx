"use client";

import { useState, useContext } from "react";
import { useAuthContext } from "./useAuthContext";

import AppContext from "../context/context";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("useLogout must be used within an AppProvider");
  }

  const { setOrders, setCart } = appContext;

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    setOrders([]);
    setCart([]);
  };

  return { logout };
};
