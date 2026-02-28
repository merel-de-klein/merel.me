'use client';

import { siteConfig } from '@/constants/site';
import { Blackbird } from '@/icons/Blackbird';
import { groups } from '@/lib/stash-data';
import { getGroupUrl } from '@/utils/nav-utils';
import { Github, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  return (
    <nav className="sticky select-none top-0 z-50 w-full border-b border-border bg-nav backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform active:scale-95"
          >
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-background shadow-md group-hover:rotate-6 transition-transform">
              <Blackbird className="w-7 h-7" />
            </div>

            <div className="flex flex-col items-start">
              <span className="font-black text-lg text-accent uppercase font-sans tracking-widest leading-none">
                Merel
              </span>
              <span className="text-base font-bold text-muted uppercase tracking-tight leading-none mt-1">
                de Klein
              </span>
            </div>
          </Link>

          <div className="hidden md:block w-[1px] h-8 bg-border" />

          <div className="hidden lg:flex items-center gap-1">
            {groups.map((group) => {
              const href = getGroupUrl(group);
              const active = isActive(href);

              return (
                <Link
                  key={group.id}
                  href={href}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    active
                      ? 'bg-accent text-background shadow-sm'
                      : 'text-muted hover:text-accent hover:bg-border/50'
                  }`}
                >
                  {group.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-4 mr-2">
            <Link
              href="/experience"
              className={`text-sm font-bold transition-colors ${
                pathname === '/experience'
                  ? 'text-accent'
                  : 'text-muted hover:text-accent'
              }`}
            >
              Experience
            </Link>

            <Link
              href="/about"
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                pathname === '/about'
                  ? 'bg-accent text-background'
                  : 'bg-border/50 text-accent hover:bg-border'
              }`}
            >
              About
            </Link>
          </div>

          <div className="w-[1px] h-6 bg-border hidden sm:block" />

          <div className="flex items-center gap-1">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent hover:bg-border/50 rounded-lg transition-all active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github size={20} strokeWidth={2} />
            </a>

            <button
              onClick={toggleTheme}
              className="relative p-2 w-9 h-9 flex items-center justify-center text-muted hover:text-accent hover:bg-border/50 rounded-lg transition-all active:scale-95 cursor-pointer"
              aria-label="Toggle Theme"
            >
              <Sun
                size={20}
                strokeWidth={2}
                className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
              <Moon
                size={20}
                strokeWidth={2}
                className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-muted hover:text-accent hover:bg-border/50 rounded-lg transition-all active:scale-95"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-20 left-0 w-full border-b border-border transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${
          isMenuOpen
            ? 'max-h-[80vh] opacity-100 bg-background/98 backdrop-blur-md'
            : 'max-h-0 opacity-0 bg-background/0 backdrop-blur-none'
        }`}
      >
        <div className="px-6 py-10 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-highlight uppercase tracking-[0.3em] mb-2 opacity-60">
              System_Modules
            </span>
            {groups.map((group) => {
              const href = getGroupUrl(group);
              const active = isActive(href);
              return (
                <Link
                  key={group.id}
                  href={href}
                  className={`text-3xl font-black uppercase tracking-tighter transition-colors ${
                    active ? 'text-highlight' : 'text-foreground/90'
                  }`}
                >
                  {group.name}
                </Link>
              );
            })}
          </div>

          <div className="h-px w-full bg-border" />

          <div className="flex flex-col gap-5">
            <span className="text-[10px] font-mono text-highlight uppercase tracking-[0.3em] opacity-60">
              Dossier_Access
            </span>
            <div className="grid grid-cols-2 gap-4">
               <Link
                href="/experience"
                className={`text-sm font-bold uppercase p-4 border border-border/60 rounded-xl text-center transition-colors ${
                  pathname === '/experience' ? 'bg-highlight text-black border-highlight' : 'bg-border/20 text-foreground'
                }`}
              >
                Experience
              </Link>
              <Link
                href="/about"
                className={`text-sm font-bold uppercase p-4 border border-border/60 rounded-xl text-center transition-colors ${
                  pathname === '/about' ? 'bg-highlight text-black border-highlight' : 'bg-border/20 text-foreground'
                }`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
