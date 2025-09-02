"use client";
import React from "react";
import { StickyScroll } from "./ui/stickyscrollreveal";
import DottedBg from "./DottedBg";

const content = [
  {
    title: "Track 1: Cybersecurity ",
    description: "Using AI to improve healthcare, education, or climate solutions.",
    content: <img src="/tracks/CS.png" alt="AI Track" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 2: Edge ai",
    description: "Build tools for reporting, tracking, or supporting women's safety.",
    content: <img src="/tracks/Edge ai.png" alt="Safety" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 3:  Education",
    description: "Solve environmental problems using smart tech solutions.",
    content: <img src="/tracks/Education.png" alt="Climate" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 4: FinTech Innovation",
    description: "Create solutions for digital payments, financial inclusion, and blockchain technology.",
    content: <img src="/tracks/fin tech.png" alt="FinTech" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 5: HealthCare",
    description: "Develop digital health solutions, telemedicine platforms, and medical device innovations.",
    content: <img src="/tracks/HealthCare.png" alt="HealthTech" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 6: Sustain",
    description: "Build educational platforms, learning management systems, and skill development tools.",
    content: <img src="/tracks/Sustain.png" alt="EdTech" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 7: VR",
    description: "Create connected devices and smart infrastructure solutions for modern urban challenges.",
    content: <img src="/tracks/VR.png" alt="IoT Track" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 8: Web3",
    description: "Develop security solutions, threat detection systems, and privacy protection tools.",
    content: <img src="/tracks/WEB 3.png" alt="Cybersecurity" className="h-full w-full object-cover" />,
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <section className="relative py-20   overflow-hidden">
      {/* scrolling dotted background */}
      <DottedBg
        dotColor="rgba(255, 255, 255, 0.25)"
        dotSize={2}
        baseSpacing={40}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      />

    

      {/* Foreground content */}
      <div className="relative z-10">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
