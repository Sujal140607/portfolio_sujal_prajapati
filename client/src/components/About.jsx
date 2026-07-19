import { motion } from 'framer-motion';
import {
  Hotel,
  Scissors,
  UtensilsCrossed,
  Dumbbell,
  MapPin,
  Mail,
} from "lucide-react";
// import { SiGithub, SiLeetcode } from 'react-icons/si';
// import { FaLinkedin } from 'react-icons/fa';

const profileCards = [
  { 
    icon: Hotel, 
    label: 'Luxury Hotel ', 
    url: '', 
    desc: 'A modern luxury hotel website featuring an elegant UI, room showcase, seamless booking experience, responsive design, and premium user interactions.', 
    color: 'text-accent-orange', 
    bg: 'from-accent-orange/20 to-accent-purple/10', 
    border: 'border-accent-orange/20' 
  },
  { 
    icon: Scissors, 
    label: 'Elite Salon ', 
    url: '', 
    desc: 'A stylish salon website with online appointment booking, service listings, pricing, team showcase, and a premium user experience.', 
    color: 'text-accent-purple', 
    bg: 'from-accent-purple/20 to-accent-pink/10', 
    border: 'border-accent-purple/20' 
  },
  { 
    icon: UtensilsCrossed, 
    label: 'Restaurant', 
    url: '', 
    desc: 'A modern restaurant website with interactive menus, online reservations, customer reviews, and a responsive dining experience.', 
    color: 'text-accent-pink', 
    bg: 'from-accent-pink/20 to-accent-orange/10', 
    border: 'border-accent-pink/20' 
  },
  { 
    icon: Dumbbell, 
    label: 'Medical Clinic', 
    url: '', 
    desc: 'A clean and professional clinic website with doctor profiles, appointment booking, healthcare services, and patient-friendly navigation.', 
    color: 'text-accent-orange', 
    bg: 'from-accent-orange/20 to-accent-purple/10', 
    border: 'border-accent-orange/20' 
  },
  { 
    icon: Mail, 
    label: 'Email', 
    url: 'mailto:sujalprajapati14706@gmail.com', 
    desc: 'sujalprajapati14706@gmail.com', 
    color: 'text-accent-purple', 
    bg: 'from-accent-purple/20 to-accent-pink/10', 
    border: 'border-accent-purple/20' 
  },
  { 
    icon: MapPin, 
    label: 'Location', 
    url: '', 
    desc: 'India', 
    color: 'text-accent-pink', 
    bg: 'from-accent-pink/20 to-accent-orange/10', 
    border: 'border-accent-pink/20' 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-label">About</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="section-title mb-8">
              Who Am <span className="gradient-text">I?</span>
            </h2>
            <div className="space-y-6">
              <div>

                <h1 className="mt-3 text-4xl font-bold text-white leading-tight">
                  Turning Business Ideas Into
                  <span className="block gradient-text">
                    Modern Digital Products
                  </span>
                </h1>
              </div>

              <p className="text-lg text-text-secondary leading-relaxed">
                Hi, I'm{" "}
                <span className="text-white font-semibold">
                  Sujal Prajapati
                </span>
                , an AI Engineer & Full Stack Developer who helps startups,
                entrepreneurs, and businesses build modern web applications,
                AI-powered solutions, and scalable digital products.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                From business websites and SaaS platforms to AI agents,
                automation workflows, and intelligent applications, I transform
                ideas into fast, responsive, and production-ready products using
                React, Node.js, MongoDB, and modern AI technologies.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                My focus is simple build software that looks premium, performs
                exceptionally, and delivers real value to users and businesses.
                Every project is crafted with clean architecture, scalability,
                and an exceptional user experience in mind.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="section-label" id="showcase">
                Showcase
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {profileCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={card.label}
                    variants={itemVariants}
                    href={card.url}
                    target={card.url.startsWith('http') ? '_blank' : undefined}
                    rel={card.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="profile-card bg-gradient-to-br from-white/[0.02] to-transparent"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.bg} flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${card.color}`} />
                    </div>
                    <div className="text-sm font-semibold text-white mb-0.5">{card.label}</div>
                    <div className="text-xs text-text-secondary">{card.desc}</div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
