import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://loccocommercebackend.onrender.com/user/login",
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
      // alert(`${result}`);
      dispatch({ type: "LOGIN", payload: result });
      setIsLoading(false);
      return true;
    }
  };

  return { login, isLoading, error };
};
