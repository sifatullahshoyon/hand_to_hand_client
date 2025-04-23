"use client";

import React, { useEffect } from "react";
import UserProvider from "@/context/UserContext";
import StoreProvider from "./StoreProvider";

import AOS from "aos";
import "aos/dist/aos.css";

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on the client side
  }, []);

  return (
    <UserProvider>
      <StoreProvider>{children}</StoreProvider>
    </UserProvider>
  );
};

export default Providers;
