"use client";

import React from "react";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { usePathname } from "next/navigation";
import { AuthContextProvider } from "../context/userContext";
import { AppProvider } from "../context/context";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const isAuthRoute = pathname.includes("auth");

  if (isAuthRoute)
    return (
      <>
        <AuthContextProvider>
          <AppProvider>
            <div className="h-screen">{children}</div>
          </AppProvider>
        </AuthContextProvider>
      </>
    );

  return (
    <>
      <AuthContextProvider>
        <AppProvider>
          <Header />

          <div className="min-h-[80vh] max-w-[1024] mx-auto pb-[20vw] md:pb-[10vw] lg:pb-[5vw]">
            {children}
          </div>

          <Footer />
        </AppProvider>
      </AuthContextProvider>
    </>
  );
};

export default ClientLayout;
