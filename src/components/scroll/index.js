"use client";
import { useEffect, useState, useRef } from "react";

export default function Scroll() {
  const [isTop, setIsTop] = useState(true);

  const top = useRef(true);

  const setTop = (has) => {
    setIsTop(has);
    top.current = has;
  };

  const init = () => {
    const topNumber = 200;
    setTop(window.scrollY < topNumber);
    window.addEventListener("scroll", () => {
      if (window.scrollY < topNumber && !top.current) {
        setTop(true);
      } else if (window.scrollY >= topNumber && top.current) {
        setTop(false);
      }
    });
  };

  useEffect(init, []);

  return (
    <div
      className={`flex items-center justify-center ${
        isTop ? "animate-bounce" : "animate-bounce"
      } fixed w-9 h-9 rounded-full bg-primary-800 bottom-6 right-6 text-neutral-25 cursor-pointer`}
      onClick={() => {
        const top = isTop ? 99999999 : 0;
        window.scrollTo({ top, behavior: "smooth" });
      }}
    >
      <i
        className={`transition-all icon-mim-arrow ${isTop ? "" : "rotate-180"}`}
      />
    </div>
  );
}
