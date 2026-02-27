import { Category, Group, StashItem, Status, Tag } from "@/types/stash";

export const groups: Group[] = [
  { id: 1, name: 'Gaming', slug: 'gaming' },
  { id: 2, name: 'Reading', slug: 'reading' },
  { id: 3, name: 'Hobbies', slug: 'hobbies' },
  { id: 4, name: 'Video', slug: 'video' },
  { id: 5, name: 'Music', slug: 'music' },
];

export const categories: Category[] = [
  { id: 10, groupId: 1, name: 'DS', slug: 'ds', color: 'bg-red-600' },
  { id: 11, groupId: 1, name: '3DS', slug: '3ds', color: 'bg-red-500' },
  { id: 12, groupId: 1, name: 'Switch', slug: 'switch', color: 'bg-red-400' },
  { id: 20, groupId: 1, name: 'PS4', slug: 'ps4', color: 'bg-blue-700' },
  { id: 21, groupId: 1, name: 'PS5', slug: 'ps5', color: 'bg-blue-600' },

  { id: 30, groupId: 2, name: 'Book', slug: 'books', color: 'bg-emerald-600' },

  { id: 31, groupId: 3, name: 'Board Game', slug: 'board-game', color: 'bg-amber-500' },
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

export const tags: Tag[] = [
  // Franchises (1-99)
  { id: 1, name: 'Fire Emblem' },
  { id: 2, name: 'Pokémon' },
  { id: 3, name: 'Professor Layton' },
  { id: 4, name: 'Legend of Zelda' },
  { id: 5, name: 'Studio Ghibli' },

  // Genres / Mechanics (100-199)
  { id: 100, name: 'Strategy' },
  { id: 101, name: 'Puzzle' },
  { id: 102, name: 'RPG' },
  { id: 103, name: 'Platformer' },
  { id: 104, name: 'Turn-Based' },
  { id: 105, name: 'Simulation' },
  { id: 106, name: 'Non-Fiction' },
  { id: 107, name: 'Fantasy' },

  // "Vibe" Tags (200-299)
  { id: 200, name: 'Cozy' },
  { id: 201, name: 'Challenging' },
  { id: 202, name: 'Nostalgic' },
  { id: 203, name: 'Masterpiece' },
  { id: 204, name: 'Hidden Gem' },
  { id: 205, name: 'Relaxing' },
];

export const stashItems: StashItem[] = [
  {
    id: 1,
    categoryId: 11,
    statusId: 3,
    slug: 'fire-emblem-awakening',
    title: 'Fire Emblem: Awakening',
    thoughts: 'A classic I keep returning to. The soundtrack is amazing!',
    isFavorite: true,
    tags: [1, 100, 104, 203],
    imageUrl: '/images/fire-emblem.jpg',
  },
];
