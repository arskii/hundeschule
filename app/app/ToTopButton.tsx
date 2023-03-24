"use client";

import React, { useState, useEffect } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-2">
      {isVisible && (
        <button
          className="px-5 py-2 bg-main text-white uppercase font-serif font-bold"
          onClick={scrollToTop}
        >
          To Top
        </button>
      )}
      {/* </button> */}
    </div>
  );
};
