"use client"
import { useState, useRef } from "react";

const ScrollContainer = () => {
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div ref={containerRef} className="relative overflow-x-hidden"></div>
    </div>
  );
};
export default ScrollContainer;
