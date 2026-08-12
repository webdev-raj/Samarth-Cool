"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface GSAPWrapperProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "stagger";
  delay?: number;
  duration?: number;
  className?: string;
}

export function GSAPWrapper({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.8,
  className = "",
}: GSAPWrapperProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let fromVars: gsap.TweenVars = { opacity: 0, y: 30 };
    let toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
    };

    if (animation === "fadeInLeft") {
      fromVars = { opacity: 0, x: -30 };
      toVars = { ...toVars, x: 0 };
    } else if (animation === "fadeInRight") {
      fromVars = { opacity: 0, x: 30 };
      toVars = { ...toVars, x: 0 };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(el, fromVars, toVars);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animation, delay, duration]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
