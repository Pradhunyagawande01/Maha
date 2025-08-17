import React from "react";
import { GalleryParallax } from "../components/ui/GalleryParallax";

const products = [
  { name: "Logo 1", image: "/slider/one.jpeg" },
  { name: "Logo 2", image: "/slider/two.jpeg" },
  { name: "Logo 3", image: "/slider/three.jpeg" },
  { name: "Logo 4", image: "/slider/s1.jpeg" },
  { name: "Logo 5", image: "/slider/s2.jpeg" },
  { name: "Logo 6", image: "/slider/s3.jpeg" },
  { name: "Logo 7", image: "/slider/s4.jpeg" },
  { name: "Logo 8", image: "/slider/s5.jpeg" },
  { name: "Logo 9", image: "/slider/s6.jpeg" },
  { name: "Logo 10", image: "/slider/s7.jpeg" },
];

export default function GalleryDemo() {
  return <GalleryParallax products={products} />;
}
