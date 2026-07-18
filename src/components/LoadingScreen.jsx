import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .to(barRef.current, { width: '100%', duration: 1.8, ease: 'power2.inOut' }, '-=0.3')
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.4 }, '-=0.2')
      .to(containerRef.current, { opacity: 0, duration: 0.6, ease: 'power2.inOut' }, '-=0.1');
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark"
    >
      <div ref={textRef} className="flex flex-col items-center gap-6">
        <span className="text-4xl font-bold font-satoshi gradient-text"></span>
        <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div ref={barRef} className="h-full w-0 bg-gradient-to-r from-accent-orange via-accent-purple to-accent-pink rounded-full" />
        </div>
        <p className="text-sm text-text-secondary font-inter tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
}
