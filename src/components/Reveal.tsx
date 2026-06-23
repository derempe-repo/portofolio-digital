import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type RevealStyle = CSSProperties & {
  ["--reveal-delay"]?: string;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe the element and flip it visible the first time it enters the viewport.
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Once the reveal transition finishes, drop will-change so the element
  // stops being promoted to its own compositor layer (keeps things light on mobile).
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !isVisible) return undefined;

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.target === element) {
        element.classList.add("reveal-done");
      }
    };

    element.addEventListener("transitionend", handleTransitionEnd);
    return () => element.removeEventListener("transitionend", handleTransitionEnd);
  }, [isVisible]);

  const combinedClassName = ["reveal", className, isVisible ? "is-visible" : null].filter(Boolean).join(" ");
  const style: RevealStyle = { "--reveal-delay": `${delay}s` };

  return (
    <div ref={elementRef} className={combinedClassName} style={style}>
      {children}
    </div>
  );
}
