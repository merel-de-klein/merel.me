import { categories, stashItems, statuses, tags } from "@/lib/stash-data";
import { StashItem, Tag } from "@/types/stash";
import { getCategoriesByGroup } from "@/utils/stash-utils";

export const getTags = async (): Promise<Tag[]> => tags;

export const resolveTags = async (tagIds: number[]): Promise<Tag[]> => {
  return tagIds
    .map((id) => tags.find((t) => t.id === id))
    .filter((tag): tag is Tag => tag !== undefined);
};

export const getCurrentStash = async (): Promise<StashItem[]> => {
  return stashItems.filter((item) => item.statusId === 2);
}

export const getStashByGroup = async (groupId: number): Promise<StashItem[]> => {
  const categories = getCategoriesByGroup(groupId);
  const categoryIds = new Set(categories.map((category) => category.id));

  const filteredSortedItems = stashItems
    .filter(item => categoryIds.has(item.categoryId))
    .sort((a, b) => a.id - b.id); // Ascending order

  const itemPromises = filteredSortedItems.map(async (item) => ({
    ...item,
    category: categories.find(c => c.id === item.categoryId),
    status: statuses.find(s => s.id === item.statusId),
    itemTags: await resolveTags(item.tags)
  }));

  return Promise.all(itemPromises);
}
