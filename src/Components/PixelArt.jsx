import { useEffect, useRef } from 'react';

const PixelArt = ({ type, className, size = 'md' }) => {
  const artRef = useRef(null);
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };
  
  useEffect(() => {
    const element = artRef.current;
    if (!element) return;
    
    switch(type) {
      case 'rocket':
        element.style.animation = 'float 6s ease-in-out infinite';
        break;
      case 'planet':
        element.style.animation = 'float 8s ease-in-out infinite';
        break;
      case 'star':
        element.style.animation = 'pulseGlow 1.5s ease-in-out infinite';
        break;
      case 'alien':
        element.style.animation = 'float 5s ease-in-out infinite';
        break;
      default:
        element.style.animation = 'float 6s ease-in-out infinite';
    }
  }, [type]);

  const getPixelArt = () => {
    const baseStyles = `${sizeClasses[size]} ${className || ''} transition-all duration-300`;
    
    switch(type) {
      case 'rocket':
        return (
          <div 
            ref={artRef}
            className={`${baseStyles} relative`}
            style={{
              background: 'linear-gradient(45deg, #FF8C00, #FFA500)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              boxShadow: '0 0 15px rgba(255, 140, 0, 0.5)'
            }}
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1/3 bg-cyber-green" 
                 style={{ clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)' }} />
          </div>
        );
      
      case 'planet':
        return (
          <div 
            ref={artRef}
            className={`${baseStyles} rounded-full`}
            style={{
              background: 'linear-gradient(135deg, #FF8C00, #FF4500)',
              boxShadow: '0 0 20px rgba(255, 140, 0, 0.6), inset -5px -5px 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="w-full h-full rounded-full opacity-50"
                 style={{
                   background: 'radial-gradient(circle at 30% 30%, transparent 0%, rgba(0, 255, 157, 0.2) 100%)'
                 }} />
          </div>
        );
      
      case 'star':
        return (
          <div 
            ref={artRef}
            className={`${baseStyles}`}
            style={{
              background: '#FF8C00',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              boxShadow: '0 0 15px rgba(255, 140, 0, 0.7)'
            }}
          />
        );
      
      case 'alien':
        return (
          <div 
            ref={artRef}
            className={`${baseStyles} relative`}
            style={{
              background: '#00FF9D',
              borderRadius: '50% 50% 45% 45%',
              boxShadow: '0 0 15px rgba(0, 255, 157, 0.6)'
            }}
          >
            <div className="absolute top-1/4 left-1/4 w-2/4 h-2/4 flex justify-between">
              <div className="w-1/3 h-1/3 rounded-full bg-space-dark" />
              <div className="w-1/3 h-1/3 rounded-full bg-space-dark" />
            </div>
          </div>
        );
      
      default:
        return (
          <div 
            ref={artRef}
            className={`${baseStyles} bg-cyber-orange`}
          />
        );
    }
  };
  
  return getPixelArt();
};

export default PixelArt;