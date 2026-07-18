import { motion } from 'framer-motion';
import { Briefcase, Code2, GitCommit, GraduationCap, Clock } from 'lucide-react';

const stats = [
  { icon: Code2, number: '10+', label: 'AI & Web Projects', gradient: 'from-accent-orange/20 to-accent-purple/10', border: 'border-accent-orange/20', glow: 'neon-glow-orange' },
  { icon: Clock, number: '5+', label: 'AI Solutions', gradient: 'from-accent-purple/20 to-accent-pink/10', border: 'border-accent-purple/20', glow: 'neon-glow-purple' },
  { icon: GitCommit, number: '1000+', label: 'Development Hours', gradient: 'from-accent-pink/20 to-accent-orange/10', border: 'border-accent-pink/20', glow: 'neon-glow-orange' },
  { icon: GraduationCap, number: '15+', label: 'Modern Technologies', gradient: 'from-accent-orange/20 to-accent-pink/10', border: 'border-accent-orange/20', glow: 'neon-glow-purple' },
  { icon: Briefcase, number: '⚡', label: 'Performance Optimized', gradient: 'from-accent-purple/20 to-accent-orange/10', border: 'border-accent-purple/20', glow: 'neon-glow-orange' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Stats() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                className={`relative p-5 rounded-2xl bg-gradient-to-br ${stat.gradient} ${stat.border} ${stat.glow} backdrop-blur-xl hover:scale-[1.04] transition-all duration-500 group cursor-default`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div className="stat-value gradient-text mb-0.5">{stat.number}</div>
                  <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
                </div>
                <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
