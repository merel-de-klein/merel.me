import { StashItem, StashItemEnriched } from "@/types/stash";
import { getCategoriesByGroup, getCategoryById, getGroupById, getStatusById } from "@/utils/stash-utils";
import { supabase } from "@/utils/suprabase";
import { unstable_cache } from "next/cache";

const enrichStashItem = (item: StashItem): Omit<StashItemEnriched, 'tags'>|undefined => {
  const category = getCategoryById(item.category_id);
  const group = getGroupById(category?.groupId || 0);
  const status = getStatusById(item.status_id);

  if (!category || !group || !status) return;

  return {
    ...item,
    group,
    category,
    status,
  };
};

export const getCurrentStash = unstable_cache(
  async (): Promise<StashItemEnriched[]> => {
    const { data, error } = await supabase
      .from('stash_items')
      .select('*, tags(id, name)')
      .eq('status_id', 2)
      .order('updated_at', { ascending: false });

    if (error || !data) {
      console.error('Supabase error:', error);
      return [];
    }

    return data.reduce((acc: StashItemEnriched[], item) => {
      const enrichedBase = enrichStashItem(item);

      if (enrichedBase) {
        acc.push({
          ...enrichedBase,
          tags: item.tags || []
        } as StashItemEnriched);
      }

      return acc;
    }, []);
  },
  ['current-stash'],
  { revalidate: 3600, tags: ['stash'] }
);

export const getStashItemBySlug = async (slug: string): Promise<StashItemEnriched | undefined> => {
  const fetchItem = unstable_cache(
    async (s: string) => {
      const { data, error } = await supabase
        .from('stash_items')
        .select(`
          *,
          tags ( id, name )
        `)
        .eq('slug', s)
        .single();

      if (error || !data) {
        console.error('Supabase error:', error);
        return undefined;
      }

      const enrichedBase = enrichStashItem(data);
      if (!enrichedBase) return undefined;

      return {
        ...enrichedBase,
        tags: data.tags || [],
      } as StashItemEnriched;
    },
    [`stash-item-${slug}`],
    {
      revalidate: 3600,
      tags: ['stash', `stash-item-${slug}`]
    }
  );

  return fetchItem(slug);
};


export const getStashByGroup = async (groupId: number): Promise<StashItemEnriched[]> => {
  const categories = getCategoriesByGroup(groupId);
  const categoryIds = categories .map((c) => c.id);

  if (categoryIds.length === 0) return [];

  const fetchGroupData = unstable_cache(
    async (ids: number[]) => {
      const { data, error } = await supabase
        .from('stash_items')
        .select('*, tags(id, name)')
        .in('category_id', ids)
        .order('id', { ascending: true });

      if (error || !data) {
        console.error('Supabase error:', error);
        return [];
      }

      return data.reduce((acc: StashItemEnriched[], item) => {
        const enrichedBase = enrichStashItem(item);
        if (enrichedBase) {
          acc.push({
            ...enrichedBase,
            tags: item.tags || []
          } as StashItemEnriched);
        }
        return acc;
      }, []);
    },
    [`stash-group-${groupId}`], // Cache Key
    {
      revalidate: 3600,
      tags: ['stash', `group-${groupId}`]
    }
  );

  return fetchGroupData(categoryIds);
};
