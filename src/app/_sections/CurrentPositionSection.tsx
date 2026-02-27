// app/_sections/CurrentPositionSection.tsx
import { SectionHeader } from '@/components/SectionHeader';
import { currentPosition } from '@/constants/site';
import { getDaysSince } from '@/utils/date-utils';
import { ArrowUpRight, History, MapPin, Box } from 'lucide-react';
import Link from 'next/link';

export const CurrentPositionSection = ({ index }: { index: number }) => {
  const daysActive = getDaysSince(currentPosition.started);
  const formattedDays = new Intl.NumberFormat('nl-NL').format(daysActive);
  const formattedDate = currentPosition.started
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .replace(/ /g, ' ');

  return (
    <section className="py-16 border-y border-border/40">
      <SectionHeader
        index={index}
        title="Current Position"
        description="Hard at work"
        meta={formattedDays + ' days active'}
      />

      <div className="mt-12 flex flex-col md:flex-row gap-12 lg:gap-24">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                LATEST_DEPLOYMENT // ACTIVE
              </span>
            </div>

            <div>
              <h3 className="text-5xl font-black uppercase whitespace-pre-line tracking-tighter leading-none mb-2">
                {currentPosition.title}
              </h3>

              <p className="text-xl font-bold text-muted-foreground/40 flex items-center gap-2">
                @{' '}
                <span className="text-foreground">
                  {currentPosition.company}
                </span>
              </p>
            </div>
          </div>

          <div className="max-w-md text-sm leading-relaxed text-muted-foreground font-medium">
            {currentPosition.description}
          </div>

          <div className="pt-6 border-t border-border/20 max-w-2xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40 italic">
              {currentPosition.closingStatement}
            </p>
          </div>
        </div>

        <div className="w-full md:w-[320px] shrink-0">
          <div className="border border-border/60 rounded-2xl overflow-hidden bg-white dark:bg-black">
            <div className="bg-slate-100/50 dark:bg-white/5 border-b border-border/60 px-5 py-3 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">
                System_Logs
              </span>
              <Box size={14} className="opacity-20" />
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-1">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-30">
                  Location
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-tight">
                    {currentPosition.location}
                  </span>
                  <MapPin size={14} className="text-emerald-500" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-30">
                  Stack_Config
                </p>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {currentPosition.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold px-1.5 py-0.5 border border-border rounded-sm uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-30">
                  Engagement_Period
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black opacity-20 uppercase tracking-tighter">
                      Since
                    </span>
                    <span className="text-sm font-bold tabular-nums uppercase tracking-tight">
                      {formattedDate}
                    </span>
                  </div>
                  <div className="h-8 w-px bg-border/40 ml-4" />{' '}
                  {/* Optional vertical divider */}
                  <div className="text-right">
                    <span className="text-[10px] font-black opacity-20 uppercase tracking-tighter">
                      Status
                    </span>
                    <p className="text-[10px] font-bold uppercase text-emerald-500">
                      Active
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40 space-y-3">
                <Link
                  href="/experience"
                  className="group/link flex items-center justify-between text-[11px] font-black uppercase tracking-tighter hover:text-emerald-600 transition-colors"
                >
                  Work History{' '}
                  <History
                    size={14}
                    className="opacity-40 group-hover/link:opacity-100"
                  />
                </Link>
                <a
                  href={currentPosition.projectSite}
                  target="_blank"
                  className="group/link flex items-center justify-between text-[11px] font-black uppercase tracking-tighter hover:text-emerald-600 transition-colors"
                >
                  Live Platform{' '}
                  <ArrowUpRight
                    size={14}
                    className="opacity-40 group-hover/link:opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
