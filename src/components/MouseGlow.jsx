import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      glow.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-40 transition-transform duration-300 ease-out"
      style={{
        background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)',
      }}
    />
  );
}
