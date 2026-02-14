"use client";

import { useState } from "react";
// import api from "@/lib/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import api from "../lib/axios";
import BackgroundWrapper from "../components/BackgroundWrapper";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    try {
      await api.post("/auth/register", form);
      toast.success("Registered successfully");
      router.push("/login");
    } catch {
      toast.error("Registration failed");
    }
  };

  return (
    <BackgroundWrapper>
      <div className="auth">
        {/* <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-full max-w-md"></div> */}
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <input
          className="w-full p-3 mb-4 rounded-lg text-black"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full p-3 mb-4 rounded-lg text-black"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full p-3 mb-6 rounded-lg text-black"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          onClick={submit}
          className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg font-bold"
        >
          Register
        </button>
      </div>
    </BackgroundWrapper>
  );
}
