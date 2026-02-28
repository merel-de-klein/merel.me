'use client';

import StashCard from '@/components/StashCard';
import { statuses } from '@/lib/stash-data';
import { Group, StashItemEnriched } from '@/types/stash';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

export default function StashListClient({
  group,
  items,
}: {
  group: Group;
  items: StashItemEnriched[];
}) {
  const [activeFilterId, setActiveFilterId] = useState<number | 'All'>('All');

  const filteredItems = useMemo(() => {
    if (activeFilterId === 'All') return items;
    return items.filter((item) => item.status_id === activeFilterId);
  }, [activeFilterId, items]);

  return (
    <>
      <nav className="mb-16 border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="shrink-0">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400/70 dark:text-zinc-600">
              Filter_Index
            </span>
          </div>

          <div className="hidden md:block h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-10">
            <button
              onClick={() => setActiveFilterId('All')}
              className="group relative cursor-pointer flex items-center h-6 transition-all"
            >
              <div
                className={`absolute -left-4 w-[2px] rounded-full transition-all duration-300 ${
                  activeFilterId === 'All'
                    ? 'h-4 bg-zinc-900 dark:bg-zinc-100 opacity-100'
                    : 'h-0 bg-zinc-300 opacity-0 group-hover:h-2 group-hover:opacity-50'
                }`}
              />

              <span
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeFilterId === 'All'
                    ? 'text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                All Records
              </span>
            </button>

            {statuses.map((status) => {
              const isActive = activeFilterId === status.id;
              return (
                <button
                  key={status.id}
                  onClick={() => setActiveFilterId(status.id)}
                  className="group relative cursor-pointer flex items-center h-6 transition-all"
                >
                  <div
                    className={`absolute -left-4 w-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? `h-4 ${status.color.replace(
                            'text',
                            'bg'
                          )} opacity-100`
                        : 'h-0 bg-zinc-300 dark:bg-zinc-700 opacity-0 group-hover:h-2 group-hover:opacity-50'
                    }`}
                  />

                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                      isActive
                        ? 'text-zinc-900 dark:text-zinc-100'
                        : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                    }`}
                  >
                    {status.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <StashCard item={item} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-32 flex flex-col items-center justify-center text-center"
            >
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 blur-3xl opacity-10 rounded-full ${group.accentColor.replace(
                    'text',
                    'bg'
                  )}`}
                />
                <span className="relative text-5xl opacity-20 grayscale">
                  📂
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-2 uppercase italic">
                No Records Found
              </h3>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 max-w-xs mx-auto leading-relaxed">
                The current directory is empty or no items match the selected
                filter criteria.
              </p>

              <button
                onClick={() => setActiveFilterId('All')}
                className="mt-8 text-[10px] cursor-pointer font-black uppercase tracking-[0.3em] text-highlight hover:opacity-70 transition-opacity underline underline-offset-8"
              >
                Reset_Filter
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
