/**
 * Parallax Floating Component
 * Based on 21st.dev community component by danielpetho
 * https://21st.dev/community/components/danielpetho/parallax-floating
 */

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

interface FloatingProps {
  children: ReactNode;
  sensitivity?: number;
  className?: string;
}

interface FloatingElementProps {
  children: ReactNode;
  depth?: number;
  className?: string;
}

export function FloatingElement({
  children,
  depth = 1,
  className,
}: FloatingElementProps) {
  return (
    <motion.div
      className={cn("absolute", className)}
      data-depth={depth}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

export default function Floating({
  children,
  sensitivity = 1,
  className,
}: FloatingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elements, setElements] = useState<HTMLElement[]>([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (!containerRef.current) return;

    const els = Array.from(
      containerRef.current.querySelectorAll("[data-depth]")
    ) as HTMLElement[];
    setElements(els);
  }, [children]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      mouseX.set(deltaX * sensitivity);
      mouseY.set(deltaY * sensitivity);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [sensitivity, mouseX, mouseY]);

  useEffect(() => {
    const unsubX = springX.on("change", (latestX) => {
      const latestY = springY.get();
      elements.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || "1");
        const moveX = latestX * depth * 30;
        const moveY = latestY * depth * 30;
        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    });

    const unsubY = springY.on("change", (latestY) => {
      const latestX = springX.get();
      elements.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || "1");
        const moveX = latestX * depth * 30;
        const moveY = latestY * depth * 30;
        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    });

    return () => {
      unsubX();
      unsubY();
    };
  }, [elements, springX, springY]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full", className)}
    >
      {children}
    </div>
  );
}
