import { AboutBriefSection } from '@/components/sections/AboutBriefSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CurrentPositionSection } from '@/components/sections/CurrentPositionSection';
import { hiringStatus } from '@/constants/site';
import { HiringStatus } from '@/enums/hiring';
import { Layers, MapPin, Monitor, Terminal, Train } from 'lucide-react';

export default function HirePage() {
  const status = hiringStatus;
  const isLooking = status === HiringStatus.LOOKING;
  const isLocked = status === HiringStatus.UNAVAILABLE;

  const theme = {
    color: isLocked ? 'text-zinc-500' : (isLooking ? 'text-featured' : 'text-highlight'),
    border: isLocked ? 'border-zinc-800' : (isLooking ? 'border-featured/20' : 'border-highlight/20'),
    bg: isLocked ? 'bg-zinc-900/20' : (isLooking ? 'bg-featured/5' : 'bg-highlight/5'),
    label: isLocked ? 'SYSTEM_STATUS // ENCRYPTED_STABLE' : (isLooking ? 'SYSTEM_QUERY // PRIORITY_ACQUISITION' : 'SYSTEM_QUERY // HIRING_PARAMETERS'),
    cursor: isLocked ? 'bg-zinc-700 animate-none' : 'bg-current animate-pulse'
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 space-y-32">
        <header className={`max-w-3xl space-y-4 transition-all duration-1000 ${isLocked ? 'opacity-60' : 'opacity-100'}`}>
          <div className={`flex items-center gap-2 ${theme.color} opacity-60`}>
            <div className="h-[1px] w-8 bg-current" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em]">
              {theme.label}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.9]">
            {isLocked ? 'Status' : (isLooking ? 'Active' : 'Open')}
            <br />
            <span className={theme.color}>
              {isLocked ? 'Offline' : 'Inquiry'}
              <span className={`inline-block w-[0.25em] h-[0.12em] ml-2 mb-[0.1em] align-baseline ${theme.cursor}`} />
            </span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground font-medium pt-4 leading-relaxed">
            {isLocked
              ? "System is currently at capacity. Deployment protocols are restricted to existing commitments."
              : (isLooking
                  ? "Prioritizing immediate role acquisition; Open to new projects in the Randstad area."
                  : "Available for technical discussion and talent inquiries regarding high-impact frontend roles.")
            }
          </p>
        </header>

        <section className={`space-y-8 transition-opacity ${isLocked ? 'opacity-40 grayscale pointer-events-none' : 'opacity-100'}`}>
          <div className="flex justify-between items-end border-b border-border/40 pb-4">
             <div className="flex items-center gap-3 opacity-30">
              <Terminal size={14} />
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em]">
                Deployment_Parameters
              </h2>
            </div>
            {isLocked && <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">[READ_ONLY]</span>}
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-px bg-border/10 border ${theme.border} rounded-sm overflow-hidden shadow-2xl shadow-black/50`}>
            <RequirementRow
              icon={<Layers size={18} />}
              label="Engagement_Model"
              value="Long-term Product"
              desc="Deep-cycle ownership"
              themeColor={theme.color}
              isLocked={isLocked}
            />
            <RequirementRow
              icon={<MapPin size={18} />}
              label="Deployment_Zone"
              value="Randstad / Utrecht"
              desc="Localized search circuit"
              themeColor={theme.color}
              isLocked={isLocked}
            />
            <RequirementRow
              icon={<Train size={18} />}
              label="Access_Protocol"
              value="Public Transport"
              desc="NS/OV high-frequency"
              themeColor={theme.color}
              isLocked={isLocked}
            />
            <RequirementRow
              icon={<Monitor size={18} />}
              label="Primary_Stack"
              value="Frontend Arch"
              desc="React & TypeScript systems"
              themeColor={theme.color}
              isLocked={isLocked}
            />
          </div>
        </section>

        <CurrentPositionSection index={1} />

        <AboutBriefSection index={2} />

        <ContactSection index={3} />
      </div>
    </main>
  );
}

interface RowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  desc: string;
  themeColor: string;
  isLocked: boolean;
}

function RequirementRow({ icon, label, value, desc, themeColor, isLocked }: RowProps) {
  return (
    <div className={`flex items-start justify-between p-8 bg-background transition-colors ${isLocked ? 'cursor-not-allowed' : 'hover:bg-white/[0.01]'}`}>
      <div className="flex items-start gap-6">
        <div className={`${themeColor} opacity-40 transition-opacity pt-1`}>
          {icon}
        </div>
        <div className="space-y-1">
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 block">
            {label}
          </span>
          <span className={`text-sm font-bold uppercase tracking-tight block ${isLocked ? 'text-zinc-700' : 'text-foreground/90'}`}>
            {isLocked ? "REDACTED" : value}
          </span>
          <span className="text-[10px] text-muted-foreground/40 italic font-medium block">
            // {isLocked ? "ACCESS_RESTRICTED" : desc}
          </span>
        </div>
      </div>
    </div>
  );
}
