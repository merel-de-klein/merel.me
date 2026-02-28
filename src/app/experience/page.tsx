import { AboutBriefSection } from '@/components/sections/AboutBriefSection';
import { CurrentPositionSection } from '@/components/sections/CurrentPositionSection';
import { EducationSection } from './_sections/EducationSection';
import { WorkExperienceSection } from './_sections/WorkExperienceSection';

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      <AboutBriefSection index={0} />

      <CurrentPositionSection index={1} />

      <WorkExperienceSection index={2} />

      <EducationSection index={3} />
    </div>
  );
}
