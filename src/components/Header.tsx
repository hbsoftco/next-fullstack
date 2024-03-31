"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-800 text-white p-5 ">
      <button
        className="text-2xl font-bold cursor-pointer bg-transparent border-none"
        onClick={() => router.push("/")}
      >
        hbsoft blog - NEXT
      </button>
    </div>
  );
};

export default Header;
