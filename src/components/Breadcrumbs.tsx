import { Blackbird } from '@/icons/Blackbird';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react/jsx-runtime';

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
  icon?: string; // Should match the name of a lucide icon
  meta?: string;
}

export const Breadcrumbs = ({
  crumbs,
  icon: iconName,
  meta,
}: BreadcrumbsProps) => {
  const Icon = (Icons as any)[iconName || ''] || Blackbird;

  return (
    <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-12 relative z-10">
      <div className="flex items-center gap-4">
        {Icon && <Icon size={16} className="text-zinc-400" />}
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          Archive
          {crumbs.map((crumb, index) => (
            <Fragment key={index}>
              <span className="mx-2 opacity-30">/</span>
              <Link
                className="hover:text-highlight transition-colors"
                href={crumb.href}
              >
                {crumb.label}
              </Link>
            </Fragment>
          ))}
        </span>
      </div>

      {meta && (
        <span className="text-[11px] font-medium text-zinc-400">{meta}</span>
      )}
    </div>
  );
};
