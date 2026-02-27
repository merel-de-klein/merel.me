import { stashItems, tags } from "@/lib/stash-data";
import { StashItem, Tag } from "@/types/stash";

export const getTags = async (): Promise<Tag[]> => tags;

export const resolveTags = async (tagIds: number[]): Promise<Tag[]> => {
  return tagIds
    .map((id) => tags.find((t) => t.id === id))
    .filter((tag): tag is Tag => tag !== undefined);
};

export const getCurrentStash = async (): Promise<StashItem[]> => {
  return stashItems.filter((item) => item.statusId === 2);
}
