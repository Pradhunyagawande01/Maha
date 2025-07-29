import React, { useState, useEffect, useRef } from 'react';

const MarioCharacter = ({ scrollY }) => {
  const [marioPosition, setMarioPosition] = useState({ x: 50, y: 50 });
  const [isJumping, setIsJumping] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState('right');

  const lastJumpRef = useRef(0);
  const lastScrollY = useRef(scrollY);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollProgress = scrollY / (documentHeight - windowHeight);

    const moveProgress = Math.min(scrollProgress / 0.3, 1);
    const newX = 10 + moveProgress * 80; // from 10% to 90%
    const newY = 50 + Math.sin(moveProgress * Math.PI * 4) * 20;

    setMarioPosition({ x: newX, y: newY });

    // Detect movement
    const isCurrentlyMoving = Math.abs(scrollY - lastScrollY.current) > 5;
    setIsMoving(isCurrentlyMoving);

    // Detect direction
    const newDirection = scrollY < lastScrollY.current ? 'left' : 'right';
    setDirection(newDirection);
    lastScrollY.current = scrollY;

    // Handle jumping
    const jumpPoints = [0.1, 0.15, 0.2, 0.25];
    const shouldJump = jumpPoints.some(
      (point) => Math.abs(scrollProgress - point) < 0.01
    );

    const now = Date.now();
    if (shouldJump && !isJumping && now - lastJumpRef.current > 1000) {
      setIsJumping(true);
      lastJumpRef.current = now;
      setTimeout(() => setIsJumping(false), 600);
    }
  }, [scrollY, isJumping]);

  // Image switching based on state
  const marioImage = isJumping || isMoving ? '/run.png' : '/stand.png';

  return (
    <div
      className="fixed z-30 pointer-events-none transition-all duration-300 ease-out"
      style={{
        left: `${marioPosition.x}%`,
        top: `${marioPosition.y}%`,
        transform: `translate(-50%, -50%) ${isJumping ? 'translateY(-30px)' : ''}`,
      }}
    >
      <img
        src={marioImage}
        alt="Mario"
        className="w-[100px] h-[100px] object-contain"
        style={{
          transform: `scaleX(${direction === 'left' ? -1 : 1})`,
        }}
      />
    </div>
  );
};

export default MarioCharacter;
