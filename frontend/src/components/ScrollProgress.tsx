import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById("scroll-root"));
  }, []);

  if (!container) return null;
  return <ProgressBar container={container} />;
}

function ProgressBar({ container }: { container: HTMLElement }) {
  const containerRef = useRef(container);
  containerRef.current = container;

  const { scrollYProgress } = useScroll({ container: containerRef as React.RefObject<HTMLElement> });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #6366f1, #a855f7, #8b5cf6)",
      }}
    />
  );
}
