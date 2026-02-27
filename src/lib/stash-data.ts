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
    creator: 'Intelligent Systems',
    thoughts: 'A masterclass in tactical RPG design. The pairing system is broken, but the characters are unforgettable.',
    isFavorite: true,
    tags: [1, 100, 104, 203],
    imageUrl: '/images/fire-emblem.jpg',
  },
  {
    id: 2,
    categoryId: 11,
    statusId: 2,
    slug: 'professor-layton-and-the-miracle-mask',
    title: 'Professor Layton and the Miracle Mask',
    creator: 'Level-5',
    thoughts: 'The transition to 3D models was jarring at first, but the puzzle design is as sharp as ever.',
    isFavorite: true,
    tags: [3, 101, 200, 205],
    imageUrl: '/images/layton-miracle-mask.jpg',
  },
  {
    id: 3,
    categoryId: 30,
    statusId: 2,
    slug: 'the-dispossessed',
    title: 'The Dispossessed',
    creator: 'Ursula K. Le Guin',
    thoughts: 'An incredible examination of anarcho-syndicalism vs. capitalism. Very dense but rewarding.',
    isFavorite: true,
    tags: [106, 107],
    imageUrl: '/images/dispossessed.jpg',
  },
  {
    id: 4,
    categoryId: 52,
    statusId: 3,
    slug: 'in-rainbows-vinyl',
    title: 'In Rainbows',
    creator: 'Radiohead',
    thoughts: 'The quintessential late-night spin. "Nude" sounds incredible on this pressing.',
    isFavorite: true,
    tags: [202, 205],
    imageUrl: '/images/in-rainbows.jpg',
  },
  {
    id: 5,
    categoryId: 12,
    statusId: 1,
    slug: 'metroid-dread',
    title: 'Metroid Dread',
    creator: 'MercurySteam',
    thoughts: 'Waiting for a rainy weekend to dive into this one properly.',
    isFavorite: false,
    tags: [103, 201],
    imageUrl: '/images/metroid-dread.jpg',
  },
  {
    id: 6,
    categoryId: 50,
    statusId: 3,
    slug: 'spirited-away-bluray',
    title: 'Spirited Away',
    creator: 'Studio Ghibli',
    thoughts: 'Visual perfection. Every frame is a painting. A staple of the permanent collection.',
    isFavorite: true,
    tags: [5, 202, 203],
    imageUrl: '/images/spirited-away.jpg',
  },
  {
    id: 7,
    categoryId: 22,
    statusId: 2,
    slug: 'root-board-game',
    title: 'Root',
    creator: 'Leder Games',
    thoughts: 'Learning the rules for the Woodland Alliance. The asymmetrical mechanics are fascinating.',
    isFavorite: false,
    tags: [100, 201],
    imageUrl: '/images/root.jpg',
  },
  {
    id: 8,
    categoryId: 40,
    statusId: 2,
    slug: 'crkd-nitro-deck',
    title: 'CRKD Nitro Deck',
    creator: 'CRKD',
    thoughts: 'Testing out the hall effect sensors. Makes the Switch feel like a proper professional handheld.',
    isFavorite: false,
    tags: [105],
    imageUrl: '/images/nitro-deck.jpg',
  },
  {
    id: 9,
    categoryId: 21,
    statusId: 1,
    slug: 'elden-ring',
    title: 'Elden Ring: Shadow of the Erdtree',
    creator: 'FromSoftware',
    thoughts: 'I know I am going to die repeatedly, and I am mentally preparing for the task.',
    isFavorite: false,
    tags: [102, 201, 203],
    imageUrl: '/images/elden-ring.jpg',
  },
  {
    id: 10,
    categoryId: 10,
    statusId: 3,
    slug: 'pokemon-platinum',
    title: 'Pokémon Platinum',
    creator: 'Game Freak',
    thoughts: 'The definitive Sinnoh experience. Replaying this for the pure nostalgia of the underground.',
    isFavorite: true,
    tags: [2, 102, 202],
    imageUrl: '/images/pokemon-platinum.jpg',
  }
];
