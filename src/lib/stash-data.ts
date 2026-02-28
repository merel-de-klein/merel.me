import { Category, Group, StashItem, Status, Tag } from "@/types/stash";

export const groups: Group[] = [
  {
    id: 1,
    name: 'Gaming',
    slug: 'gaming',
    description: 'Video games on a variety of consoles, or good old-fashioned board games.',
    accentColor: 'text-red-500',
    iconName: 'Gamepad2'
  },
  {
    id: 2,
    name: 'Reading',
    slug: 'reading',
    description: 'Working my way through the ever growing pile of paper in my house.',
    accentColor: 'text-emerald-500',
    iconName: 'BookOpenText'
  },
  {
    id: 3,
    name: 'Hobbies',
    slug: 'hobbies',
    description: 'The "everything else" bin. Mechanical keyboards, tech peripherals, and whatever project I\'m currently hyper-focusing on.',
    accentColor: 'text-slate-400',
    iconName: 'Wrench'
  },
  {
    id: 4,
    name: 'Video',
    slug: 'video',
    description: 'A collection of blu-rays and dvds, to protect against steaming services. (and a digital collection I definitely did not pirate)',
    accentColor: 'text-indigo-500',
    iconName: 'Film'
  },
  {
    id: 5,
    name: 'Music',
    slug: 'music',
    description: 'Tunes to write code to.',
    accentColor: 'text-zinc-400',
    iconName: 'Disc3'
  },
];

export const categories: Category[] = [
  { id: 10, groupId: 1, name: 'DS', slug: 'ds', color: 'bg-red-600' },
  { id: 11, groupId: 1, name: '3DS', slug: '3ds', color: 'bg-red-500' },
  { id: 12, groupId: 1, name: 'Switch', slug: 'switch', color: 'bg-red-400' },
  { id: 20, groupId: 1, name: 'PS4', slug: 'ps4', color: 'bg-blue-700' },
  { id: 21, groupId: 1, name: 'PS5', slug: 'ps5', color: 'bg-blue-600' },
  { id: 22, groupId: 1, name: 'Board Game', slug: 'board-game', color: 'bg-amber-500' },

  { id: 30, groupId: 2, name: 'Book', slug: 'books', color: 'bg-emerald-600' },

  { id: 40, groupId: 3, name: 'Tech', slug: 'tech', color: 'bg-slate-800' },

  { id: 50, groupId: 4, name: 'Blu-ray', slug: 'blu-ray', color: 'bg-indigo-600' },
  { id: 51, groupId: 4, name: 'DVD', slug: 'dvd', color: 'bg-violet-500' },

  { id: 52, groupId: 5, name: 'Vinyl', slug: 'vinyl', color: 'bg-zinc-900' },
];

export const statuses: Status[] = [
  { id: 1, name: 'Backlog', color: 'text-slate-400' },
  { id: 2, name: 'In Progress', color: 'text-amber-500' },
  { id: 3, name: 'Completed', color: 'text-emerald-500' },
];
