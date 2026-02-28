import { STATUS_VERBS } from '@/constants/stash';
import { categories, groups, statuses } from '@/lib/stash-data';
import { Category, Group, StashItem, Status } from '@/types/stash';

export const getStashItemStatus = (item: StashItem): string => {
  const category = categories.find((c) => c.id === item.category_id);
  const status = statuses.find((s) => s.id === item.status_id);

  const verb = category
    ? STATUS_VERBS[category.groupId]?.[item.status_id]
    : status?.name;

  return verb || status?.name || 'Unknown';
};

export const getGroupBySlug = (slug: string): Group | undefined => {
  return groups.find((g) => g.slug === slug);
};

export const getGroupById = (id: number): Group | undefined => {
  return groups.find((g) => g.id === id);
};

export const getCategoriesByGroup = (groupId: number): Category[] => {
  return categories.filter((cat) => cat.groupId === groupId);
};

export const getCategoryById = (categoryId: number): Category | undefined =>
  categories.find((cat) => cat.id === categoryId);

export const getStatusById = (statusId: number): Status | undefined =>
  statuses.find((status) => status.id === statusId);
