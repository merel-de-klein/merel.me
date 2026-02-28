import { Experience } from '@/types/experience';
import { Calendar, Globe, MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });

export const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border/40 last:border-0">
      <div className="lg:col-span-4 space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-highlight/60">
            {experience.type}_RECORD
          </span>
          <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">
            {experience.company.name}
          </h3>
        </div>

        <div className="flex flex-col gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-highlight/30" />
            {experience.company.location}
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 space-y-12">
        {experience.positions.map((pos, idx) => {
          const isActive = !pos.endedAt;

          return (
            <div
              key={idx}
              className={`relative pl-8 border-l transition-colors duration-500 ${
                isActive
                  ? 'border-highlight/40'
                  : pos.isHighlight
                    ? 'border-featured/30'
                    : 'border-border/40'
              }`}
            >
              <div className={`absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full transition-all duration-500 ${
                isActive
                  ? 'bg-highlight shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse'
                  : pos.isHighlight
                    ? 'bg-featured shadow-[0_0_8px_rgba(6,182,212,0.5)]'
                    : 'bg-border group-hover:bg-highlight'
              }`} />

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-foreground/90">
                      {pos.title}
                    </h4>

                    {pos.isHighlight && (
                      <span className={`text-[8px] font-black px-1.5 py-0.5 border rounded-sm tracking-[0.1em] ${
                        isActive
                          ? 'bg-highlight/10 text-highlight border-highlight/20'
                          : 'bg-featured/10 text-featured border-featured/20'
                      }`}>
                        {isActive ? 'ACTIVE_STATION' : 'KEY_DEPLOYMENT'}
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center gap-2 font-mono text-[9px] px-2 py-1 rounded border transition-colors shrink-0 ${
                    isActive
                      ? 'bg-highlight/5 text-highlight border-highlight/20'
                      : 'bg-zinc-50 dark:bg-white/5 border-transparent'
                  }`}>
                    <Calendar size={10} />
                    {formatDate(pos.startedAt)} — {pos.endedAt ? formatDate(pos.endedAt) : 'PRESENT'}
                  </div>
                </div>

                {pos.websiteUrl && (
                  <div className="-mt-2">
                    <Link
                      href={pos.websiteUrl}
                      target="_blank"
                      className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider transition-colors group/link underline-offset-4 hover:underline ${
                        isActive
                          ? 'text-highlight hover:text-highlight/80'
                          : 'text-featured/80 hover:text-featured'
                      }`}
                    >
                      <Globe size={10} className={isActive ? 'animate-pulse' : 'group-hover/link:animate-pulse'} />
                      VIEW_LIVE_PLATFORM
                      <ArrowUpRight size={10} className="opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                    </Link>
                  </div>
                )}

                <p className="text-sm leading-relaxed text-muted-foreground font-medium max-w-2xl">
                  {pos.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {pos.stack.map(tech => (
                    <span
                      key={tech}
                      className="text-[9px] font-bold font-mono border border-border/60 px-1.5 py-0.5 rounded-sm opacity-50 hover:opacity-100 transition-opacity"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
