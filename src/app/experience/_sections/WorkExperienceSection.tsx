import { ExperienceItem } from '@/components/ExperienceItem';
import { SectionHeader } from '@/components/SectionHeader';
import { workExperience } from '@/lib/experience-data';

export const WorkExperienceSection = ({ index }: { index: number }) => {
  const professionalWork = workExperience.filter((exp) => exp.type === 'work');

  const calculateTotalYears = () => {
    if (professionalWork.length === 0) return 0;

    const allStartDates = professionalWork.flatMap((exp) =>
      exp.positions.map((pos) => new Date(pos.startedAt).getTime()),
    );

    const earliestStart = Math.min(...allStartDates);
    const msInYear = 1000 * 60 * 60 * 24 * 365.25; // Accounting for leap years

    return Math.floor((new Date().getTime() - earliestStart) / msInYear);
  };

  const totalYears = calculateTotalYears();

  const uniqueTech = Array.from(
    new Set(
      workExperience.flatMap((exp) =>
        exp.positions.flatMap((pos) => pos.stack),
      ),
    ),
  ).length;

  return (
    <section className="py-16 border-b border-border/40">
      <SectionHeader
        index={index}
        title="Deployments"
        description={`${totalYears}+ Years of Professional Engineering`}
        meta={`LOGS: ${workExperience.length} // STACK_DEPTH: ${uniqueTech}`}
      />

      <div className="mt-12 divide-y divide-border/40">
        {workExperience.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};
