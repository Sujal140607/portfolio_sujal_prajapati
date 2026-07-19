import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-orange/[0.04] via-accent-purple/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card-light mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
              <span className="text-xs text-text-secondary font-inter tracking-wider uppercase">AI Engineer & Full Stack Developer</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="display-heading mb-8">
              Building{' '}
              <span className="gradient-text">AI-Powered</span>
              <br />
              Products That Solve Real Problems
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary font-inter leading-relaxed max-w-xl mb-10">
              AI Engineer & Full Stack Developer | Building AI Agents, RAG Applications, and Intelligent Automation Systems
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#showcase" className="magnetic-btn magnetic-btn-primary group">
                View Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="magnetic-btn magnetic-btn-secondary group" target="_blank" rel="noopener noreferrer">
                <Download size={18} className="mr-2" />
                Our Services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center"
          >
            <motion.div style={{ y }} className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-orange/20 via-accent-purple/15 to-accent-pink/10 blur-3xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-orange/5 via-accent-purple/5 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />

              <svg viewBox="0 0 500 500" className="w-full h-full animate-spin-slow" style={{ animationDuration: '25s' }}>
                <defs>
                  <linearGradient id="heroRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.35" />
                    <stop offset="50%" stopColor="#A855F7" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <circle cx="250" cy="250" r="220" fill="none" stroke="url(#heroRingGrad)" strokeWidth="1.2" />
                <circle cx="250" cy="250" r="185" fill="none" stroke="url(#heroRingGrad)" strokeWidth="0.6" strokeDasharray="6 8" />
                <circle cx="250" cy="250" r="150" fill="none" stroke="url(#heroRingGrad)" strokeWidth="0.4" strokeDasharray="2 10" opacity="0.5" />
              </svg>

              <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                <circle cx="250" cy="250" r="200" fill="none" stroke="#A855F7" strokeWidth="0.4" opacity="0.12" strokeDasharray="3 12" />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-44 h-44 md:w-52 md:h-52">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 via-accent-purple/20 to-accent-pink/20 rounded-full blur-3xl" />
                  <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
                    <defs>
                      <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B35" />
                        <stop offset="50%" stopColor="#A855F7" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="80" r="14" fill="url(#brainGrad)" opacity="0.85" />
                    <circle cx="65" cy="125" r="10" fill="url(#brainGrad)" opacity="0.65" />
                    <circle cx="135" cy="125" r="10" fill="url(#brainGrad)" opacity="0.65" />
                    <circle cx="100" cy="155" r="8" fill="url(#brainGrad)" opacity="0.5" />
                    <circle cx="55" cy="90" r="6" fill="url(#brainGrad)" opacity="0.4" />
                    <circle cx="145" cy="90" r="6" fill="url(#brainGrad)" opacity="0.4" />
                    <circle cx="80" cy="50" r="5" fill="url(#brainGrad)" opacity="0.3" />
                    <circle cx="120" cy="50" r="5" fill="url(#brainGrad)" opacity="0.3" />
                    <line x1="100" y1="80" x2="65" y2="125" stroke="#A855F7" strokeWidth="1.5" opacity="0.5" />
                    <line x1="100" y1="80" x2="135" y2="125" stroke="#A855F7" strokeWidth="1.5" opacity="0.5" />
                    <line x1="65" y1="125" x2="100" y2="155" stroke="#FF6B35" strokeWidth="1.5" opacity="0.5" />
                    <line x1="135" y1="125" x2="100" y2="155" stroke="#FF6B35" strokeWidth="1.5" opacity="0.5" />
                    <line x1="55" y1="90" x2="100" y2="80" stroke="#EC4899" strokeWidth="1" opacity="0.4" />
                    <line x1="145" y1="90" x2="100" y2="80" stroke="#EC4899" strokeWidth="1" opacity="0.4" />
                    <line x1="55" y1="90" x2="65" y2="125" stroke="#A855F7" strokeWidth="1" opacity="0.3" />
                    <line x1="145" y1="90" x2="135" y2="125" stroke="#A855F7" strokeWidth="1" opacity="0.3" />
                    <line x1="80" y1="50" x2="100" y2="80" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
                    <line x1="120" y1="50" x2="100" y2="80" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
                    <line x1="80" y1="50" x2="55" y2="90" stroke="#EC4899" strokeWidth="1" opacity="0.2" />
                    <line x1="120" y1="50" x2="145" y2="90" stroke="#EC4899" strokeWidth="1" opacity="0.2" />
                  </svg>
                </div>
              </div>

              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: i % 3 === 0 ? '#FF6B35' : i % 3 === 1 ? '#A855F7' : '#EC4899',
                    boxShadow: `0 0 16px ${i % 3 === 0 ? '#FF6B35' : i % 3 === 1 ? '#A855F7' : '#EC4899'}`,
                    animation: `orbit${i} 10s linear infinite`,
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                />
              ))}

              {[
                { color: '#FF6B35', x: '78%', y: '12%', delay: 0, size: 6 },
                { color: '#A855F7', x: '88%', y: '45%', delay: 1.2, size: 5 },
                { color: '#EC4899', x: '74%', y: '75%', delay: 2.5, size: 6 },
                { color: '#FF6B35', x: '10%', y: '20%', delay: 1.8, size: 5 },
                { color: '#A855F7', x: '8%', y: '55%', delay: 0.6, size: 7 },
                { color: '#EC4899', x: '18%', y: '80%', delay: 2, size: 5 },
                { color: '#FF6B35', x: '82%', y: '88%', delay: 3, size: 4 },
                { color: '#A855F7', x: '80%', y: '30%', delay: 1.5, size: 4 },
                { color: '#EC4899', x: '15%', y: '40%', delay: 0.8, size: 5 },
                { color: '#FF6B35', x: '85%', y: '60%', delay: 2.2, size: 4 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    left: dot.x,
                    top: dot.y,
                    background: dot.color,
                    boxShadow: `0 0 20px ${dot.color}, 0 0 40px ${dot.color}40`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0.6, 1],
                    scale: [0, 1, 0.8, 1],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    delay: 0.5 + dot.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
