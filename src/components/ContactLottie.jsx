import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import contactAnimation from '../data/contact us.json'; // Adjust the path to your JSON file

const ContactLottie = ({ 
  state = 'idle', // idle, connect, success, loop
  className = '',
  opacity = 0.1,
  speed = 1,
  size = 'xl' // sm, md, lg, xl, full
}) => {
  const lottieRef = useRef(null);

  // Animation segments for different states
  const SEGMENTS = {
    idle: [0, 90],       // Default idle animation (first 90 frames)
    connect: [90, 180],  // Connection animation (frames 90-180)
    success: [180, 270], // Success animation (frames 180-270)
    loop: [0, 270],      // Complete loop (all frames)
  };

  useEffect(() => {
    if (!lottieRef.current || !SEGMENTS[state]) return;
    
    try {
      // Play specific segment based on state
      lottieRef.current.playSegments(SEGMENTS[state], true);
      
      // Set animation speed
      lottieRef.current.setSpeed(speed);
    } catch (error) {
      console.error('Lottie animation error:', error);
    }
  }, [state, speed]);

  // Size classes for responsive design
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]',
    full: 'w-full h-full',
  };

  return (
    <div className={`${sizeClasses[size] || sizeClasses.xl} ${className}`}>
      <Lottie
        lottieRef={lottieRef}
        animationData={contactAnimation}
        autoplay={true}
        loop={state === 'loop' || state === 'idle'}
        style={{ 
          opacity: opacity,
          filter: 'brightness(1.1) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
        }}
        className="w-full h-full"
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </div>
  );
};

export default ContactLottie;