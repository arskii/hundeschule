"use client";

import React from "react";

interface CustomButtonProps {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MainButton = ({ text, className, onClick }: CustomButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-main hover:bg-blue-700 text-white font-bold font-serif py-5 px-10 uppercase ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
