import { getCurrentStash } from '@/api/stash';
import { StashItemList } from '@/components/StashItemList';
import { SectionHeader } from '@/components/SectionHeader';

export const CurrentMediaSection = async ({ index }: { index: number }) => {
  const items = await getCurrentStash();
  return (
    <section className="space-y-8">
      <SectionHeader
        index={index}
        title="Media in Progress"
        description="( Literature • Interactive • Audio • Visual )"
        meta={
          items.length
            ? `${items.length} active ${
                items.length === 1 ? 'entry' : 'entries'
              }`
            : undefined
        }
      />
      <StashItemList index={index} items={items} />
    </section>
  );
};
