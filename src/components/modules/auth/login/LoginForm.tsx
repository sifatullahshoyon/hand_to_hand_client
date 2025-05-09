"use client";
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
import { loginUser } from "@/services/authService";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { useState } from "react";

const LoginForm = () => {
  const [accepted, setAccepted] = useState(false);
  // form validation
  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
  });

  const { setLoading } = useUser();

  // for redirects
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  const {
    formState: { isSubmitting },
    setValue, // <<== এটা ইউজ করব ফিল্ড সেট করতে
  } = form;

  // submit handler function
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      setLoading(true);
      if (res?.status === true) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/user/profile");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  // ======== New: Credential fill function =========
  const fillCredentials = (type: "user" | "admin" | "superAdmin") => {
    if (type === "user") {
      setValue("email", "jakirstor@gmail.com");
      setValue("password", "12345678");
    }
    //  else if (type === "admin") {
    //   setValue("email", "admin@gmail.com");
    //   setValue("password", "12345678");
    // } else if (type === "superAdmin") {
    //   setValue("email", "superadmin@gmail.com");
    //   setValue("password", "12345678");
    // }
  };

  return (
    <>
      <Card className="w-full h-full mx-auto flex flex-col justify-center shadow-none overflow-hidden rounded border-none">
        <CardHeader>
          <CardDescription className=" text-[#1A1A1A] text-xl text-center font-bold">
            Sign in to <span className="text-purple-500 ">Hand To Hand</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Demo Credential Section */}
          <div className="mb-4 text-center">
            <h4 className="text-purple-500 font-semibold mb-2">
              Demo Credential:
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant="default"
                className=" text-white text-sm bg-gray-500 hover:bg-gray-600"
                type="button"
                onClick={() => fillCredentials("user")}
              >
                User Credentials
              </Button>
              {/* <Button
                variant="outline"
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm"
                type="button"
                onClick={() => fillCredentials("admin")}
              >
                Admin Credentials
              </Button>
              <Button
                variant="outline"
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm"
                type="button"
                onClick={() => fillCredentials("superAdmin")}
              >
                Super Admin Credentials
              </Button> */}
            </div>
          </div>

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
                        value={field.value || ""}
                        className="placeholder:text-[#c0bfbd]"
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
              <div className="flex flex-col md:flex-row justify-between items-center space-y-1.5">
                <LoginCheckbox accepted={accepted} setAccepted={setAccepted} />
                <Link
                  href="/"
                  className="md:text-right text-xs pt-1 md:pt-0 font-normal hover:text-purple-500 cursor-pointer underline"
                >
                  Forgot Password
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white tracking-wide cursor-pointer"
                disabled={!accepted}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "SIGN IN"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardContent>
          <Divider />
          <p className="text-xs text-[#1A1A1A] text-center mt-2">
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
    </>
  );
};

export default LoginForm;
