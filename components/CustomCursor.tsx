"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.top = `${e.clientY}px`;
      el.style.left = `${e.clientX}px`;
    };

    const grow = () => el.classList.add("grow");
    const shrink = () => el.classList.remove("grow");

    window.addEventListener("mousemove", move);
    document
      .querySelectorAll("a, button, [data-cursor-grow]")
      .forEach((elm) => {
        elm.addEventListener("mouseenter", grow);
        elm.addEventListener("mouseleave", shrink);
      });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={ref} className="custom-cursor hidden md:block" />;
}
