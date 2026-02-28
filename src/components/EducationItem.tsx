import { Education } from '@/types/experience';
import { Award, Calendar, MapPin } from 'lucide-react';

export const EducationItem = ({ item }: { item: Education }) => {
  const isPrimary = item.isHighlight;
  const isCyan = item.isFeatured;

  const theme = {
    text: isCyan ? 'text-cyan-500' : 'text-highlight',
    border: isCyan ? 'border-cyan-500/40' : 'border-highlight/40',
    dot: isCyan
      ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
      : 'bg-highlight shadow-[0_0_10px_rgba(16,185,129,0.8)]',
    badge: isCyan
      ? 'bg-cyan-500/10 border-cyan-500/20'
      : 'bg-highlight/10 border-highlight/20',
    scoreBg: isCyan
      ? 'bg-cyan-500/5 border-cyan-500/20'
      : 'bg-highlight/5 border-highlight/20',
    icon: isCyan ? 'text-cyan-500/30' : 'text-highlight/30',
  };

  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border/40 last:border-0">
      <div className="lg:col-span-4 space-y-4">
        <div className="space-y-1">
          <span
            className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${isCyan ? 'text-cyan-500/60' : 'text-highlight/60'}`}
          >
            {item.type}_RECORD
          </span>
          <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">
            {item.institution}
          </h3>
        </div>

        <div className="flex flex-col gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
          {item.location && (
            <div className="flex items-center gap-2">
              <MapPin size={12} className={theme.icon} />
              {item.location}
            </div>
          )}
          <div className="flex items-center gap-2">
            <Calendar size={12} className={theme.icon} />
            {item.startAt} — {item.endedAt}
          </div>
        </div>
      </div>

      <div className="lg:col-span-8">
        <div
          className={`relative pl-8 border-l transition-all duration-500 ${
            isCyan
              ? theme.border
              : isPrimary
                ? 'border-highlight/40'
                : 'border-border/60'
          }`}
        >
          <div
            className={`absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full transition-all duration-500 ${
              isCyan || isPrimary
                ? theme.dot
                : 'bg-border group-hover:bg-highlight'
            } ${isPrimary && !isCyan ? 'animate-pulse' : ''}`}
          />

          <div className="space-y-6">
            <div className="space-y-1">
              <h4 className="text-2xl font-bold uppercase tracking-tight text-foreground/90">
                {item.degree}
              </h4>
              {item.field && (
                <p
                  className={`text-sm font-mono tracking-wide uppercase font-bold ${theme.text} opacity-80`}
                >
                  Field: {item.field}
                </p>
              )}
            </div>

            {item.score && (
              <div className="flex flex-wrap gap-3">
                {item.score.map((s) => (
                  <div
                    key={s.label}
                    className={`${theme.scoreBg} px-3 py-2 rounded-sm min-w-[90px] transition-colors`}
                  >
                    <span
                      className={`text-[9px] font-mono block leading-none mb-1.5 tracking-widest uppercase opacity-60 ${theme.text}`}
                    >
                      {s.label}
                    </span>
                    <span
                      className={`text-xl font-black font-mono leading-none tracking-tighter ${theme.text}`}
                    >
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <ul className="space-y-2">
              {item.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed font-medium"
                >
                  <span
                    className={`mt-1.5 w-1 h-1 shrink-0 rounded-full ${isCyan ? 'bg-cyan-500/40' : 'bg-highlight/40'}`}
                  />
                  {detail}
                </li>
              ))}
            </ul>

            {item.honors && (
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 border font-black uppercase tracking-[0.2em] rounded-sm text-[10px] shadow-sm ${theme.badge} ${theme.text}`}
              >
                <Award size={12} />
                Honors: {item.honors}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
