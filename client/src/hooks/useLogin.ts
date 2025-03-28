import React from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const { setAuthUser } = useAuthContext();

  const [loading, setLoading] = React.useState<boolean>(false);

  const login = async (username: string, password: string) => {
    const success: boolean = handleInputErrors(username, password);

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Manually throw an error if response is not ok (e.g., 404, 400, etc.)
        const errorData = await res.json();
        throw new Error(errorData?.message || "Something went wrong");
      }

      localStorage.setItem("app_user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error: any) {
      toast.error("Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors(username: string, password: string) {
  if (!username || !password) {
    toast.error("Please fill all input fields");
    return false;
  }

  if (password.length < 4) {
    toast.error("Password should have at lease 4 characters");
    return false;
  }

  return true;
}
