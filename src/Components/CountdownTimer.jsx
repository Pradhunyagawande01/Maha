import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const difference = new Date(targetDate) - new Date();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-4 gap-4 text-center ">
        {Object.keys(timeLeft).map((interval) => (
          <div key={interval} className="flex flex-col ">
            <div className="retro-card p-4 md:p-6 mb-2 border-[#597E1E] border-2 rounded-lg text-[#597E1E]">
              <span className="font-pixel text-xs md:text-4xl ">
                {formatTime(timeLeft[interval])}
              </span>
            </div>
            <span className="font-pixel text-xs font-serif md:text-sm  uppercase">
              {interval}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;