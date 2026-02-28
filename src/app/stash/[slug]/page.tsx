import { getStashByGroup } from '@/api/stash';
import { getGroupBySlug } from '@/utils/stash-utils';
import * as Icons from 'lucide-react';
import { notFound } from 'next/navigation';
import StashListClient from './_sections/StashListClient';

export default async function StashGroupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = getGroupBySlug(slug);
  if (!group) notFound();

  const items = await getStashByGroup(group.id);
  const Icon = (Icons as any)[group.iconName] || Icons.HelpCircle;

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 relative">
          {/* Background Icon Watermark */}
          <div className="absolute -top-12 right-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            {Icon && <Icon size={400} strokeWidth={1} />}
          </div>

          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-12 relative z-10">
            <div className="flex items-center gap-4">
              {Icon && <Icon size={16} className="text-zinc-400" />}
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Archive / {group.slug}
              </span>
            </div>

            <span className="text-[11px] font-medium text-zinc-400">
              {items.length} Total Records
            </span>
          </div>

          <div className="relative z-10">
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-100">
              {group.name}
            </h1>
            <p className="mt-8 text-2xl md:text-3xl font-light leading-snug text-zinc-500 dark:text-zinc-400 max-w-2xl tracking-tight">
              {group.description}
            </p>
          </div>
        </header>

        <StashListClient group={group} items={items} />
      </div>
    </main>
  );
}
