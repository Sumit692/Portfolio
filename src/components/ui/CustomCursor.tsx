"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "project">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Suppress on touch devices
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window)
    ) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest("[data-cursor='project']");
      if (projectTarget) {
        setCursorType("project");
        return;
      }

      const interactiveTarget = target.closest(
        "button, a, input, textarea, [data-cursor='hover'], select"
      );
      if (interactiveTarget) {
        setCursorType("hover");
        return;
      }

      setCursorType("default");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Dynamic Cursor Disc / Pill */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "project" ? 130 : cursorType === "hover" ? 44 : 8,
          height: cursorType === "project" ? 38 : cursorType === "hover" ? 44 : 8,
          backgroundColor:
            cursorType === "project"
              ? "rgba(245, 245, 240, 0.95)"
              : cursorType === "hover"
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(245, 245, 240, 0.9)",
          borderColor:
            cursorType === "hover"
              ? "rgba(255, 255, 255, 0.35)"
              : cursorType === "project"
              ? "transparent"
              : "transparent",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
        className="flex items-center justify-center rounded-full border backdrop-blur-[2px] shadow-sm select-none"
      >
        {cursorType === "project" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-[10px] font-mono font-semibold tracking-wider text-black"
          >
            VIEW PROJECT ↗
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
