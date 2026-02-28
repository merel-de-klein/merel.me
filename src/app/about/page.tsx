import { ContactSection } from '@/components/sections/ContactSection';
import { CurrentMediaSection } from '@/components/sections/CurrentMediaSection';
import { CurrentPositionSection } from '@/components/sections/CurrentPositionSection';
import { personalInfo } from '@/constants/site';
import Image from 'next/image';

export default function AboutPage() {
  const calculateAge = (birthday: Date) => {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const subjectAge = calculateAge(personalInfo.birthday);

  return (
    <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">

      {/* 01: BIOGRAPHICAL LOG */}
      <section className="relative">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Portrait & Identity Column */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div className="relative group">
               <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border/40 bg-zinc-900 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="/images/beau-and-me.jpg"
                    alt="Merel and Beau"
                    fill
                    className="object-cover"
                    priority
                  />
               </div>
               <div className="absolute -bottom-4 -left-4 bg-highlight text-black px-4 py-2 font-mono text-[10px] font-black uppercase tracking-widest shadow-2xl">
                 LEAD_SUBJECT: {personalInfo.name.toUpperCase()}
               </div>
            </div>

            {/* System Stats */}
            <div className="space-y-4 px-2">
               <div className="flex items-center justify-between border-b border-border/20 pb-2">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase">Base_Origin</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {personalInfo.location}_{personalInfo.country}
                  </span>
               </div>
               <div className="flex items-center justify-between border-b border-border/20 pb-2">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase">Companion</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Beau [Beagle/Corgi]
                  </span>
               </div>
               <div className="flex items-center justify-between border-b border-border/20 pb-2">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase">Subject_Age</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{subjectAge}_Years</span>
               </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="flex-1 space-y-12 lg:pt-4">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-foreground/90">
                  Technical Problems. <br />
                  Human <span className="text-highlight">Solutions</span>.
                </h1>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-highlight/60">
                  Refining the old // Engineering the new
                </p>
              </div>
            </div>

            <div className="space-y-8 text-muted-foreground font-medium leading-relaxed max-w-2xl text-sm md:text-base">
              <p>
                I am a driven developer with a deep-seated passion for the frontend. I live for projects that
                demand a balance between <span className="text-foreground">aesthetic precision</span> and
                <span className="text-foreground"> intuitive usability</span>. Working within tight-knit teams,
                I focus on delivering efficient code and creative solutions that bridge the gap between
                complex logic and the end user.
              </p>

              <p>
                My technical background is rooted in varied environments. I've navigated the "archaeology"
                of <span className="text-foreground font-bold italic">10+ years of undocumented legacy systems</span> and
                engineered solutions using <span className="text-foreground font-bold">specialized in-house programming languages</span>. I don't shy away from
                technical debt or architectural challenges—I view them as puzzles to be solved.
              </p>

              <p>
                Outside of work, I live in a small house in the historic center of{" "}
                <strong>{personalInfo.location}</strong>. My downtime is spent reading, gaming, or
                walking with Beau. And, as a true detail-oriented enthusiast, I maintain a
                strict tradition of watching the full{" "}
                <span className="text-foreground italic">Lord of the Rings</span> trilogy{" "}
                <span className="text-[10px] font-mono text-highlight/60">
                   // Extended_Edition_Only
                </span>{" "}
                at least once a year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02: FIELD LOGS GALLERY */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-highlight">Visual_Archive</h3>
          <div className="h-[1px] flex-1 bg-border/20" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square relative rounded-xl overflow-hidden border border-border/40 grayscale hover:grayscale-0 transition-all duration-500 group">
            <Image src="/images/london-comics.jpg" alt="Mega City Comics" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>

          <div className="aspect-square relative rounded-xl overflow-hidden border border-border/40 grayscale hover:grayscale-0 transition-all duration-500 group">
            <Image src="/images/london-underpass.jpg" alt="London Underpass" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>

          <div className="aspect-square relative rounded-xl overflow-hidden border border-border/40 grayscale hover:grayscale-0 transition-all duration-500 group">
            <Image src="/images/beau-close-up.jpg" alt="Beau Portrait" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>

          <div className="aspect-square relative rounded-xl overflow-hidden border border-border/40 grayscale hover:grayscale-0 transition-all duration-500 group">
            <Image src="/images/big-burger.jpg" alt="Birthday Burger" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>
      </section>

      <CurrentMediaSection index={1} />

      <CurrentPositionSection index={2} />

      <ContactSection index={3} />
    </main>
  );
}
