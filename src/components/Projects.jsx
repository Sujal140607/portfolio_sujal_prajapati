import { motion } from 'framer-motion';
import { ExternalLink, Lightbulb, Sparkles, BarChart3 } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const featuredProjects = [
  {
    title: 'Expense Tracker AI',
    tag: 'AI-Powered',
    problem: 'Manual expense tracking is tedious and error-prone.',
    aiFeatures: 'NLP extracts amount, category, and date from casual Hinglish text.',
    impact: 'Zero-effort expense logging \u2014 just message naturally.',
    tech: ['MERN', 'OpenAI', 'MongoDB', 'NLP'],
    tagColor: 'bg-accent-orange/15 text-accent-orange border-accent-orange/25',
    gradient: 'from-accent-orange/10 to-transparent',
    size: 'large',
  },
  {
    title: 'Snitch AI',
    tag: 'AI Agent',
    problem: 'Managing workflows across tools is fragmented.',
    aiFeatures: 'Autonomous agent that understands context and automates workflows.',
    impact: '10x productivity boost eliminating manual overhead.',
    tech: ['Next.js', 'AI Agents', 'Node.js', 'LangChain'],
    tagColor: 'bg-accent-purple/15 text-accent-purple border-accent-purple/25',
    gradient: 'from-accent-purple/10 to-transparent',
    size: 'large',
  },
  {
    title: 'AI Battle Arena',
    tag: 'Multi-Agent',
    problem: 'LLM evaluation lacks structured competition.',
    aiFeatures: 'Multi-agent platform with real-time scoring and analytics.',
    impact: 'Quantifiable LLM benchmarking across skills.',
    tech: ['React', 'Python', 'AI APIs', 'WebSockets'],
    tagColor: 'bg-accent-pink/15 text-accent-pink border-accent-pink/25',
    gradient: 'from-accent-pink/10 to-transparent',
    size: 'medium',
  },
  {
    title: 'AI Negotiation Simulator',
    tag: 'LangGraph',
    problem: 'Negotiation training is expensive and unrealistic.',
    aiFeatures: 'LangGraph agents with distinct strategies and analysis.',
    impact: 'Risk-free practice with detailed post-session analytics.',
    tech: ['LangGraph', 'Python', 'LLM APIs', 'Graph Theory'],
    tagColor: 'bg-accent-orange/15 text-accent-orange border-accent-orange/25',
    gradient: 'from-accent-orange/10 to-transparent',
    size: 'medium',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-accent-orange/3 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-purple/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-label">Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-sm">
            AI-powered products built with modern architectures and intelligent systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          {featuredProjects.map(function(project) {
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bento-card-lg relative overflow-hidden group"
                style={{
                  background: 'rgba(13,13,13,0.85)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${project.tagColor} tracking-wide`}>
                      {project.tag}
                    </span>
                    <span className="text-[11px] text-text-muted tracking-wider uppercase font-medium">
                      {project.size === 'large' ? 'Featured' : 'Project'}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-satoshi text-white mb-5 tracking-tight">
                    {project.title}
                  </h3>

                  <div className="grid grid-cols-3 gap-4 mb-6 flex-1">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center mb-2">
                        <Lightbulb size={14} className="text-accent-orange" />
                      </div>
                      <span className="text-[10px] text-accent-orange uppercase tracking-wider font-semibold block mb-1">Problem</span>
                      <p className="text-text-secondary text-xs leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-accent-purple/10 flex items-center justify-center mb-2">
                        <Sparkles size={14} className="text-accent-purple" />
                      </div>
                      <span className="text-[10px] text-accent-purple uppercase tracking-wider font-semibold block mb-1">AI Feature</span>
                      <p className="text-text-secondary text-xs leading-relaxed">{project.aiFeatures}</p>
                    </div>
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-accent-pink/10 flex items-center justify-center mb-2">
                        <BarChart3 size={14} className="text-accent-pink" />
                      </div>
                      <span className="text-[10px] text-accent-pink uppercase tracking-wider font-semibold block mb-1">Impact</span>
                      <p className="text-text-secondary text-xs leading-relaxed">{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(function(t) {
                      return (
                        <span key={t} className="px-2.5 py-1 text-[11px] rounded-md bg-white/[0.04] text-text-secondary border border-white/[0.06] font-medium">
                          {t}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-white/[0.04]">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent-orange/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </button>
                    <button className="flex items-center justify-center px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-text-secondary hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300">
                      <SiGithub size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
