import { SectionHeader } from '@/components/SectionHeader';
import { EducationItem } from '@/components/EducationItem';
import { educationHistory } from '@/lib/experience-data';

export const EducationSection = ({ index }: { index: number }) => {
  const degreeCount = educationHistory.filter(ed => ed.type === 'degree').length;
  const certCount = educationHistory.filter(ed => ed.type === 'certification').length;

  const primaryDegree = educationHistory.find(ed => ed.id === 'hu-bachelor');

  return (
    <section className="py-16 border-b border-border/40">
      <SectionHeader
        index={index}
        title="Knowledge_Base"
        description={primaryDegree ? `${primaryDegree.degree} // Cum Laude` : "Academic Foundation"}
        meta={`DEGREES: ${degreeCount} // CERTS: ${certCount}`}
      />

      <div className="mt-12 divide-y divide-border/40">
        {educationHistory.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
