import { SectionHeader } from '@/components/SectionHeader';
import { languages, softSkills, tools } from '@/lib/experience-data';
import { Globe, Wrench, Brain } from 'lucide-react';

export const CapabilitiesSection = ({ index }: { index: number }) => {
  return (
    <section className="py-24 border-b border-border/40">
      <SectionHeader
        index={index}
        title="System_Manifest"
        description="Full-stack technical modules, communication protocols, and operational traits."
        meta="TYPE: CAPABILITIES"
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-4 space-y-8">
          <div className="flex items-center gap-3 border-b border-border/40 pb-4">
            <Globe size={16} className="text-highlight" />
            <h4 className="text-xs font-black uppercase tracking-[0.2em]">Language_Protocols</h4>
          </div>

          <div className="space-y-6">
            {languages.map((p) => (
              <div key={p.label} className="group">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-sm font-bold uppercase tracking-tight">{p.label}</span>
                  <div className="text-[10px] font-mono text-highlight bg-highlight/5 px-2 py-0.5 border border-highlight/20">
                    {p.value}
                  </div>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">
                  <span>{p.type}</span>
                  <span>AUTH: {p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/40 pb-4">
              <Wrench size={16} className="text-cyan-500" />
              <h4 className="text-xs font-black uppercase tracking-[0.2em]">Technical_Stack_&_Methods</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tools.map((t) => (
                <div key={t.category} className="space-y-2">
                  <span className="text-[9px] font-mono text-cyan-500/60 uppercase tracking-widest block">
                    {t.category}
                  </span>
                  <p className="text-xs font-bold uppercase text-foreground/80 leading-relaxed tracking-tight">
                    {t.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/40 pb-4">
              <Brain size={16} className="text-cyan-500" />
              <h4 className="text-xs font-black uppercase tracking-[0.2em]">Operational_Traits</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {softSkills.map((s) => (
                <div key={s.label} className="relative pl-4 border-l border-cyan-500/20 group hover:border-cyan-500 transition-all duration-300">
                  <span className="text-[9px] font-mono text-cyan-500/40 uppercase block mb-1 tracking-tighter">
                    {s.label}
                  </span>
                  <p className="text-xs font-medium text-muted-foreground italic leading-relaxed">
                    "{s.detail}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
