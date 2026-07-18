import { ArrowUp } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div>
            <a href="#home" className="text-2xl font-bold font-satoshi gradient-text">SP</a>
            <p className="text-sm text-text-secondary mt-3 max-w-xs leading-relaxed">
              AI Engineer & Full Stack Developer building intelligent products that solve real problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-secondary hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-accent-orange/10 hover:border-accent-orange/40 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-text-secondary group-hover:text-accent-orange transition-colors" />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; 2026 Sujal Prajapati. All Rights Reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with AI
          </p>
        </div>
      </div>
    </footer>
  );
}
