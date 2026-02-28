import { getStashItemBySlug } from '@/api/stash';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import StashImage from '@/components/StashImage';
import { getGroupUrl, getStashItemUrl } from '@/utils/nav-utils';
import * as Icons from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function StashItemPage({
  params,
}: {
  params: Promise<{ groupSlug: string; itemSlug: string }>;
}) {
  const { groupSlug, itemSlug } = await params;
  const item = await getStashItemBySlug(itemSlug);

  if (!item || item.group.slug !== groupSlug) notFound();

  const statusBgColor = item.status.color.replace('text-', 'bg-');
  const Icon = (Icons as any)[item.group.iconName] || Icons.HelpCircle;

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      <Breadcrumbs
        crumbs={[
          { label: item.group.name, href: getGroupUrl(item.group) },
          { label: item.title, href: getStashItemUrl(item) },
        ]}
        icon={item.group.iconName}
        meta={`Updated ${new Date(item.updatedAt).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        })}`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5 space-y-12">
          <div className="aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900 rounded-sm relative group">
            <StashImage src={item.imageUrl} alt={item.title} />
            {item.isFavorite && (
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 p-2 rounded-full">
                <Icons.Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="absolute -top-20 md:-top-40 -right-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <Icon size={500} strokeWidth={1} />
          </div>

          <div className="relative z-10 space-y-12">
            <div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 leading-none">
                {item.title}
              </h1>
              <div className="mt-6 text-2xl italic serif flex items-center gap-3">
                <span className="h-[2px] w-6 bg-highlight rounded-full" />
                <p className="text-highlight uppercase tracking-[0.3em]">
                  by {item.creator}
                </p>
              </div>
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">
                Archive Thoughts
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed font-light text-zinc-700 dark:text-zinc-300">
                {item.thoughts || 'No entry recorded for this item yet.'}
              </p>
            </div>

            <div className="pt-12 border-t border-zinc-100 dark:border-zinc-900">
              <table className="w-full text-left text-sm text-zinc-500">
                <tbody>
                  <tr className="border-b border-zinc-50 dark:border-zinc-950">
                    <td className="py-4 font-mono">SLUG_REFERENCE</td>
                    <td className="py-4 text-right font-mono">{item.slug}</td>
                  </tr>
                  <tr className="border-b border-zinc-50 dark:border-zinc-950">
                    <td className="py-4 font-mono">DATABASE_ID</td>
                    <td className="py-4 text-right font-mono">
                      {item.id.toString().padStart(8, '0')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-100 dark:border-zinc-900 pt-12 items-start">
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-bold">
            Category
          </h4>
          <p className="text-xl font-medium tracking-tight">
            {item.category.name}
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-bold">
            Status
          </h4>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusBgColor} opacity-75`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${statusBgColor}`}
                ></span>
              </span>

              <p className={`text-lg font-medium ${item.status.color}`}>
                {item.status.name}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-bold">
            Classification
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-tighter rounded-full border border-zinc-200/50 dark:border-zinc-700/50"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ groupSlug: string; itemSlug: string }>;
}): Promise<Metadata> {
  const { groupSlug, itemSlug } = await params;
  const item = await getStashItemBySlug(itemSlug);

  if (!item || item.group.slug !== groupSlug) {
    return {
      title: 'Item Not Found',
      robots: { index: false },
    };
  }

  return {
    title: `${item.title} | ${item.group.name} Stash`,
    description:
      item.thoughts ||
      `Viewing ${item.title} by ${item.creator} in the ${item.group.name} stash.`,
    openGraph: {
      title: item.title,
      description: `Archived entry by ${item.creator}`,
      images: [
        {
          url: item.imageUrl,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: `Viewing ${item.title} in the ${item.group.name} stash.`,
      images: [item.imageUrl],
    },
  };
}
