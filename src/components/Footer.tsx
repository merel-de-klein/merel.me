import { cvConfig, personalInfo, siteConfig } from '@/constants/site';
import { Blackbird } from '@/icons/Blackbird';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border/30 py-10 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80">
            {personalInfo.name}
          </span>
          <span className="text-[8px] font-medium uppercase tracking-widest text-foreground/40">
            {personalInfo.location}, {personalInfo.country} //{' '}
            {personalInfo.coordinates}
          </span>
        </div>

        <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
          <a
            href={siteConfig.links.github}
            className="hover:text-highlight transition-colors"
          >
            Github
          </a>
          <a
            href={siteConfig.links.linkedin}
            className="hover:text-highlight transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={cvConfig.location}
            download={cvConfig.fileName}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition-colors flex items-center gap-2"
          >
            CV_Download
          </a>
        </div>

        <div className="text-right flex flex-col gap-2">
          <div className="flex flex-col md:flex-row items-center justify-end gap-3">
            <div className="opacity-20 hover:opacity-100 transition-opacity duration-500">
              <Blackbird />
            </div>

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-highlight/60 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-highlight animate-pulse" />
              System_Active
            </span>
          </div>

          <span className="text-[8px] font-medium uppercase tracking-widest text-foreground/30">
            {personalInfo.location}.{personalInfo.country} // ©{' '}
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};
