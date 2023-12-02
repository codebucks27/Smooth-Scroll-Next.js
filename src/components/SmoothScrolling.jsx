"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.0001, duration: 1.5, smoothTouch: true }}
      direction={-1}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
