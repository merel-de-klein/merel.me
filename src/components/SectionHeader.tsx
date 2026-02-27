interface ItemProps {
  index?: number,
  title: string;
  description?: string;
  meta?: string;
}

export const SectionHeader = ({ index, title, description, meta }: ItemProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
      <div className="flex flex-col gap-1">
        {index !== undefined && (
          <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted/30">
            Vol. {index.toString().padStart(2, '0')}
          </span>
          <div className="h-[1px] w-6 bg-border" />
        </div>
        )}

        <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-accent leading-none">
            {title}
          </h2>

          {!!description && (
            <p className="text-[9px] text-muted/40 uppercase tracking-[0.15em] font-medium italic mt-2 md:mt-0">
              {description}
            </p>
          )}
        </div>
      </div>

      {!!meta && (
        <div className="flex items-center gap-2 pb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">
            {meta}
          </p>
        </div>
      )}
    </div>
  );
};
