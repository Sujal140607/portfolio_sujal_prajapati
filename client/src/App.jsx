import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className={`relative min-h-screen bg-dark text-white transition-opacity duration-500 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <ParticleBackground />
        <MouseGlow />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Stats />
        <div className="aurora-bg">
          <About />
          <Skills />
        </div>
        <Projects />
        <div className="aurora-bg">
          <Experience />
          <CurrentlyBuilding />
        </div>
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />

        <style>{`
          @keyframes orbit0 { 0% { transform: rotate(0deg) translateX(180px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(180px) rotate(-360deg); } }
          @keyframes orbit1 { 0% { transform: rotate(60deg) translateX(180px) rotate(-60deg); } 100% { transform: rotate(420deg) translateX(180px) rotate(-420deg); } }
          @keyframes orbit2 { 0% { transform: rotate(120deg) translateX(180px) rotate(-120deg); } 100% { transform: rotate(480deg) translateX(180px) rotate(-480deg); } }
          @keyframes orbit3 { 0% { transform: rotate(180deg) translateX(180px) rotate(-180deg); } 100% { transform: rotate(540deg) translateX(180px) rotate(-540deg); } }
          @keyframes orbit4 { 0% { transform: rotate(240deg) translateX(180px) rotate(-240deg); } 100% { transform: rotate(600deg) translateX(180px) rotate(-600deg); } }
          @keyframes orbit5 { 0% { transform: rotate(300deg) translateX(180px) rotate(-300deg); } 100% { transform: rotate(660deg) translateX(180px) rotate(-660deg); } }
          @keyframes spin-slow { to { transform: rotate(360deg); } }
          .animate-spin-slow { animation: spin-slow linear infinite; }
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
          @keyframes float-delayed { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
          @keyframes pulse-glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
          @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        `}</style>
      </div>
    </>
  );
}

export default App;
