import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import ChromaGrid from "./ChromaGrid";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    socials: [
      { icon: <FaLinkedin />, url: "https://linkedin.com/in/sarahjohnson" },
      { icon: <FaInstagram />, url: "https://instagram.com/sarahjohnson" },
      { icon: <FaGithub />, url: "https://github.com/sarahjohnson" },
      { icon: <FaTwitter />, url: "https://twitter.com/sarahjohnson" },
    ],
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    socials: [
      { icon: <FaLinkedin />, url: "https://linkedin.com/in/mikechen" },
      { icon: <FaInstagram />, url: "https://instagram.com/mikechen" },
      { icon: <FaGithub />, url: "https://github.com/mikechen" },
      { icon: <FaTwitter />, url: "https://twitter.com/mikechen" },
    ],
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Emily Davis",
    subtitle: "UI/UX Designer",
    borderColor: "#EC4899",
    gradient: "linear-gradient(180deg, #EC4899, #000)",
    socials: [
      { icon: <FaLinkedin />, url: "https://linkedin.com/in/emilydavis" },
      { icon: <FaInstagram />, url: "https://instagram.com/emilydavis" },
      { icon: <FaGithub />, url: "https://github.com/emilydavis" },
      { icon: <FaTwitter />, url: "https://twitter.com/emilydavis" },
    ],
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    title: "Raj Patel",
    subtitle: "Full Stack Developer",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    socials: [
      { icon: <FaLinkedin />, url: "https://linkedin.com/in/rajpatel" },
      { icon: <FaInstagram />, url: "https://instagram.com/rajpatel" },
      { icon: <FaGithub />, url: "https://github.com/rajpatel" },
      { icon: <FaTwitter />, url: "https://twitter.com/rajpatel" },
    ],
  },
  {
    image: "https://i.pravatar.cc/300?img=5",
    title: "Sophia Lee",
    subtitle: "Data Scientist",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    socials: [
      { icon: <FaLinkedin />, url: "https://linkedin.com/in/sophialee" },
      { icon: <FaInstagram />, url: "https://instagram.com/sophialee" },
      { icon: <FaGithub />, url: "https://github.com/sophialee" },
      { icon: <FaTwitter />, url: "https://twitter.com/sophialee" },
    ],
  },
];

export default function App() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
}
