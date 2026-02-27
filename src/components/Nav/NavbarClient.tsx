'use client';

import { Blackbird } from '@/icons/Blackbird';
import { Group } from '@/types/stash';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavbarClient = ({ groups }: { groups: Group[] }) => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  return (
    <nav className="sticky select-none top-0 z-50 w-full border-b border-slate-200 bg-white/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LEFT: LOGO & COLLECTION FILTERS */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform active:scale-95"
          >
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:rotate-6 transition-transform">
              <Blackbird className="w-7 h-7" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-black text-lg text-slate-900 uppercase font-sans tracking-widest leading-none">
                Merel
              </span>
              <span className="text-base font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight leading-none">
                de Klein
              </span>
            </div>
          </Link>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] h-8 bg-slate-200" />

          {/* Collection Filters (Dynamic Groups) */}
          <div className="hidden lg:flex items-center gap-1">
            {groups.map((group) => {
              const href = `/stash/${group.slug}`;
              const active = isActive(href);

              return (
                <Link
                  key={group.id}
                  href={href}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    active
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {group.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT: PORTFOLIO PAGES */}
        <div className="flex items-center gap-6">
          <Link
            href="/experience"
            className={`text-sm font-bold transition-colors ${
              isActive('/experience')
                ? 'text-slate-900'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Experience
          </Link>
          <Link
            href="/about"
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 ${
              isActive('/about')
                ? 'bg-slate-900 text-white shadow-md' // Matches the "Active" feel of your filters
                : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
