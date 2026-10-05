"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * @param {{ className?: string, children: import("react").ReactNode, speed?: number, id?: string }} props
 */
export function Parallax({ className, children, speed = 1, id = "parallax" }) {
  /** @type {import("react").RefObject<HTMLDivElement | null>} */
  const trigger = useRef(null);
  /** @type {import("react").RefObject<HTMLDivElement | null>} */
  const target = useRef(null);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const triggerElement = trigger.current;
    const targetElement = target.current;
    if (!windowWidth || !triggerElement || !targetElement) return;

    gsap.registerPlugin(ScrollTrigger);
    // Keep the tutorial's signed, viewport-width-based movement distance.
    const y = windowWidth * speed * 0.1;
    const context = gsap.context(() => {
      gsap.fromTo(
        targetElement,
        { y: 0 },
        {
          y,
          ease: "none",
          scrollTrigger: {
            id,
            trigger: triggerElement,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        },
      );
    }, triggerElement);

    // Revert both the animation and ScrollTrigger, including inline styles,
    // before a resize rebuild or React Strict Mode remount.
    return () => context.revert();
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>{children}</div>
    </div>
  );
}
