import React from "react";
import "@/app/loader.css";

const LoadingSpinner = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingSpinner;
