import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Brain, Bot, Swords, Rocket } from 'lucide-react';

const buildingProjects = [
  {
    icon: Bot,
    title: 'AI Negotiation Simulator',
    description: 'LangGraph-powered agents with distinct negotiation strategies, outcome analysis, and strategy evaluation for realistic, risk-free practice.',
    status: 'In Development',
    gradient: 'from-accent-orange/20 to-accent-purple/10',
    border: 'border-accent-orange/20',
  },
  {
    icon: Swords,
    title: 'Snitch AI',
    description: 'Autonomous AI agent that understands context, schedules smart reminders, and automates multi-step workflows.',
    status: 'In Development',
    gradient: 'from-accent-purple/20 to-accent-pink/10',
    border: 'border-accent-purple/20',
  },
  {
    icon: Brain,
    title: 'AI Battle Arena',
    description: 'Multi-agent platform where AI agents debate, compete, and solve problems with real-time scoring and performance analytics.',
    status: 'In Development',
    gradient: 'from-accent-pink/20 to-accent-orange/10',
    border: 'border-accent-pink/20',
  },
  {
    icon: Rocket,
    title: 'Future AI Agent Projects',
    description: 'Exploring agentic workflows, multi-agent orchestration, and production-grade AI systems for enterprise use cases.',
    status: 'Planning',
    gradient: 'from-accent-orange/20 to-accent-pink/10',
    border: 'border-accent-orange/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function CurrentlyBuilding() {
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
            <span className="section-label">Now</span>
            <Sparkles size={14} className="text-accent-orange" />
          </div>
          <h2 className="section-title">
            Currently <span className="gradient-text">Building</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Shipping AI products that push the boundaries of what's possible with agentic systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {buildingProjects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={`bento-card p-6 md:p-8 bg-gradient-to-br ${project.gradient} ${project.border} group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-accent-orange" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    project.status === 'In Development'
                      ? 'bg-accent-orange/20 text-accent-orange border-accent-orange/30'
                      : 'bg-accent-purple/20 text-accent-purple border-accent-purple/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-satoshi text-white mb-3">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-xs text-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight size={12} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
