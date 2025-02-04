import { AuthContextProvider } from "@/context/userContext";
import React, { Suspense } from "react";

const AuthLayout = ({ children }) => {
  return (
    <Suspense>
      <AuthContextProvider>
        <div>{children}</div>
      </AuthContextProvider>
    </Suspense>
  );
};

export default AuthLayout;
