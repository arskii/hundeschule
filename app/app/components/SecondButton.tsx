"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface CustomButtonProps {
  text: string;
  className?: string;
  link: string;
}

const SecondButton = ({ text, className, link }: CustomButtonProps) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push(link);
  };

  return (
    <button
      type="submit"
      className={`bg-white text-black font-bold font-serif py-5 px-10 uppercase ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default SecondButton;
