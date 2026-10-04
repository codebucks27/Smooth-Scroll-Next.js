"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

function updateScrollTrigger() {
  ScrollTrigger.update();
}

function ScrollSync() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // useLenis removes the scroll callback when this component unmounts.
  useLenis(updateScrollTrigger);
  return null;
}

/** @param {{ children: import("react").ReactNode }} props */
function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.5, syncTouch: true, autoRaf: true }}
    >
      <ScrollSync />
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
