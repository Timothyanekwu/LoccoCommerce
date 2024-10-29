"use client";

import React from "react";
import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";
import { useLogout } from "@/hooks/useLogout";
import { useRouter } from "next/navigation";
import FormInput from "@/pageComponents/formInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);

    if (success) {
      router.push("/");
    }
  };

  return (
    <div className="px-6 lg:px-10 py-28 flex-grow">
      <div className="flex w-full justify-between items-baseline pr-3">
        <p className="text-3xl font-semibold w-full text-center lg:text-start">
          Login
        </p>
        <p
          onClick={() => router.push("/auth/signup")}
          className="text-[#4D4875] underline underline-offset-2 cursor-pointer"
        >
          Register
        </p>
      </div>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div className=" overflow-y-scroll h-fit lg:h-[57vh] px-1 custom-scrollbar">
          <FormInput
            label="Email"
            placeholder={"Enter Email"}
            type="email"
            method={(e) => setEmail(e.target.value)}
            value={email}
          />

          <FormInput
            label="Password"
            placeholder={"Enter Password"}
            type="password"
            method={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button
            className={` ${
              isLoading ? "bg-neutral-200" : "bg-[#4D4875]"
            } w-full h-10 rounded-sm text-white flex items-center text-sm justify-center mt-4`}
            disabled={isLoading}
          >
            Submit
          </button>
          {error && (
            <div className="w-full h-10 text-sm text-red-600 mt-3 border border-red-600 bg-red-100 flex items-center justify-center">
              {error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
