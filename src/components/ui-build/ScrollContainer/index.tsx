"use client";
import { useState, useRef } from "react";

const ScrollContainer = () => {
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      <h2>Hello</h2>
    </div>
  );
};
export default ScrollContainer;
