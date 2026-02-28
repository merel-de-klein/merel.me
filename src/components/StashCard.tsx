'use client';

import { StashItemEnriched } from '@/types/stash';
import { getStashItemUrl } from '@/utils/nav-utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function StashCard({ item }: { item: StashItemEnriched }) {
  const [imgSrc, setImgSrc] = useState(
    item.imageUrl || '/images/placeholder.svg',
  );

  return (
    <Link
      className="group relative flex flex-col md:flex-row bg-white dark:bg-zinc-900/50 border border-zinc-100 dark:border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] h-full"
      href={getStashItemUrl(item)}
    >
      <div className="relative w-full md:w-[280px] shrink-0 bg-zinc-100 dark:bg-black overflow-hidden h-[320px] md:h-auto border-r border-zinc-100 dark:border-white/5">
        <Image
          src={imgSrc}
          alt={item.title}
          fill
          priority
          sizes="280px"
          className={`object-cover transition-transform duration-1000 group-hover:scale-110 ${
            imgSrc.includes('placeholder')
              ? 'opacity-20 grayscale'
              : 'opacity-100'
          }`}
          onError={() => setImgSrc('/images/placeholder.svg')}
        />

        {item.isFavorite && (
          <div className="absolute top-6 left-8 z-20 scale-150 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)] animate-[pulse_2s_infinite]">
            ⭐
          </div>
        )}

        <div
          className={`absolute left-0 top-0 h-full w-2 z-20 ${item.category.color.replace('text', 'bg') || 'bg-highlight'}`}
        />
      </div>

      <div className="flex-1 p-10 flex flex-col justify-between min-w-0 bg-transparent">
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-black text-black dark:text-white italic uppercase tracking-tighter leading-[0.9] mb-3">
              {item.title}
            </h3>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-6 bg-highlight rounded-full" />
              <p className="text-[12px] font-bold text-highlight uppercase tracking-[0.3em]">
                {item.creator}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 p-6 bg-zinc-50/50 dark:bg-white/5 rounded-3xl border border-zinc-100 dark:border-white/5 mb-8">
            <div className="space-y-1">
              <span className="text-[9px] font-black text-zinc-400 dark:text-zinc-500 block uppercase tracking-widest">
                Record_Type
              </span>
              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-200 uppercase">
                {item.category.name}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-black text-zinc-400 dark:text-zinc-500 block uppercase tracking-widest">
                System_Tags
              </span>
              <div className="flex flex-wrap gap-2">
                {(item.tags || []).slice(0, 3).map((tag: any) => (
                  <span
                    key={tag.id}
                    className="text-[10px] font-bold text-highlight"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-8 pt-4 border-t border-zinc-100 dark:border-white/5">
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400 italic leading-relaxed line-clamp-2 max-w-[65%]">
            &ldquo;{item.thoughts}&rdquo;
          </p>
          <div className="flex flex-col items-end shrink-0">
            <span
              className={`text-xs font-black uppercase tracking-tighter ${item.status.color}`}
            >
              {item.status.name}
            </span>
            <div
              className={`h-1.5 w-14 rounded-full mt-2 opacity-20 dark:opacity-40 ${item.status.color.replace('text', 'bg')}`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
