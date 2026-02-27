export const getDaysSince = (date: Date): number => {
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = now.getTime() - date.getTime();

  // Convert ms to days: ms / (1000s * 60m * 60h * 24d)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return Math.floor(diffInDays);
};
