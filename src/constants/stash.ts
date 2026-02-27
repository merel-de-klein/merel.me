export const STATUS_VERBS: Record<number, Record<number, string>> = {
  1: { 1: 'Queued', 2: 'Playing', 3: 'Finished' },      // Gaming
  2: { 1: 'To Read', 2: 'Reading', 3: 'Finished' },     // Reading
  3: { 1: 'Stock', 2: 'Tinkering', 3: 'Mastered' },     // Hobbies/Tech
  4: { 1: 'Watchlist', 2: 'Viewing', 3: 'Watched' },    // Video
  5: { 1: 'Wishlist', 2: 'Listening', 3: 'Collected' }, // Music
};
