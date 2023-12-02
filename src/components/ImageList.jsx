"use client";
import React from "react";
import { Parallax } from "@/components/Parallax";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";

const ImageList = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  });
  // console.log(lenis);

  return (
    <>
      <button
        href="#last-image"
        onClick={() => lenis.scrollTo("#last-image", { lerp: 0.01 })}
        className="bg-white text-black capitalize rounded-lg p-4 font-semibold text-xl mt-16"
      >
        scroll to anchor
      </button>

      <Parallax speed={1} className="self-start">
        <Image
          src={"https://picsum.photos/600/400?random=1"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={-2} className="self-end overflow-hidden">
        <Image
          src={"https://picsum.photos/600/400?random=2"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={-1} className="self-start">
        <Image
          src={"https://picsum.photos/600/400?random=3"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={-2} className="self-end">
        <Image
          src={"https://picsum.photos/600/400?random=4"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={2} className="self-start">
        <Image
          src={"https://picsum.photos/600/400?random=5"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={1} className="self-end">
        <Image
          src={"https://picsum.photos/600/400?random=6"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={-12} className="self-start">
        <Image
          src={"https://picsum.photos/600/400?random=7"}
          alt="Image"
          width={600}
          height={400}
          id="last-image"
        />
      </Parallax>
    </>
  );
};

export default ImageList;
