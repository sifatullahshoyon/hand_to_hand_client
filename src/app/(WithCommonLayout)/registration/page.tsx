import React from "react";
import Container from "@/components/shared/Container";
import style from "../login/Login.module.css";
import RegistrationForm from "@/components/modules/auth/registration/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className={`${style.authBanner}`}>
      <Container>
        <div className="flex flex-col justify-center items-center h-[90vh]">
          <div className="border-none shadow-lg rounded-lg bg-white  md:w-2/5 mx-auto my-5">
            <RegistrationForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegistrationPage;
