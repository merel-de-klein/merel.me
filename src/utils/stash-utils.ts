import { STATUS_VERBS } from "@/constants/stash";
import { categories, statuses } from "@/lib/stash-data";
import { StashItem } from "@/types/stash";

export const getStashItemStatus = (item: StashItem): string => {
  const category = categories.find(c => c.id === item.categoryId);
  const status = statuses.find(s => s.id === item.statusId);

  const verb = category ? STATUS_VERBS[category.groupId]?.[item.statusId] : status?.name;

  return verb || status?.name || "Unknown";
};
