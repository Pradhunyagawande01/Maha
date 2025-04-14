import { useEffect, useRef, useState } from 'react';
import Particles from './Particles'; // ✅ Importing Particles Component

const Hack4maha = ({
  text = 'Hack4Maha',
  textColor = 'oklch(64.8% 0.2 131.684)', // ✅ White text color
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const chars = text.split('');

  const dist = (a, b) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let rafId;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach((span) => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          };

          const d = dist(mouseRef.current, charCenter);
          const scale = Math.max(1, 2 - d / maxDist);
          span.style.transform = `scale(${scale})`;
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [chars.length]);

  return (
    <div className="hack4brahma-container" ref={containerRef}>
      {/* ✅ Particles Background (Fullscreen) */}
      <div className="particles-bg">
        <Particles />
      </div>

      {/* ✅ Centered Hack4Brahma Text */}
      <h1 ref={titleRef} className="hack4brahma-title">
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => (spansRef.current[i] = el)}
            className={char === '4' ? 'post-nb large' : 'odibee'}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* ✅ Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Post+No+Bills+Colombo:wght@700&display=swap');

        .hack4brahma-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background: black;
        }
        
        /* ✅ Fullscreen Particles */
        .particles-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        /* ✅ Centered Text */
        .hack4brahma-title {
          font-size: 5vw;
          font-color: red;
          text-align: center;
          user-select: none;
          font-weight: 100;
          z-index: 10;
          color: ${textColor};
          position: relative;
          letter-spacing: 5px;
          display: flex;
          gap: 10px;
        }
        
        .odibee {
          font-family: 'Odibee Sans', sans-serif;
          transition: transform 0.2s ease-out;
        }

        .post-nb {
          font-family: 'Post No Bills Colombo', sans-serif;
          transition: transform 0.2s ease-out;
          color: orange;
        }

        .large {
          font-size: 5vw;
        }
      `}</style>
    </div>
  );
};

export default Hack4maha;
