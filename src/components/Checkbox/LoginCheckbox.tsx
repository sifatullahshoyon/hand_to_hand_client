import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const LoginCheckbox = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-xs font-medium font-roboto text-[#1A1A1A] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
};

export default LoginCheckbox;
