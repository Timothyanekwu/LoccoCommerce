import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

type LoginResponse = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useAuthContext();

  const login = async ({ email, password }: LoginResponse) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(result.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(result));
      alert(`${result} Successful`);
      dispatch({ type: "LOGIN", payload: result });
      setIsLoading(false);
      return true;
    }
  };

  return { login, isLoading, error };
};
