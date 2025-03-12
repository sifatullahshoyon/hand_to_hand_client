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
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Divider from "@/components/Divider";
import Link from "next/link";
import { registrationSchema } from "./registrationValidation";
const RegistrationForm = () => {
  const isLoading = false;

  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "user",
      email: "user@gmail.com",
      phoneNumber: "+880189632145",
      password: "123456",
      confirmPassword: "123456",
    },
  });

  // password match
  const password = form.watch("password");

  const confirmPassword = form.watch("confirmPassword");

  const passwordMatch = !!confirmPassword && password !== confirmPassword;

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
            Sign Up to <span className="text-purple-500 ">Hand To Hand</span>
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="name">Name</Label>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Enter Your Name"
                        {...field}
                        value={field.value || ""}
                        className="placeholder:text-[#c0bfbd]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* End Name */}
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
                        value={field.value || ""}
                        className="placeholder:text-[#c0bfbd]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* End Email */}
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <FormControl>
                      <Input
                        id="phoneNumber"
                        placeholder="Enter Your Phone Number (+880189632145)"
                        {...field}
                        value={field.value || ""}
                        className="placeholder:text-[#c0bfbd]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* End Phone Number */}
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
                        type="password"
                        placeholder="Enter Your Password"
                        {...field}
                        value={field.value || ""}
                        className="placeholder:text-[#c0bfbd]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* End Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <FormControl>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        {...field}
                        value={field.value || ""}
                        className="placeholder:text-[#c0bfbd]"
                      />
                    </FormControl>
                    {/* password match logic */}
                    {confirmPassword && password !== confirmPassword ? (
                      <FormMessage className="text-red-400">
                        Password Doesn&apos;t Match
                      </FormMessage>
                    ) : (
                      <FormMessage className="text-red-400" />
                    )}
                  </FormItem>
                )}
              />
              {/* End Confirm Password */}
              <Button
                disabled={passwordMatch}
                type="submit"
                className="w-full  bg-purple-500 hover:bg-purple-600 text-white tracking-wide cursor-pointer"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "SIGN UP"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardContent>
          <Divider />
          <p className=" text-xs text-[#1A1A1A] text-center mt-2">
            Already have an account? Please{" "}
            <Link href="/login" className="text-purple-500 hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
