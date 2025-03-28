import React from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    try {
      const res = await fetch("/api/auth//logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data?.error) {
        throw new Error(data?.error);
      }

      localStorage.removeItem("app_user");

      setAuthUser(null);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};

export default useLogout;
