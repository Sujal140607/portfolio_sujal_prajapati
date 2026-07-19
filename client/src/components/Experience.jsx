import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'MaMo TechnoLabs',
    period: '2024 - Present',
    type: 'Internship',
    responsibilities: [
      'Built Full Stack Applications',
      'Developed REST APIs',
      'Integrated MongoDB',
      'Worked on Real Client Projects',
      'AI integration for Web Applications',
      'Improved UI/UX',
    ],
  },
];

const education = {
  degree: 'AI & Data Science Engineering',
  school: 'CVM University, A. D. Patel Institute of Technology, Vallabh Vidyanagar',
  current: '7th Semester',
  focus: ['Artificial Intelligence', 'Machine Learning', 'Data Analytics', 'Full Stack Development'],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-label">Background</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent-orange/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent-orange" />
              </div>
              <h3 className="text-xl font-semibold font-satoshi text-white">Experience</h3>
            </div>

            {experiences.map((exp) => (
              <motion.div key={exp.role} variants={itemVariants} className="relative">
                <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-accent-orange/40 to-transparent" />
                <div className="relative pl-12 pb-8">
                  <div className="absolute left-[11px] top-1 w-[18px] h-[18px] rounded-full bg-accent-orange/20 border-2 border-accent-orange flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent-orange" />
                  </div>
                  <div className="bento-card p-6">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                        <p className="text-accent-orange text-sm">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-text-secondary bg-white/5 px-3 py-1.5 rounded-full">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-center gap-3 text-sm text-text-secondary">
                          <ChevronRight size={12} className="text-accent-orange flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent-purple" />
              </div>
              <h3 className="text-xl font-semibold font-satoshi text-white">Education</h3>
            </div>

            <div className="bento-card p-6 md:p-8 bg-gradient-to-br from-accent-purple/10 to-accent-pink/5 border-accent-purple/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                  Current - {education.current}
                </span>
              </div>
              <h4 className="text-xl font-bold font-satoshi text-white mb-2">{education.degree}</h4>
              <p className="text-text-secondary text-sm mb-6">{education.school}</p>
              <div className="space-y-3">
                <div className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Focus Areas</div>
                <div className="flex flex-wrap gap-2">
                  {education.focus.map((f) => (
                    <span key={f} className="tech-badge hover:border-accent-purple/30 hover:text-accent-purple">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
