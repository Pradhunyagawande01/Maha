import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DottedBg from "../DottedBg";

export const GalleryParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const firstX = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const secondX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const thirdX = useTransform(scrollYProgress, [0, 1], [0, 200]);

  console.log("Products: ", products); // ✅ Debug: Are products showing?

  return (
    <section ref={targetRef} className="relative py-20 bg-slate-800 overflow-hidden">
      {/* ✅ Animated Background */}
      <DottedBg
        dotColor="rgba(255, 255, 255, 0.25)"
        dotSize={2}
        baseSpacing={40}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      />

      {/* ✅ Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
          Our Event Gallery
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto text-sm md:text-base">
          Relive the most thrilling moments from our past events.
        </p>
      </div>

      {/* ✅ Rows of Images */}
      <div className="relative z-10 flex flex-col items-center gap-y-[-140px]">

        <motion.div style={{ x: firstX }} className="flex gap-10">
          {firstRow.map((product, idx) => (
            <div
              key={`row-1-${idx}`}
              className="rounded-2xl overflow-hidden shadow-xl min-w-[250px] max-w-[300px]"
            >
             <img
  src={product.image}
  alt={`Gallery Image ${idx}`}
  className="w-full h-[200px] object-cover"
/>

            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: secondX }} className="flex gap-10">
          {secondRow.map((product, idx) => (
            <div
              key={`row-2-${idx}`}
              className="rounded-2xl overflow-hidden shadow-xl min-w-[250px] max-w-[300px]"
            >
            <img
  src={product.image}
  alt={`Gallery Image ${idx}`}
  className="w-full h-[200px] object-cover"
/>

            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: thirdX }} className="flex gap-10">
          {thirdRow.map((product, idx) => (
            <div
              key={`row-3-${idx}`}
              className="rounded-2xl overflow-hidden shadow-xl min-w-[250px] max-w-[300px]"
            >
              <img
  src={product.image}
  alt={`Gallery Image ${idx}`}
  className="w-full h-[200px] object-cover"
/>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
