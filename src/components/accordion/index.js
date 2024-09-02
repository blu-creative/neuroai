"use client";
import { useCallback, useRef, useState } from "react";

export default function Accordion({ text, children, simple }) {
  const [height, setHeight] = useState(0);
  const pp = useRef();

  const toggleListVisibility = useCallback(() => {
    setHeight((x) => (x ? 0 : pp.current.clientHeight));
  }, []);

  return (
    <div className="mb-4">
      <div
        onClick={toggleListVisibility}
        className={`flex items-center gap-1 cursor-pointer w-full px-6 py-4 ${
          simple
            ? "text-primary-500 justify-center"
            : "rounded-lg bg-neutral-50 justify-between text-primary-800"
        }`}
      >
        <p className="font-extrabold md:text-2xl text-base">{text}</p>
        <div
          className={`text-xl transform transition-all duration-500 ease-in-out
            ${
              simple
                ? ""
                : "rounded-full bg-primary-700 w-9 h-9 flex items-center justify-center text-neutral-50"
            }
             ${height ? "rotate-180" : ""}`}
        >
          <i className="icon-mim-chevron block " />
        </div>
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
    </div>
  );
}
