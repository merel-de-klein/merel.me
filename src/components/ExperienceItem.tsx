import { Experience } from '@/types/experience';
import { Calendar, Globe, MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('en-GB', {
    month: 'short',
    year: 'numeric',
  });

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

          const isCyan = pos.isHighlight && !isActive;

          const theme = {
            border: isCyan ? 'border-featured/30' : 'border-highlight/40',
            dot: isCyan
              ? 'bg-featured shadow-[0_0_8px_rgba(6,182,212,0.5)]'
              : 'bg-highlight shadow-[0_0_10px_rgba(16,185,129,0.8)]',
            text: isCyan ? 'text-featured' : 'text-highlight',
            bg: isCyan
              ? 'bg-featured/[0.07] border-featured/30'
              : 'bg-highlight/[0.07] border-highlight/30',
            badge: isCyan
              ? 'bg-featured/10 text-featured border-featured/20'
              : 'bg-highlight/10 text-highlight border-highlight/20',
          };

          return (
            <div
              key={idx}
              className={`relative pl-8 border-l transition-colors duration-500 ${theme.border}`}
            >
              <div
                className={`absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full transition-all duration-500 ${theme.dot} ${isActive ? 'animate-pulse' : ''}`}
              />

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-foreground/90">
                      {pos.title}
                    </h4>

                    {(pos.isHighlight || isActive) && (
                      <span
                        className={`text-[8px] font-black px-1.5 py-0.5 border rounded-sm tracking-[0.1em] ${theme.badge}`}
                      >
                        {isActive ? 'ACTIVE_STATION' : 'KEY_DEPLOYMENT'}
                      </span>
                    )}
                  </div>

                  <div
                    className={`flex items-center gap-2 font-mono text-[9px] px-2 py-1 rounded border transition-colors shrink-0 ${theme.bg}`}
                  >
                    <Calendar size={10} />
                    {formatDate(pos.startedAt)} —{' '}
                    {pos.endedAt ? formatDate(pos.endedAt) : 'PRESENT'}
                  </div>
                </div>

                {pos.websiteUrl && (
                  <div className="-mt-2">
                    <Link
                      href={pos.websiteUrl}
                      target="_blank"
                      className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider transition-colors group/link underline-offset-4 hover:underline ${theme.text}`}
                    >
                      <Globe
                        size={10}
                        className={
                          isActive
                            ? 'animate-pulse'
                            : 'group-hover/link:animate-pulse'
                        }
                      />
                      VIEW_LIVE_PLATFORM
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all"
                      />
                    </Link>
                  </div>
                )}

                <p className="text-sm leading-relaxed text-muted-foreground font-medium max-w-2xl">
                  {pos.description}
                </p>

                {pos.activities && !!pos.activities.length && (
                  <ul className="space-y-2">
                    {pos.activities.map((activity, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed font-medium transition-colors group-hover:text-foreground/80"
                      >
                        <span
                          className={`mt-2.5 w-1 h-1 shrink-0 rounded-full transition-colors ${isCyan ? 'bg-featured/40' : 'bg-highlight/40'}`}
                        />
                        {activity}
                      </li>
                    ))}
                  </ul>
                )}

                {pos.metrics && pos.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-4 my-8">
                    {pos.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className={`px-4 py-3 rounded-md min-w-[130px] border shadow-sm transition-all ${theme.bg}`}
                      >
                        <span
                          className={`text-[10px] font-bold block leading-none mb-3 tracking-[0.15em] uppercase opacity-80 ${theme.text}`}
                        >
                          {metric.label.replace('_', ' ')}
                        </span>

                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black font-mono leading-none tracking-tight text-foreground">
                            {metric.value}
                          </span>
                        </div>

                        {metric.description && (
                          <span className="text-[9px] font-medium text-muted-foreground/70 uppercase tracking-tighter block mt-1 leading-tight border-t border-border/10">
                            {metric.description}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div
                  className={`mt-8 pt-6 border-t transition-colors duration-500 ${theme.border}`}
                >
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <div className="flex items-center gap-2 min-w-fit">
                      <div
                        className={`w-1 h-3 transition-colors duration-500 ${isCyan ? 'bg-featured' : 'bg-highlight'}`}
                      />
                      <span
                        className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${theme.text} opacity-70`}
                      >
                        STACK_DEPLOYED:
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {pos.stack.map((tech) => (
                        <span
                          key={tech}
                          className="group/tech flex items-center gap-2 font-mono text-[11px] font-bold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
                        >
                          <span
                            className={`text-[8px] transition-colors duration-500 ${isCyan ? 'text-featured' : 'text-highlight group-hover/tech:animate-pulse'}`}
                          >
                            ●
                          </span>
                          {tech.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
