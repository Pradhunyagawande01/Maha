"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import DottedBg from "../DottedBg";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // Using container scroll with better offset for center detection
    container: ref,
    offset: ["start center", "end center"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Better calculation for center-based highlighting
    const progress = Math.max(0, Math.min(1, latest))
    
    // Calculate which track should be active based on scroll progress
    let cardIndex = 0
    
    // More responsive calculation for all tracks including first and last
    if (progress <= 0.15) {
      // Show first track with very generous threshold
      cardIndex = 0
    } else if (progress >= 0.85) {
      // Show last track with generous threshold
      cardIndex = cardLength - 1
    } else {
      // For middle tracks, use linear distribution
      // Map progress from 0.15 to 0.85 range to track indices
      const adjustedProgress = (progress - 0.15) / (0.85 - 0.15)
      cardIndex = Math.round(adjustedProgress * (cardLength - 1))
      // Ensure we stay within bounds
      cardIndex = Math.max(0, Math.min(cardLength - 1, cardIndex))
    }
    
    setActiveCard(cardIndex)
  });

  return (
    <section className="relative py-20   overflow-hidden">
      {/* Dotted Background */}
   
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-12 h-12 bg-cyan-400 opacity-10 rotate-animation"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-yellow-400 opacity-15 float-animation"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-pink-400 opacity-20 rotate-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text zoom-in text-orange-500 mb-12">
          Tracks
        </h2>
        
        <div className="text-center mb-16">
          <p className="text-xl text-slate-300 max-w-3xl mx-auto slide-in">
            Choose your adventure! Pick from our exciting tracks and build solutions 
            that make a real impact. Each track has dedicated mentors and amazing prizes.
          </p>
        </div>

        <motion.div
          className="relative h-[50rem] overflow-y-auto rounded-md p-10 scrollbar-hide"
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE and Edge
          }}
          ref={ref}
        >
          <div className="relative flex justify-center space-x-10">
            <div className="max-w-2xl">
              {content.map((item, index) => (
                <div key={item.title + index} className="my-20">
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                      scale: activeCard === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold text-yellow-600 pixel-text mb-6"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xl text-slate-300 max-w-2xl leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                  
                  {/* Progress indicator for active track */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: activeCard === index ? "100px" : "200px",
                      backgroundColor: activeCard === index ? "#f97316" : "#64748b"
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-1 mt-6 rounded-full"
                  />
                </div>
              ))}
            </div>
            
            {/* Sticky Content Box */}
            <div
              className={cn(
                "sticky top-10 hidden h-80 w-96 overflow-hidden rounded-md bg-white lg:block z-20 mt-16",
                contentClassName,
              )}
            >
              {content[activeCard].content ?? null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
