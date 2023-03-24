"use client";

import React from "react";

interface CustomButtonProps {
  text: string;
  className?: string;
}

const SecondButton = ({ text, className }: CustomButtonProps) => {
  return (
    <button
      className={`bg-white text-black font-bold font-serif py-5 px-10 uppercase ${className}`}
    >
      {text}
    </button>
  );
};

export default SecondButton;
