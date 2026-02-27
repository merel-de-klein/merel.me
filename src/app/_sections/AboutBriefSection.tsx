import { SectionHeader } from '@/components/SectionHeader';
import { personalInfo } from '@/constants/site';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutBriefSection = ({ index }: { index: number }) => {
  return (
    <section className="py-16 border-b border-border/40">
      <SectionHeader
        index={index}
        title="Biographical"
        description="The human element"
        meta={`origin.nld.${personalInfo.birthday.getFullYear()}`}
      />

      <div className="mt-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
        <div className="relative shrink-0">
          <div className="w-64 h-80 rounded-2xl overflow-hidden border border-border/60 bg-white dark:bg-zinc-900 p-2 shadow-sm">
            <div className="w-full h-full rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out relative group">
              <Image
                className="object-cover"
                src="/images/beau-and-me.jpg"
                alt="Portrait with Beau"
                fill
                priority
              />
              <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-sm shadow-xl">
            <span className="text-[8px] font-black uppercase tracking-[0.2em]">
              Lead_Subject: Merel de Klein
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-10 py-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] text-foreground/90">
                Technical Problems. <br />
                Human <span className="text-emerald-500/80">Solutions</span>.
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500/60">
                Refining the old // Engineering the new
              </p>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-medium max-w-xl">
              I live in the space where old systems meet new ideas. Based in{' '}
              {personalInfo.location} with Beau, my work is driven by a simple
              obsession: building things that are as
              <span className="text-foreground font-bold">
                {' '}
                beautiful as they are functional
              </span>
              . Whether I&apos;m modernizing legacy code at Thingiverse or
              starting from scratch, I aim for that rare balance where clean
              architecture meets a seamless user experience.
            </p>
          </div>

          <div className="pt-8 border-t border-border/20">
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div className="space-y-1">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-foreground/30">
                  Academic_Record
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-foreground/70">
                  BSc Informatica // Cum Laude
                </p>
              </div>

              <div className="space-y-1">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-foreground/30">
                  Linguistic_Profile
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-foreground/70">
                  Dutch [Native] // English [C2 / CPE Grade A]
                </p>
              </div>

              <div className="space-y-1">
                <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-foreground/30">
                  System_Flavor
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-foreground/30">
                  LOTR Enthusiast // Extended
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] hover:text-emerald-500 transition-colors"
          >
            READ_FULL_BIO
            <div className="h-8 w-8 rounded-full border border-border/60 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500/5 transition-all">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
