import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Wrench } from 'lucide-react';
import { FaJava, FaPython } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiDocker, SiGit, SiJavascript, SiVercel, SiPostgresql, SiNextdotjs, SiLangchain } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Business Websites',
    icon: Cpu,
    gradient: 'from-accent-orange/20 to-accent-purple/10',
    border: 'border-accent-orange/20',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'SEO Friendly', 'Responsive Design', 'Framer Motion'],
  },
  {
    title: 'AI Applications',
    icon: Globe,
    gradient: 'from-accent-purple/20 to-accent-pink/10',
    border: 'border-accent-purple/20',
    skills: ['N8N Automation', 'AI Agents', 'RAG Systems', 'LangChain', 'LLM Integration'],
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    gradient: 'from-accent-pink/20 to-accent-orange/10',
    border: 'border-accent-pink/20',
    skills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Deployment & DevOps',
    icon: Wrench,
    gradient: 'from-accent-orange/20 to-accent-pink/10',
    border: 'border-accent-orange/20',
    skills: ['Docker', 'GitHub Actions', 'VPS', 'Vercel', 'Linux'],
  },
];

const badgeIcons = {
  Python: FaPython,
  Java: FaJava,
  JavaScript: SiJavascript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  'GitHub Actions': SiGit,
  Vercel: SiVercel,
  LangChain: SiLangchain,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Skills() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-label">Services</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={`bento-card p-6 md:p-8 bg-gradient-to-br ${cat.gradient} ${cat.border}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <CatIcon className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-satoshi text-white">{cat.title}</h3>
                    <div className="text-xs text-text-secondary">{cat.skills.length} technologies</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => {
                    const SkillIcon = badgeIcons[skill];
                    return (
                      <span key={skill} className="tech-badge">
                        {SkillIcon && <SkillIcon className="w-3.5 h-3.5" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
