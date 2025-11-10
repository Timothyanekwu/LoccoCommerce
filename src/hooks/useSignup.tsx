import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

type SignupResponse = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useAuthContext();

  const signup = async ({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
  }: SignupResponse) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(result.error);
    }

    if (response.ok) {
      dispatch({ type: "LOGIN", payload: result });
      setIsLoading(false);
      localStorage.setItem("user", JSON.stringify(result));
      alert("Signup successful! Please log in.");
      return true;
    }
  };

  return { signup, isLoading, error };
};
