"use client";
import React from "react";
import { StickyScroll } from "./ui/stickyscrollreveal";
import DottedBg from "./DottedBg";

const content = [
  {
    title: "Track 1: Cybersecurity ",
    description: "Dive into the world of Cyber Security where innovation meets protection, and ideas safeguard the digital future.",
    content: <img src="/tracks/CS.png" alt="AI Track" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 2: Edge ai",
    description: "Unlock the power of Edge AI bringing intelligence closer to devices for faster, smarter, and real-time decisions.",
    content: <img src="/tracks/Edge ai.png" alt="Safety" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 3:  Education",
    description: "Reimagine Education building smarter, accessible, and engaging learning for every mind.",
    content: <img src="/tracks/Education.png" alt="Climate" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 4: FinTech Innovation",
    description: "Drive the future of finance where technology meets innovation to create smarter, secure, and inclusive solutions.",
    content: <img src="/tracks/fin tech.png" alt="FinTech" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 5: HealthCare",
    description: "Transforming Healthcare harnessing technology to build smarter, faster, and patient-centric solutions for a healthier tomorrow",
    content: <img src="/tracks/HealthCare.png" alt="HealthTech" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 6: Sustain",
    description: "Innovating for Sustainability creating greener, smarter, and responsible solutions for a better planet.",
    content: <img src="/tracks/Sustain.png" alt="EdTech" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 7: VR",
    description: "Step into Virtual Reality where imagination meets innovation to create immersive worlds and limitless experiences.",
    content: <img src="/tracks/VR.png" alt="IoT Track" className="h-full w-full object-cover" />,
  },
  {
    title: "Track 8: Web3",
    description: "Building the decentralized future where Web3 empowers trust, transparency, and true ownership.",
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
