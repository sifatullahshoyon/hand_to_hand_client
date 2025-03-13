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

const LoginForm = () => {
  // form validation
  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: "testuser@gmail.com",
      password: "12345678",
    },
  });

  // for redirect
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  // Destructure form value
  const {
    formState: { isSubmitting },
  } = form;

  // submit handler function
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);

      if (res?.status === true) {
        toast.success(res?.message);
        // redirect
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/profile");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.error(error);
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
                        value={field.value || ""}
                        className="placeholder:text-[#c0bfbd]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* End Email  */}
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
                className="w-full  bg-purple-500 hover:bg-purple-600 text-white tracking-wide cursor-pointer"
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
          <p className=" text-xs text-[#1A1A1A] text-center mt-2">
            Don&apos;t have an account? Please{" "}
            <Link
              href="/registration"
              className="text-purple-500 hover:underline "
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
