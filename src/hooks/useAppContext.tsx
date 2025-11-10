"use client";

import AppContext from "@/context/context";
import { useContext } from "react";

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw Error("useAuthContext must be used inside the AuthContextProvider");
  }

  return context;
};
