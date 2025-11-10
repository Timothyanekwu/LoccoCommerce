"use client";

import React from "react";
import Image from "next/image";
import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = useLogin();
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    login
      .login({
        email: user.email,
        password: user.password,
      })
      .then((result) => result && router.push("/marketplace"));
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/3 h-full relative flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/silkBackground.jpeg"
            alt="Product Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="rounded-xl bg-[rgba(255,255,255,0.5)] backdrop-blur-xs h-[80vh] w-[80%] bg-opacity-50 p-5">
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl">LOCCO</p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5 mt-10">
                <input
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, email: e.target.value };
                    })
                  }
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, password: e.target.value };
                    })
                  }
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
