import { useRef } from 'react';
import Particles from './Particles';

const Hack4maha = () => {
  const containerRef = useRef(null);

  return (
    <div className="hack4maha-wrapper">
      {/* ✅ Particle Background */}
      <div className="particles-bg">
        <Particles />
      </div>

      {/* ✅ Centered Image */}
      <div className="hack4maha-container" ref={containerRef}>
        <img
          src="/img/Hack4Maha.png"
          alt="Hack4Maha Logo"
          className="hack4maha-image"
        />
      </div>

      {/* ✅ Styles */}
      <style>{`
        .hack4maha-wrapper {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: black;
        }

        .particles-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1;
        }

        .hack4maha-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hack4maha-image {
          max-width: 70vw;
          max-height: 70vh;
          object-fit: contain;
          animation: fadeInZoom 2s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInZoom {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Hack4maha;
