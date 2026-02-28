import { cvConfig, siteConfig } from '@/constants/site';
import { Linkedin, FileText, ArrowRight, ShieldCheck, Github } from 'lucide-react';

export const ContactSection = ({ index }: { index: number }) => {
  const links = [
    {
      label: 'LinkedIn_Network',
      href: siteConfig.links.linkedin,
      icon: <Linkedin size={18} />,
      color: 'text-highlight',
      hoverBg: 'hover:bg-highlight/[0.03] hover:border-highlight/30',
      description: 'Professional_Connection'
    },
    {
      label: 'System_Source',
      href: siteConfig.links.github,
      icon: <Github size={18} />,
      color: 'text-highlight',
      hoverBg: 'hover:bg-highlight/[0.03] hover:border-highlight/30',
      description: 'View_Repository_Manifest'
    },
    {
      label: 'Export_Public_CV',
      href: cvConfig.location,
      icon: <FileText size={18} />,
      color: 'text-cyan-500',
      hoverBg: 'hover:bg-cyan-500/[0.03] hover:border-cyan-500/30',
      download: cvConfig.fileName,
      description: 'Redacted_System_Logs'
    },
  ];

  return (
    <section className="py-40 border-t border-border/40">
      <div className="max-w-2xl mx-auto px-6">

        {/* Terminal Header */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-2 text-highlight/60">
            <div className="h-[1px] w-8 bg-current" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em]">
              Sequence_Complete_{index.toString().padStart(2, '0')}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] sm:leading-none">
            Terminal_
            <br className="sm:hidden" />
            <span>Exit</span>
          </h2>
        </div>

        {/* Action List */}
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex items-center justify-between p-6
                border border-border/20 bg-background
                transition-colors duration-300
                ${link.hoverBg}
              `}
            >
              <div className="flex items-center gap-6">
                <span className={`${link.color} transition-opacity group-hover:opacity-100 opacity-70`}>
                  {link.icon}
                </span>

                <div className="space-y-0.5">
                  <span className="text-xs font-black uppercase tracking-widest block transition-colors group-hover:text-foreground text-muted-foreground/80">
                    {link.label}
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-tighter">
                    {link.description}
                  </span>
                </div>
              </div>

              <ArrowRight
                size={14}
                className="text-muted-foreground/20 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-foreground transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
