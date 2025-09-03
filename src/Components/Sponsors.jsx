import React from "react";
import DottedBg from "./DottedBg";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      color: "from-yellow-400 to-yellow-600",
      sponsors: [
        {
          // name: "Orkes",
          logo: "/Sponsors/Orkes.jpg",
          description: " ",
          link: "https://www.orkes.io",
        },
        {
          // name: "Fireblaze AI school",
          logo: "/Sponsors/Fireblaze.jpg",
          description: " ",
          link: "https://www.instagram.com/fireblaze_edu/",
        },
      ],
    },
    {
      tier: "Gold Sponsors",
      color: "from-purple-400 to-purple-600",
      sponsors: [
        {
          // name: "Github",
          logo: "/Sponsors/github.png",
          // description: "Innovation in every solution",
          link: "https://github.com",
        },
        {
          // name: "Devfolio",
          logo: "/Sponsors/Devfolio.png",
          // description: "Empowering developers worldwide",
          link: "https://devfolio.com",
        },
        {
          // name: "ETHIndia",
          logo: "/Sponsors/ETH.png",
          // description: "Empowering developers worldwide",
          link: "https://ethindia.com",
        },
      ],
    },
    {
      tier: "Hackathon Partner",
      color: "from-blue-400 to-blue-600",
      sponsors: [
        {
          // name: "WIP",
          logo: "/Sponsors/WIP.jpg",
          description: "Women In Product",
          link: "#",
        },
      ],
    },
    {
      tier: "Venue Partner",
      color: "from-green-400 to-green-600",
      sponsors: [
        {
          name: "TBD",
          logo: "",
          description: " ",
          link: "#",
        },
      ],
    },
    {
      tier: "Game Partner",
      color: "from-pink-400 to-pink-600",
      sponsors: [
        {
          // name: "Valorant",
          logo: "/Sponsors/valo.jpg",
          // description: "Official Game Partner",
          link: "#",
        },
      ],
    },
    {
      tier: "In-Kind Partners",
      color: "from-cyan-400 to-cyan-600",
      sponsors: [
        { name: "", logo: "/Sponsors/cake.png", description: "", link: "#" },
        { name: "", logo: "/Sponsors/wolfram.png", description: "", link: "#" },
        { name: "", logo: "/Sponsors/xyz.gif", description: "", link: "#" },
        // { name: "Partner 4", logo: "/Sponsors/k4.png", description: "", link: "#" },
        // { name: "Partner 5", logo: "/Sponsors/k5.png", description: "", link: "#" },
        // { name: "Partner 6", logo: "/Sponsors/k6.png", description: "", link: "#" },
      ],
    },
  ];

  // ✅ Sponsor Card reusable component
  const SponsorCard = ({ sponsor, color }) => (
    <div className="relative group rounded-2xl border border-slate-700 bg-slate-800/50 p-8 text-center overflow-hidden">
      {/* glare hover effect */}
      <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/20 before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:skew-x-12 before:transition-transform before:duration-700"></div>

      <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
        <img
          src={sponsor.logo.startsWith("http") ? sponsor.logo : sponsor.logo}
          alt={sponsor.name}
          className="h-20 mx-auto mb-4 cursor-pointer transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      <h4 className="text-xl font-bold text-white mb-2 pixel-text">
        {sponsor.name}
      </h4>
      <p className="text-slate-300 text-sm">{sponsor.description}</p>
    </div>
  );

  return (
    <section className="relative py-20 overflow-hidden">
      <DottedBg
        dotColor="rgba(255, 255, 255, 0.25)"
        dotSize={2}
        baseSpacing={40}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text zoom-in text-orange-500 mb-12">
          Sponsors
        </h2>

        <div className="space-y-16">
          {/* 🔹 Title Sponsor + Gold Sponsor (center aligned) */}
          {sponsorTiers.slice(0, 2).map((tier, idx) => (
            <div key={idx} className="text-center">
              <h3
                className={`text-3xl font-bold pixel-text bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-10`}
              >
                {tier.tier}
              </h3>
              <div className="flex flex-wrap justify-center gap-28 max-w-5xl mx-auto">
                {tier.sponsors.map((sponsor, sIdx) => (
                  <div
                    key={sIdx}
                    className="w-80 h-72 sm:w-1/2 md:w-1/3 lg:w-1/4"
                  >
                    <SponsorCard sponsor={sponsor} color={tier.color} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* 🔹 Hackathon + Venue side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sponsorTiers.slice(2, 4).map((tier, idx) => (
              <div key={idx} className="text-center">
                <h3
                  className={`text-2xl font-bold pixel-text bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-6`}
                >
                  {tier.tier}
                </h3>
                {tier.sponsors.map((sponsor, sIdx) => (
                  <SponsorCard
                    key={sIdx}
                    sponsor={sponsor}
                    color={tier.color}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* 🔹 Game Partner (center) */}
          <div className="text-center">
            <h3
              className={`text-2xl font-bold pixel-text bg-gradient-to-r ${sponsorTiers[4].color} bg-clip-text text-transparent mb-6`}
            >
              {sponsorTiers[4].tier}
            </h3>
            <div className="flex justify-center">
              {sponsorTiers[4].sponsors.map((sponsor, sIdx) => (
                <div key={sIdx} className="max-w-xs w-full">
                  <SponsorCard
                    sponsor={sponsor}
                    color={sponsorTiers[4].color}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 🔹 In-Kind Partners (6 grid) */}
          <div className="text-center">
            <h3
              className={`text-2xl font-bold pixel-text bg-gradient-to-r ${sponsorTiers[5].color} bg-clip-text text-transparent mb-10`}
            >
              {sponsorTiers[5].tier}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center max-w-4xl mx-auto">
              {sponsorTiers[5].sponsors.map((sponsor, sIdx) => (
                <SponsorCard
                  key={sIdx}
                  sponsor={sponsor}
                  color={sponsorTiers[5].color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
