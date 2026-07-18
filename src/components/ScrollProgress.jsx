import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      if (barRef.current) {
        barRef.current.style.width = `${Math.min(progress, 100)}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-accent-orange via-accent-purple to-accent-pink transition-all duration-150 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
}
