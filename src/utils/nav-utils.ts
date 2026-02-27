import { Group } from "@/types/stash";

export const getGroupUrl = (group: Group) => `/stash/${group.slug}`;
