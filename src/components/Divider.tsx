import React from "react";

const Divider = () => {
  return (
    <div className="flex flex-row gap-6 justify-center items-center w-9/12 mx-auto">
      <div className="border w-full border-gray-300"></div>
      <div className="font-roboto text-[#1A1A1A]">or</div>
      <div className="border-[1px] border-gray-300 w-full"></div>
    </div>
  );
};

export default Divider;
