"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginCheckbox from "@/components/Checkbox/LoginCheckbox";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Divider from "@/components/Divider";
import Link from "next/link";
import { loginValidationSchema } from "./loginValidation";

const LoginForm = () => {
  const isLoading = false;
  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: "user@gmail.com",
      password: "123456",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // const toastId = toast.loading("logging in...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      console.log(userInfo);

      // const res = await login(userInfo).unwrap();

      // const user = verifyToken(res.token);

      // dispatch(setUser({ user: res.data, token: res.token }));
      // toast.success("Login successfully", { id: toastId, duration: 2000 });
      toast.success("Login Successfully.");

      // Navigate("/");
    } catch (error: any) {
      console.error(error);
      toast.error("something went wrong");
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-center shadow-none overflow-hidden rounded">
      <Card className="md:w-4/5 h-full mx-auto flex flex-col justify-center shadow-none overflow-hidden rounded border-none">
        <CardHeader>
          <CardDescription className=" text-[#1A1A1A] text-xl text-center font-bold">
            Sign in to <span className="text-purple-500 ">Hand To Hand</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full items-center gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="email" className="">
                      Email
                    </Label>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="Enter Your Email"
                        {...field}
                        className=""
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="password" className="">
                      Password
                    </Label>
                    <FormControl>
                      <Input
                        id="password"
                        type="text"
                        placeholder="Enter Your Password"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <div className="flex flex-col md:flex-row justify-between items-center space-y-1.5">
                <LoginCheckbox />
                <Link
                  href="/"
                  className="md:text-right text-xs pt-1 md:pt-0  font-normal hover:text-purple-500 cursor-pointer underline"
                >
                  Forgot Password
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full  bg-purple-500 hover:bg-purple-600 text-white tracking-wide"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "SIGN IN"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardContent>
          <Divider />
          <p className=" text-xs text-[#1A1A1A] text-center mt-2">
            Don&apos;t have an account? Please{" "}
            <Link
              href="/registration"
              className="text-purple-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
