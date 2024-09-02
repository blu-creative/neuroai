"use client";
import { useCallback, useRef, useState } from "react";

export default function Accordion({ text, children }) {
  const [height, setHeight] = useState(0);
  const pp = useRef();

  const toggleListVisibility = useCallback(() => {
    setHeight((x) => (x ? 0 : pp.current.clientHeight));
  }, []);

  return (
    <>
      <div
        onClick={toggleListVisibility}
        className="text-primary-700 flex items-center gap-1 justify-between cursor-pointer w-full bg-neutral-50 px-6 py-4 rounded-lg"
      >
        <p className="font-extrabold md:text-2xl text-base">{text}</p>
        <i
          className={`icon-mim-chevron block text-xl transform transition-transform ${
            height ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        style={{ height }}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          height ? "" : "!h-0"
        }`}
      >
        <div ref={pp}>
          <div className="px-12 py-6">{children}</div>
        </div>
      </div>
    </>
  );
}
