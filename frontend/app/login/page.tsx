"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import BackgroundWrapper from "../components/BackgroundWrapper";
// import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
// console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
const submit = async () => {
  console.log("LOGIN CLICKED");
  await login(email, password);
};
  return (
    <BackgroundWrapper>
    <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

      <input
      className="w-full p-3 mb-4 rounded-lg text-black"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-3 mb-6 rounded-lg text-black"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => login(email, password)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg font-bold">
        Login
      </button>
    </div>
    </BackgroundWrapper>
  );
}
