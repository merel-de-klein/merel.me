import { hiringStatus } from '@/constants/site';
import { HiringStatus } from '@/enums/hiring';
import { MessageSquare, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export const HiringStatusSection = () => {
  const status = hiringStatus;
  if (status === HiringStatus.UNAVAILABLE) return null;

  const isLooking = status === HiringStatus.LOOKING;

  const theme = isLooking
    ? {
        border: 'border-featured/20',
        bg: 'bg-featured/[0.03]',
        text: 'text-featured',
        label: 'LOOKING // ACTIVE_SEARCH',
        subtext:
          'Prioritizing immediate role acquisition; Open to new projects',
        btnLabel: 'View_Requirements',
        btn: 'bg-featured text-white shadow-[0_0_20px_rgba(var(--featured-rgb),0.3)]',
        icon: (
          <Target
            size={14}
            className="group-hover:rotate-90 transition-transform duration-500"
          />
        ),
        ping: 'bg-featured',
      }
    : {
        border: 'border-highlight/20',
        bg: 'bg-highlight/[0.03]',
        text: 'text-highlight',
        label: 'OPEN // RECRUITER_FRIENDLY',
        subtext: 'Open to engineering & talent inquiries',
        btnLabel: 'Start_Conversation',
        btn: 'bg-highlight text-black shadow-[0_0_20px_rgba(var(--highlight-rgb),0.2)]',
        icon: (
          <MessageSquare
            size={14}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        ),
        ping: 'bg-highlight',
      };

  return (
    <section
      className={`sticky top-20 z-40 w-full border-b backdrop-blur-md overflow-hidden transition-all duration-500 ${theme.border} ${theme.bg} ${theme.text}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 sm:py-2.5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.ping}`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${theme.ping}`}
              ></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
              {theme.label}
            </span>
          </div>

          <div className="hidden sm:block h-3 w-px bg-current opacity-20" />

          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-tight opacity-70 italic">
            {theme.subtext}
          </p>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="hidden lg:flex items-center gap-2 opacity-40">
            <Zap size={10} />
            <span className="text-[9px] font-black uppercase tracking-tighter">
              Remote_Protocol
            </span>
          </div>

          <Link
            href="/hire"
            className={`group relative text-[10px] font-black uppercase tracking-tighter px-4 py-1.5 rounded-sm transition-all active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto ${theme.btn}`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {theme.btnLabel}
              {theme.icon}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
