import React from "react";
import { GalleryParallax } from "../components/ui/GalleryParallax";

const products = [
  { name: "Logo 1", image: "/Logo.png" },
  { name: "Logo 2", image: "/Logo.png" },
  { name: "Logo 3", image: "/Logo.png" },
  { name: "Logo 4", image: "/Logo.png" },
  { name: "Logo 5", image: "/Logo.png" },
  { name: "Logo 6", image: "/Logo.png" },
  { name: "Logo 7", image: "/Logo.png" },
  { name: "Logo 8", image: "/Logo.png" },
  { name: "Logo 9", image: "/Logo.png" },
  { name: "Logo 10", image: "/Logo.png" },
];

export default function GalleryDemo() {
  return <GalleryParallax products={products} />;
}
