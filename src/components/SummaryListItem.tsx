import { ArrowUpRight, Star } from 'lucide-react';

interface ItemSummaryProps {
  index?: number;
  title: string;
  subtitle?: string;
  description?: string;
  meta?: string;
  isFavorite?: boolean;
}

export const SummaryListItem = ({
  index,
  title,
  subtitle,
  description,
  meta,
  isFavorite
}: ItemSummaryProps) => {
  return (
    <div className="group relative flex flex-col md:flex-row md:items-center gap-6 py-10 border-b border-border/50 hover:border-accent transition-all duration-500 cursor-pointer">

      <div className="flex gap-6 flex-[2] min-w-0">
        {index !== undefined && (
          <span className="text-[11px] font-black text-accent/20 uppercase tracking-[0.4em] pt-1">
            {index.toString().padStart(2, '0')}
          </span>
        )}

        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-baseline gap-3">
            <h4 className="text-2xl font-black text-accent uppercase tracking-tighter leading-none group-hover:underline decoration-2 underline-offset-4 transition-all">
              {title}
            </h4>
            {isFavorite && (
              <Star size={14} className="fill-accent text-accent shrink-0" />
            )}
          </div>

          {subtitle && (
            <span className="text-[11px] font-black text-muted/60 uppercase tracking-[0.2em]">
              BY // {subtitle}
            </span>
          )}
        </div>
      </div>

      <div className="flex-1 hidden lg:block">
        <p className="text-sm text-muted/80 font-medium leading-relaxed italic max-w-sm line-clamp-2 border-l border-border/40 pl-4">
          {description || "No additional logs found for this entry."}
        </p>
      </div>

      <div className="flex items-center justify-between md:justify-end gap-12 shrink-0">
        {meta && (
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-[8px] font-black text-muted/30 uppercase tracking-[0.3em]">Classification</span>
            <span className="text-[11px] font-bold text-accent uppercase tracking-widest">
              {meta}
            </span>
          </div>
        )}

        <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center group-hover:bg-accent group-hover:text-background group-hover:border-accent group-hover:scale-110 transition-all duration-300">
          <ArrowUpRight size={20} strokeWidth={3} />
        </div>
      </div>

      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-accent/[0.01] opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-[2rem]" />
    </div>
  );
};
