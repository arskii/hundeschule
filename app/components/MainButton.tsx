"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface CustomButtonProps {
  text: string;
  className?: string;
  link: string;
}

const MainButton = ({ text, className, link }: CustomButtonProps) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className={`bg-main hover:bg-blue-700 text-white font-bold font-serif py-5 px-10 uppercase ${className}`}
      onClick={() => router.push(link)}
    >
      {text}
    </button>
  );
};

export default MainButton;
