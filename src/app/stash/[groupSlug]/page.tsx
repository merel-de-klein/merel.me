import { getStashByGroup } from '@/api/stash';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getGroupUrl } from '@/utils/nav-utils';
import { getGroupBySlug } from '@/utils/stash-utils';
import * as Icons from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import StashListClient from './_sections/StashListClient';

export default async function StashGroupPage({
  params,
}: {
  params: Promise<{ groupSlug: string }>;
}) {
  const { groupSlug } = await params;
  const group = getGroupBySlug(groupSlug);
  if (!group) notFound();

  const items = await getStashByGroup(group.id);
  const Icon = (Icons as any)[group.iconName] || Icons.HelpCircle;

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 relative">
          <div className="absolute -top-12 right-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            {Icon && <Icon size={400} strokeWidth={1} />}
          </div>

          <Breadcrumbs
            crumbs={[{ label: group.name, href: getGroupUrl(group) }]}
            icon={group.iconName}
            meta={items.length + ' Total Records'}
          />

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ groupSlug: string }>;
}): Promise<Metadata> {
  const { groupSlug } = await params;
  const group = getGroupBySlug(groupSlug);

  if (!group) {
    return {
      title: 'Stash Not Found',
      description: 'The requested stash does not exist.',
    };
  }

  const items = await getStashByGroup(group.id);
  const itemCount = items.length;

  return {
    title: `${group.name} Stash`,
    description: group.description || `Exploring the ${group.name} stash containing ${itemCount} curated items.`,
    openGraph: {
      title: `${group.name} Digital Archive`,
      description: `A curated stash of ${itemCount} entries in ${group.name}.`,
      type: 'website',
      images: items.length > 0 ? [{ url: items[0].imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${group.name} Stash`,
      description: `Browsing ${itemCount} items in ${group.name}.`,
    },
  };
}
