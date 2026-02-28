import { CurrentMediaSection } from '@/components/sections/CurrentMediaSection';
import { AboutBriefSection } from '@/components/sections/AboutBriefSection';
import { CurrentPositionSection } from '@/components/sections/CurrentPositionSection';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
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

      <AboutBriefSection index={1} />

      <CurrentMediaSection index={2} />
    </div>
  );
}
