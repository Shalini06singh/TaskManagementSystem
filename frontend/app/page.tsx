"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white flex items-center justify-center">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506765515384-028b60a970df')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Task Management System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
        >
          Manage your daily work, stay organized, and boost productivity with a
          modern dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/login">
            <button className="w-full sm:w-48 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-bold text-lg shadow-lg hover:scale-105 transition-all active:scale-95">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="w-full sm:w-48 px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white bg-white/10 hover:bg-white hover:text-black font-bold text-lg backdrop-blur-md hover:scale-105 transition-all active:scale-95">
              Register
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
