import { AboutBriefSection } from '@/components/sections/AboutBriefSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CurrentPositionSection } from '@/components/sections/CurrentPositionSection';
import { personalInfo } from '@/constants/site';
import { Metadata } from 'next';
import { CapabilitiesSection } from './_sections/CapabilitiesSection';
import { EducationSection } from './_sections/EducationSection';
import { WorkExperienceSection } from './_sections/WorkExperienceSection';

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      <AboutBriefSection index={0} />

      <CurrentPositionSection index={1} />

      <CapabilitiesSection index={2} />

      <WorkExperienceSection index={3} />

      <EducationSection index={4} />

      <ContactSection index={5} />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Experience',
  description: `Technical dossier and work history of ${personalInfo.name}. Specializing in legacy modernization, React, and TypeScript.`,
  openGraph: {
    title: `Experience ${personalInfo.name}`,
    description: `Technical dossier and work history of ${personalInfo.name}. Specializing in legacy modernization, React, and TypeScript.`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Experience ${personalInfo.name}`,
    description: `Technical dossier and work history of ${personalInfo.name}. Specializing in legacy modernization, React, and TypeScript.`,
  },
};
