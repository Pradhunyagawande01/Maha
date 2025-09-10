import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import DottedBg from "../DottedBg";

const Card = ({ c, handleCardMove, handleCardClick }) => (
  <article
    onMouseMove={handleCardMove}
    onClick={() => handleCardClick(c.url)}
    className="group relative flex flex-col w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
    style={{
      "--card-border": c.borderColor || "transparent",
      background: c.gradient,
      "--spotlight-color": "rgba(255,255,255,0.3)",
    }}
  >
    {/* Spotlight hover */}
    <div
      className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
      }}
    />
    {/* Image */}
    <div className="relative z-10 flex-1 p-2">
      <img
        src={c.image}
        alt={c.title}
        loading="lazy"
        className="w-full h-72 object-cover rounded-lg"
      />
    </div>
    {/* Footer */}
    <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
      <h3 className="m-0 text-lg font-semibold">{c.title}</h3>

      {c.socials && (
        <div className="flex justify-end gap-2">
          {c.socials.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-gray-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {s.icon}
            </a>
          ))}
        </div>
      )}

      <p className="m-0 text-sm opacity-85">{c.subtitle}</p>
      {c.location && (
        <span className="text-sm opacity-85 text-right">{c.location}</span>
      )}
    </footer>
  </article>
);

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  // 🔹 All 9 Organizers (your 5 + 4 new)
  const demo = [
    {
      image: "/org/Mrunali.jpg",
      title: "Mrunali",
      subtitle: "Social Media",
      socials: [
        { icon: <FaLinkedin />, url: " https://www.linkedin.com/in/mrunali-dhopte-944a181aa/" },
        // { icon: <FaInstagram />, url: "" },
        // { icon: <FaGithub />, url: " " },
      ],
      borderColor: "#06B6D4",
      gradient: "linear-gradient(180deg,#06B6D4,#000)",
    },
    {
      image: "/org/Harsh.jpg",
      title: "Harsh",
      subtitle: "Hacker Experience",
      socials: [
        { icon: <FaLinkedin />, url:  "https://www.linkedin.com/in/harsh-2227-kumar/" },
        // { icon: <FaInstagram />, url:  "" },
        // { icon: <FaGithub />, url: " " },
      ],
      borderColor: "#F43F5E",
      gradient: "linear-gradient(135deg,#F43F5E,#000)",
    },
    {
      image: "/org/Navinya.jpg",
      title: "Navinya",
      subtitle: "Public Relations",
      socials: [
        { icon: <FaLinkedin />, url: " https://www.linkedin.com/in/navinya-yede-251802257/" },
        // { icon: <FaInstagram />, url: " " },
        // { icon: <FaGithub />, url: " " },
      ],
      borderColor: "#22C55E",
      gradient: "linear-gradient(200deg,#22C55E,#000)",
    },
    {
      image: "/org/Ishita.png",
      title: "Ishita",
      subtitle: "Design Lead",
      socials: [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ishita-soni-work/" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/ishita.soni_?igsh=ZHJjdHhnM3RwdWR4" },
        // { icon: <FaGithub />, url: "https://github.com/isha" },
      ],
      borderColor: "#EAB308",
      gradient: "linear-gradient(160deg,#EAB308,#000)",
    },
    {
      image: "/org/ayush.jpg",
      title: "Ayush Thakre",
      subtitle: "Co-Organizer",
      socials: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/ayush-thakre-096558294/",
        },
        { icon: <FaInstagram />, url: "https://www.instagram.com/ayushthakre__/" },
        { icon: <FaGithub />, url: "https://github.com/ayushthakre07" },
      ],
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
    },
    {
      image: "/org/vaibhavi.JPG",
      title: "Vaibhavi",
      subtitle: "Co-Organizer",
      socials: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/vaibhavi-mangrulkar-7b0793285",
        },
        {
          icon: <FaInstagram />,
          url: "https://www.instagram.com/_vaibhavi29_?igsh=YnEzZnhnbTF3bHlr&utm_source=qr",
        },
        { icon: <FaGithub />, url: "https://github.com/Vaibhavi-Mangrulkar" },
      ],
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
    },
    {
      image: "/org/pranav.jpg",
      title: "Pranav",
      subtitle: "Co-Organizer",
      socials: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/pranav-tekade-57b5a2320/",
        },
        { icon: <FaInstagram />, url: "https://www.instagram.com/prana_v.18_/" },
        { icon: <FaGithub />, url: "https://github.com/codetechie18" },
      ],
      borderColor: "#F59E0B",
      gradient: "linear-gradient(180deg,#06B6D4,#000)",
    },
    {
      image: "/org/Sunidhi.jpg",
      title: "Sunidhi",
      subtitle: "Co-Organizer",
      socials: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/sunidhi-haware-797a97323/",
        },
        { icon: <FaInstagram />, url: "https://www.instagram.com/sunidhi_vj/" },
        { icon: <FaGithub />, url: "https://github.com/Sunidhi369" },
      ],
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
    },
    {
      image: "/org/sujal.png",
      title: "Sujal",
      subtitle: "Organizer",
      socials: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/sujal-khade-2823a32a6/",
        },
        { icon: <FaInstagram />, url: "https://www.instagram.com/cyb_suju/" },
        { icon: <FaGithub />, url: "https://github.com/codetechie43" },
      ],
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full min-h-screen py-16 flex flex-col items-center gap-10 overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#1a1a2e] to-[#000000] ${className}`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {/* Background */}
      <DottedBg
        dotColor="rgba(255, 255, 255, 0.25)"
        dotSize={2}
        baseSpacing={40}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-orange-800 text-center">
        Organizer
      </h2>

      {/* Grid – Auto adjusts to all members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {data.map((c, i) => (
          <Card
            key={i}
            c={c}
            handleCardMove={handleCardMove}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>

      {/* Spotlight + Fade layers */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;
