"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.0001, duration: 1.5, smoothTouch: true }}
      // here the lerp is the speed of the scroll
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
