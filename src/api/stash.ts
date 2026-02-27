import { categories, groups, stashItems, statuses, tags } from "@/lib/stash-data";
import { Category, Group, StashItem, Status, Tag } from "@/types/stash";

export const getGroups = async (): Promise<Group[]> => groups;

export const getGroup = async (groupId: number): Promise<Group | undefined> => {
  return groups.find((g) => g.id === groupId);
};

export const getCategories = async (): Promise<Category[]> => categories;

export const getCategory = async (categoryId: number): Promise<Category | undefined> => {
  return categories.find((c) => c.id === categoryId);
};

export const getTags = async (): Promise<Tag[]> => tags;

export const resolveTags = async (tagIds: number[]): Promise<Tag[]> => {
  return tagIds
    .map((id) => tags.find((t) => t.id === id))
    .filter((tag): tag is Tag => tag !== undefined);
};

export const getStatuses = async (): Promise<Status[]> => statuses;

export const getStatus = async (statusId: number): Promise<Status | undefined> => {
  return statuses.find((s) => s.id === statusId);
};

export const getCurrentStash = async (): Promise<StashItem[]> => {
  return stashItems.filter((item) => item.statusId === 2);
}
