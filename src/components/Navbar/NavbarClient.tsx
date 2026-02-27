'use client';

import { siteConfig } from '@/constants/site';
import { Blackbird } from '@/icons/Blackbird';
import { Group } from '@/types/stash';
import { Github, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavbarClient = ({ groups }: { groups: Group[] }) => {
  const pathname = usePathname();

  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  return (
    <nav className="sticky select-none top-0 z-50 w-full border-b border-slate-200 bg-white/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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

          <div className="hidden md:block w-[1px] h-8 bg-slate-200" />

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

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-4 mr-2">
            <Link
              href="/experience"
              className={`text-sm font-bold transition-colors ${
                pathname === '/experience'
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Experience
            </Link>

            <Link
              href="/about"
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                pathname === '/about'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              About
            </Link>
          </div>

          <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-1">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github size={20} strokeWidth={2} />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 w-9 h-9 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg active:scale-95 cursor-pointer"
              aria-label="Toggle Theme"
            >
              <Sun
                size={20}
                strokeWidth={2}
                className="absolute scale-0 dark:scale-100 transition-transform duration-200"
              />
              <Moon
                size={20}
                strokeWidth={2}
                className="scale-100 dark:scale-0 transition-transform duration-200"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
