"use client";

import { createContext, useContext, useEffect, useState } from "react";
// import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import api from "../lib/axios";
import toast from "react-hot-toast";

type AuthContextType = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthenticated(true);
  }, []);
  const login = async (email: string, password: string) => {
    try {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.accessToken);
    toast.success("Login successful");
    setAuthenticated(true);
    router.push("/tasks");
  } catch {
    toast.error("Login failed");
  }
};

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;
