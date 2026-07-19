import { motion } from 'framer-motion';
import { Trophy, Layers, Code2, Clock } from 'lucide-react';

const achievements = [
  { icon: Trophy, number: '', label: 'Discovery', gradient: 'from-accent-orange/20 to-accent-purple/10', border: 'border-accent-orange/20' },
  { icon: Clock, number: '', label: 'Design', gradient: 'from-accent-purple/20 to-accent-pink/10', border: 'border-accent-purple/20' },
  { icon: Code2, number: '', label: 'Development', gradient: 'from-accent-pink/20 to-accent-orange/10', border: 'border-accent-pink/20' },
  { icon: Layers, number: '', label: 'Testing', gradient: 'from-accent-orange/20 to-accent-pink/10', border: 'border-accent-orange/20' },
  { icon: Layers, number: '', label: 'Deployment', gradient: 'from-accent-white/20 to-accent-pink/10', border: 'border-accent-orange/20' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Achievements() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-label">Milestones</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Development Process</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
        >
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bento-card p-6 md:p-8 text-center bg-gradient-to-br ${item.gradient} ${item.border} group neon-glow-orange`}
              >
                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-accent-orange" />
                </div>
                <div className="text-sm text-text-secondary font-medium">{item.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
