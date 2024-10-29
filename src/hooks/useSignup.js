import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (firstName, lastName, phoneNumber, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:5500/user/signup", {
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
    });

    const result = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(result.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(result));
      dispatch({ type: "LOGIN", payload: result });
      setIsLoading(false);
      return true;
    }
  };

  return { signup, isLoading, error };
};
