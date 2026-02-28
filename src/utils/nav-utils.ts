import { Group, StashItemEnriched } from "@/types/stash";

export const getGroupUrl = (group: Group) => `/stash/${group.slug}`;

export const getStashItemUrl = (stash: StashItemEnriched) => getGroupUrl(stash.group) + `/${stash.slug}`;
