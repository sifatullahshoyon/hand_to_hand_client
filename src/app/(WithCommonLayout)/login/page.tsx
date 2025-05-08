import LoginForm from "@/components/modules/auth/login/LoginForm";
import React from "react";
import style from "./Login.module.css";
import Image from "next/image";
import login from "@/app/assets/img/login/login.gif";

const LoginPage = () => {
  return (
    <div className={`${style.authBanner}  min-h-screen flex items-center`}>
      <div className="flex w-[95%] lg:w-2/3 mx-auto  flex-col md:flex-row justify-center  my-6 items-center gap-10 py-10 bg-white px-6 rounded-2xl shadow-lg">
        {/* Illustration Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={login}
            alt="Login Illustration"
            width={500}
            height={500}
            className="object-contain rounded-lg"
            priority
          />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 max-w-md  rounded-2xl bg-gray-50 shadow ">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
