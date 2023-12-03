"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Parallax({ className, children, speed = 1, id = "parallax" }) {
  const trigger = useRef(); // this is the element that will trigger the animation
  const target = useRef();  // this is the element that will be animated
  const timeline = useRef(); // this is the timeline of the animation that will be created by gsap 
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const y = windowWidth * speed * 0.1;
    //  here the y is the distance the element will move in px when the trigger is at the top of the viewport and the element is at the bottom of the viewport


    const setY = gsap.quickSetter(target.current, "y", "px");
    // here we create a function that will set the y position of the element, The gsap.quickSetter() method is a handy way to create a function that will set a specific property on a specific object. In this case, we want to set the y property of the target element in pixels.

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current, // this is the element that will trigger the animation
        scrub: true, // this will make the animation smooth and not jumpy when scrolling up and down the page
        start: "top bottom", // this means the animation will start when the top of the trigger element reaches the bottom of the viewport 
        end: "bottom top", // this means the animation will end when the bottom of the trigger element reaches the top of the viewport
        onUpdate: (e) => {
          setY(e.progress * y);
        },
        // markers: true,
      },
    });

    return () => {
      timeline?.current?.kill(); // this will kill the animation when the component unmounts
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>{children}</div>
    </div>
  );
}
