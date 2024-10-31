"use client";

import React from "react";
import { useState } from "react";
import { useSignup } from "@/hooks/useSignup";
import { useRouter } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";
import FormInput from "@/pageComponents/formInput";

const Form = () => {
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const { signup, isLoading, error } = useSignup();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signup(
      field.firstName,
      field.lastName,
      field.phoneNumber,
      field.email,
      field.password
    );

    if (success) {
      router.push("/marketplace");
    }
  };

  return (
    <div className="px-6 lg:px-10 py-14 flex-grow">
      <div className="flex w-full justify-between items-baseline pr-3">
        <p className="text-3xl font-semibold w-full text-center lg:text-start">
          Create an account
        </p>
        <p
          onClick={() => router.push("/auth/login")}
          className="text-[#4D4875] underline underline-offset-2 cursor-pointer"
        >
          Login
        </p>
      </div>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div className=" overflow-y-scroll h-fit lg:h-[57vh] px-1 custom-scrollbar">
          <FormInput
            label="First Name"
            type="text"
            placeholder={"Enter First Name"}
            method={(e) =>
              setField((prev) => ({ ...prev, firstName: e.target.value }))
            }
            value={field.firstName}
          />
          <FormInput
            label="Last Name"
            type="text"
            placeholder={"Enter Last Name"}
            method={(e) =>
              setField((prev) => ({ ...prev, lastName: e.target.value }))
            }
            value={field.lastName}
          />
          <FormInput
            label="Phone Number"
            type="text"
            placeholder={"Enter Phone Number"}
            method={(e) =>
              setField((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            value={field.phoneNumber}
          />
          <FormInput
            label="Email"
            placeholder={"Enter Email"}
            type="email"
            method={(e) =>
              setField((prev) => ({ ...prev, email: e.target.value }))
            }
            value={field.email}
          />
          <FormInput
            label="Password"
            placeholder={"Create Password"}
            type="password"
            method={(e) =>
              setField((prev) => ({ ...prev, password: e.target.value }))
            }
            value={field.password}
          />
        </div>

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
      </form>
    </div>
  );
};

export default Form;
