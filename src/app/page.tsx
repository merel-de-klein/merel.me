import { CurrentMediaSection } from '@/app/_sections/CurrentMediaSection';
import { SectionHeader } from '@/components/SectionHeader';
import { getDaysSince } from '@/utils/date-utils';
import { ArrowUpRight } from 'lucide-react';
import { CurrentPositionSection } from './_sections/CurrentPositionSection';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      <section className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-accent uppercase tracking-tighter leading-[0.9]">
          Frontend Dev <br />
          <span className="opacity-30">&</span> Media Enthusiast
        </h1>
        <p className="mt-6 text-lg text-muted font-medium max-w-xl">
          Building interfaces by day and curating a library of experiences by
          night. This is my personal archive of everything I'm consuming and
          creating.
        </p>
      </section>

      <CurrentPositionSection index={0} />

      <CurrentMediaSection index={1} />
    </main>
  );
}
