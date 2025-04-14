import { useEffect } from 'react';
import '../components/Loader.css';

const Loader = () => {
  useEffect(() => {
    // Optional: Add any cleanup or additional effects
    return () => {};
  }, []);

  return (
    <div id="loader">
      <div className="text-container">
        <svg
          className="text-stroke"
          viewBox="0 0 900 100"
          width="80%"
          height="100%"
        >
        <svg viewBox="0 0 1000 200">
  <text
    x="50%"
    y="50%"
    dominantBaseline="middle"
    textAnchor="middle"
    style={{
      fontSize: '200px',
      letterSpacing: '20px',
      fill: 'none',
      stroke: '#fff',
      strokeWidth: '2',
      strokeDasharray: '100%',
      strokeDashoffset: '100%',
      animation: 'textStrokeAnim 4s linear both',
    }}
  >
    Hack 4 Maha
  </text>
</svg>

        </svg>
      </div>
    </div>
  );
};

export default Loader;