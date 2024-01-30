"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import signupimg from "../../../assets/signupimg.png";
import googleImg from "../../../assets/google.webp";
import Input from "@/components/Inputs/Input";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setisLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    const predefinedEmail = "user@example.com";
    const predefinedPassword = "password123";

    if (
      data.email === predefinedEmail &&
      data.password === predefinedPassword
    ) {
      // Login successful, you can redirect or perform other actions here
      toast.success("Logged In Successfully");
      router.refresh();
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      // Display an error message if credentials don't match
      toast.error("Invalid email or password");
    }
    setisLoading(false);
  };

  return (
    <div className="md:flex items-center">
      <div>
        <Toaster />
        <p className="text-xs text-center text-[#A3AED0]">Back to dashboard</p>
        <div className=" md:w-[50vw] p-14 md:px-36 md:py-10">
          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-[#2B3674]">Sign In</h1>
              <h4 className="text-base text-[#A3AED0]">
                Enter your email and password to sign in!
              </h4>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div className="mt-4">
                  <button
                    onClick={() => signIn("google")}
                    className=" flex items-center justify-center space-x-5 w-full text-sm px-4 py-4 tracking-wide
                 transition-colors duration-200 transform bg-[#F4F7FE] rounded-2xl focus:outline-none"
                  >
                    <Image
                      src={googleImg}
                      width={25}
                      height={25}
                      alt="google-login"
                    />
                    <p>Sign up with Google</p>
                  </button>
                </div>
                <div className="flex items-center justify-center my-8 space-x-2">
                  <div className="flex-1 h-[1px] bg-gray-500"></div>
                  <p className="text-sm text-center text-gray-700">
                    Or, Sign up with
                  </p>
                  <div className="flex-1 h-[1px] bg-gray-500"></div>
                </div>

                <Input
                  register={register}
                  id="email"
                  label="Email"
                  placeholder="Enter your email"
                />
                <Input
                  register={register}
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                />

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      name="myCheckbox"
                    ></input>
                    <p className="text-sm text-start text-gray-700">
                      Keep me logged in
                    </p>
                  </div>
                  <p className=" text-sm text-start text-gray-700">
                    <Link
                      href="/login"
                      className="font-medium text-[#4318FF] hover:underline"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    className={`w-full text-sm px-4 py-4 tracking-wide text-white transition-colors duration-200
                 transform rounded-2xl focus:outline-none  bg-[#4318FF]
                  
                 `}
                  >
                    Sign In
                  </button>
                </div>
              </form>

              <p className="mt-4 text-sm text-start text-gray-700">
                Not registed yet?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#4318FF] hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[50vw] relative h-[100vh]">
        <Image src={signupimg} fill alt="login-image" sizes="100%" />
      </div>
    </div>
  );
};

export default SignUp;
