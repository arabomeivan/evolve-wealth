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
    <div className="container py-28">
      <div>
      <Toaster />
        {/* <p className="text-xs text-center text-[#A3AED0]">Back to dashboard</p> */}
        <h1 className="text-3xl font-semibold text-[#2B3674]">Sign Up</h1>
              <h4 className="text-base text-[#A3AED0]">
                Its simple and easy
              </h4>

              <div className="grid md:grid-cols-3 space-y-5 md:space-y-0 md:space-x-5 h-[500px] fixed w-[90%] p-5 overflow-y-auto">
<div>
<Input
                  register={register}
                  id="email"
                  label="Username*"
                  placeholder="Enter your Username"
                />
                <Input
                  register={register}
                  id="email"
                  label="First Name *"
                  placeholder="Enter your First Name"
                />
                <Input
                  register={register}
                  id="email"
                  label="Last Name*"
                  placeholder="Enter your Last Name"
                />
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
                  placeholder="Min. 8 characters"
                />

<Input
                  register={register}
                  id="password"
                  label="Confirm Password"
                  type="password"
                  placeholder="Min. 8 characters"
                />

                <div className="mt-6 hidden md:block">
                  <button
                    className={`w-full text-sm px-4 py-4 tracking-wide text-white transition-colors duration-200
                 transform rounded-2xl focus:outline-none  bg-[#4318FF]
                  
                 `}
                  >
                    Submit
                  </button>
                </div>
                <p className="mt-4 text-sm text-start text-gray-700 hidden md:block">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#4318FF] hover:underline"
                >
                  Sign In
                </Link>
              </p>
</div>

<div>
<Input
                  register={register}
                  id="email"
                  label="Security Question"
                  placeholder="Enter"
                />
                <Input
                  register={register}
                  id="password"
                  label="Security Answer"
                  type="text"
                  placeholder="Enter"
                />

<Input
                      register={register}
                      id="password"
                      type="password"
                      placeholder="Bitcoin Receivers Wallet Address" label={""}                />

<Input
                      register={register}
                      id="password"
                      type="password"
                      placeholder="Bitcoin Receivers Wallet Address" label={""}                />

<Input
                      register={register}
                      id="password"
                      type="password"
                      placeholder="Ethereum Receivers Wallet Address" label={""}                />

<Input
                      register={register}
                      id="password"
                      type="password"
                      placeholder="Dogecoin Receivers Wallet Address" label={""}                />

                      <Input
                      register={register}
                      id="password"
                      type="password"
                      placeholder="Tron (Trx) Receivers Wallet Address" label={""}                />
</div>

<div className="pt-6 pb-24">
 
<Input
                      register={register}
                      id="password"
                      type="text"
                      placeholder="USDT TRC20 Receivers Wallet Address" label=""                />

<Input
                      register={register}
                      id="password"
                      type="password"
                      placeholder="Bitcoin cash  Receivers Wallet Address" label={""}                />

<Input
                      register={register}
                      id="password"
                      type="password"
                      placeholder="BNB Smart Chain Receivers Wallet Address" label={""}                />

<Input
                      register={register}
                      id="password"
                      type="password"
                      placeholder="Tron(TRX) Receivers Wallet Address" label={""}                />


                      <Input
                      register={register}
                      id="password"
                      type="password"
                      placeholder="Referral link" label={""}                />

<div className="mt-6 md:hidden">
                  <button
                    className={`w-full text-sm px-4 py-4 tracking-wide text-white transition-colors duration-200
                 transform rounded-2xl focus:outline-none  bg-[#4318FF]
                  
                 `}
                  >
                    Submit
                  </button>
                </div>
                <p className="mt-4 text-sm text-start text-gray-700 md:hidden block">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#4318FF] hover:underline"
                >
                  Sign In
                </Link>
              </p>
</div>
</div>

      </div>
    </div>
  );
};

export default SignUp;
