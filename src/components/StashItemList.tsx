import { groups } from '@/lib/stash-data';
import { StashItem } from '@/types/stash';
import { getGroupUrl } from '@/utils/nav-utils';
import { getStashItemStatus } from '@/utils/stash-utils';
import Link from 'next/link';
import { SummaryListItem } from './SummaryListItem';

interface CurrentMediaListProps {
  items: StashItem[];
  index: number;
}

export const StashItemList = ({
  index,
  items,
}: CurrentMediaListProps) => {
  const hasItems = items.length > 0;

  if (hasItems) {
    return (
      <div className="flex flex-col">
        {items.map((item, i) => (
          <SummaryListItem
            key={i}
            index={i + 1}
            title={item.title}
            by={item.creator}
            description={item.thoughts}
            meta={getStashItemStatus(item)}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="mt-6 py-16 border-2 border-dashed border-border/40 rounded-3xl flex flex-col items-center justify-center text-center">
        <div className="mb-8 flex items-center gap-3 text-[10px] font-black text-muted/30 uppercase tracking-[0.4em]">
          <span>Vol. {index.toString().padStart(2, '0')}</span>
          <span className="w-[1px] h-3 bg-border/50 rotate-[20deg]" />
          <span>Null</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-black text-accent uppercase tracking-tighter">
            A Rare Miracle
          </h3>
          <p className="text-sm text-muted font-medium leading-relaxed">
            The shelf is completely empty.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-[10px] font-black text-muted/60 uppercase tracking-[0.3em]">
            Explore the permanent collection
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {groups.map((group) => (
              <Link
                key={group.id}
                href={getGroupUrl(group)}
                className="px-6 py-2.5 border border-border hover:border-accent text-muted hover:text-accent text-[10px] font-black uppercase tracking-widest transition-all rounded-full bg-nav/30 backdrop-blur-sm"
              >
                {group.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
