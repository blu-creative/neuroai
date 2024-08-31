"use client";
import { useCallback, useState } from "react";

export default function Accordion({ text, children }) {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = useCallback(() => {
    setIsListVisible((x) => !x);
  }, []);

  return (
    <>
      <div
        onClick={toggleListVisibility}
        className="text-primary-700 flex items-center gap-1 justify-center cursor-pointer"
      >
        <p className="font-extrabold md:text-2xl text-base">{text}</p>
        <i
          className={`icon-mim-arrow block text-xl transform transition-transform ${
            isListVisible ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isListVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
