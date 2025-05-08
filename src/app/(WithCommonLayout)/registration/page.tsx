import React from "react";
import style from "../login/Login.module.css";
import RegistrationForm from "@/components/modules/auth/registration/RegistrationForm";
import Image from "next/image";
import signIn from "@/app/assets/img/login/SignUp.gif";

const RegistrationPage = () => {
  return (
    <div className={`${style.authBanner} min-h-screen flex items-center`}>
      <div className="flex w-[95%] lg:w-2/3 mx-auto  flex-col md:flex-row justify-center  my-6 items-center gap-10 py-10 bg-white px-6 rounded-2xl shadow-lg">
        {/* Illustration Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={signIn}
            alt="signup Illustration"
            width={500}
            height={500}
            className="object-contain rounded-lg"
            priority
          />
        </div>

        {/* Registration Form */}
        <div className="w-full md:w-1/2 max-w-md h-auto rounded-2xl bg-gray-50 shadow ">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
