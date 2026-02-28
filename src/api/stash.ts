import { stashItems, tags } from "@/lib/stash-data";
import { StashItem, StashItemEnriched, Tag } from "@/types/stash";
import { getCategoriesByGroup, getCategoryById, getGroupById, getStatusById } from "@/utils/stash-utils";

export const getTags = async (): Promise<Tag[]> => tags;

export const resolveTags = async (tagIds: number[]): Promise<Tag[]> => {
  return tagIds
    .map((id) => tags.find((t) => t.id === id))
    .filter((tag): tag is Tag => tag !== undefined);
};

const enrichStashItem = async (item: StashItem): Promise<StashItemEnriched|undefined> => {
  const category = getCategoryById(item.categoryId);
  const group = getGroupById(category?.groupId || 0);
  const status = getStatusById(item.statusId);

  if (!category || !group || !status) return;

  const tags = await resolveTags(item.tagIds);

  return {
    ...item,
    group,
    category,
    status,
    tags,
  };
};

export const getStashItemBySlug = async (slug: string): Promise<StashItemEnriched|undefined> => {
  const item = stashItems.find((i) => i.slug === slug);
  return item ? enrichStashItem(item) : undefined;
};

export const getCurrentStash = async (): Promise<StashItemEnriched[]> => {
  const items = stashItems.filter((item) => item.statusId === 2);
  const itemPromises = items.map(enrichStashItem);
  const results = await Promise.all(itemPromises);

  return results.filter((item) => item !== undefined);
}

export const getStashByGroup = async (groupId: number): Promise<StashItemEnriched[]> => {
  const categories = getCategoriesByGroup(groupId);
  const categoryIds = new Set(categories.map((category) => category.id));

  const filteredSortedItems = stashItems
    .filter(item => categoryIds.has(item.categoryId))
    .sort((a, b) => a.id - b.id);

  const itemPromises = filteredSortedItems.map(enrichStashItem);
  const results = await Promise.all(itemPromises);

  return results.filter((item) => item !== undefined);
}
