"use client";

import CountUp from "react-countup";

export default function Counter({ end }) {
  return (
    <CountUp
      duration={3}
      start={0}
      end={end}
      enableScrollSpy
      scrollSpyOnce
      scrollSpyDelay={500}
    />
  );
}
