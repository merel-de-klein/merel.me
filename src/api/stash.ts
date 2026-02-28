import { stashItems, statuses, tags } from "@/lib/stash-data";
import { StashItem, StashItemEnriched, Tag } from "@/types/stash";
import { getCategoriesByGroup, getGroupById } from "@/utils/stash-utils";

export const getTags = async (): Promise<Tag[]> => tags;

export const resolveTags = async (tagIds: number[]): Promise<Tag[]> => {
  return tagIds
    .map((id) => tags.find((t) => t.id === id))
    .filter((tag): tag is Tag => tag !== undefined);
};

export const getCurrentStash = async (): Promise<StashItem[]> => {
  return stashItems.filter((item) => item.statusId === 2);
}

export const getStashByGroup = async (groupId: number): Promise<StashItemEnriched[]> => {
  const categories = getCategoriesByGroup(groupId);
  const categoryIds = new Set(categories.map((category) => category.id));

  const filteredSortedItems = stashItems
    .filter(item => categoryIds.has(item.categoryId))
    .sort((a, b) => a.id - b.id); // Ascending order

  const itemPromises = filteredSortedItems.map<Promise<StashItemEnriched>>(async (item) => ({
    ...item,
    group: getGroupById(groupId)!,
    category: categories.find(c => c.id === item.categoryId)!,
    status: statuses.find(s => s.id === item.statusId)!,
    tags: await resolveTags(item.tagIds)
  }));

  return Promise.all(itemPromises);
}
