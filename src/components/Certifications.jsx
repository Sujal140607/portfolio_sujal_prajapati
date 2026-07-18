import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Fast Performance',
    description: 'Building fast, optimized and responsive web applications.',
    gradient: 'from-accent-orange/20 to-accent-purple/10',
    border: 'border-accent-orange/20',
  },
  {
    title: 'Modern UI/UX',
    description: 'Clean, beautiful and user-friendly interfaces.',
    gradient: 'from-accent-purple/20 to-accent-pink/10',
    border: 'border-accent-purple/20',
  },
  {
    title: 'AI Integration',
    description: 'Integrating AI, automation and modern LLM technologies.',
    gradient: 'from-accent-pink/20 to-accent-orange/10',
    border: 'border-accent-pink/20',
  },
  {
    title: 'Mobile-First',
    description: 'Every project is fully responsive across all devices.',
    gradient: 'from-accent-orange/20 to-accent-purple/10',
    border: 'border-accent-orange/20',
  },
  {
    title: 'Clean Code',
    description: 'Maintainable, scalable and production-ready code.',
    gradient: 'from-accent-orange/20 to-accent-purple/10',
    border: 'border-accent-orange/20',
  },
  {
    title: 'Easy Communication',
    description: 'Clear updates and collaborative development process.',
    gradient: 'from-accent-orange/20 to-accent-purple/10',
    border: 'border-accent-orange/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Certifications() {
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
            <span className="section-label">Credentials</span>
          </div>
          <h2 className="section-title">
            Why Choose <span className="gradient-text">Me </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.a
              key={cert.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bento-card p-6 md:p-8 bg-gradient-to-br ${cert.gradient} ${cert.border} group block`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-accent-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold font-satoshi text-white mb-1 group-hover:text-accent-orange transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-2">{cert.description}</p>
                  
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
