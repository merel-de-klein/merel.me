import { groups, categories, tags, statuses } from '@/lib/stash-data';
import { Group, Category, Tag, Status } from '@/types/stash';

export const getGroups = (): Group[] => groups;

export const getGroup = (groupId: number): Group | undefined => {
  return groups.find((g) => g.id === groupId);
};

export const getCategories = (): Category[] => categories;

export const getCategory = (categoryId: number): Category | undefined => {
  return categories.find((c) => c.id === categoryId);
};

export const getTags = (): Tag[] => tags;

export const resolveTags = (tagIds: number[]): Tag[] => {
  return tagIds
    .map((id) => tags.find((t) => t.id === id))
    .filter((tag): tag is Tag => tag !== undefined);
};

export const getStatuses = (): Status[] => statuses;

export const getStatus = (statusId: number): Status | undefined => {
  return statuses.find((s) => s.id === statusId);
};
