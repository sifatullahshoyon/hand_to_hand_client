import LoginForm from "@/components/modules/auth/login/LoginForm";
import React from "react";
import style from "./Login.module.css";
import Container from "@/components/shared/Container";

const LoginPage = () => {
  return (
    <div className={`${style.authBanner}`}>
      <Container>
        <div className="flex flex-col justify-center items-center h-[90vh]">
          <div className="border-none shadow-lg rounded-lg bg-white  md:w-2/5 mx-auto my-5">
            <LoginForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
