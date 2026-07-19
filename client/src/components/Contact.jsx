import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, ArrowUpRight, FileText, MessageSquare } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const contactCards = [
  { icon: SiGithub, href: 'https://github.com/Sujal140607', label: 'GitHub', desc: 'View my code and contributions', color: 'text-accent-orange' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sujal-prajapati-88bab928a/', label: 'LinkedIn', desc: 'Let\'s connect professionally', color: 'text-accent-purple' },
  { icon: Mail, href: 'mailto:sujalprajapati14706@gmail.com', label: 'Email', desc: 'sujalprajapati14706@gmail.com', color: 'text-accent-pink' },
  { icon: FileText, href: '/resume.pdf', label: 'Resume', desc: 'Download my full resume', color: 'text-accent-orange' },
  { icon: MessageSquare, href: '#', label: 'Let\'s Talk', desc: 'Open to opportunities & collab', color: 'text-accent-purple' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-label">Contact</span>
          </div>
          <h2 className="section-title mb-6">
            Ready to Build Your <span className="gradient-text">Next Digital Product?</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Have a business idea, startup, or project in mind?<br></br>
Let's build a modern website or AI-powered solution together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-orange/40 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                    required
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-orange/40 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                    required
                  />
                </div>
              </div>
              <div className="group">
                <input
                  type="text"
                  placeholder="Project Type"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-orange/40 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                  required
                />
              </div>
              <div className="group">
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-orange/40 focus:bg-white/[0.05] transition-all duration-300 text-sm resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="magnetic-btn magnetic-btn-primary group w-full justify-center py-4 rounded-2xl"
              >
                Let's Talk 
                <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.label}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bento-card p-4 flex items-center gap-4 group hover:border-accent-orange/25"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-5 h-5 ${card.color} group-hover:brightness-110 transition-colors`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white group-hover:text-accent-orange transition-colors">{card.label}</div>
                    <div className="text-xs text-text-secondary truncate">{card.desc}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-orange transition-colors flex-shrink-0" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
