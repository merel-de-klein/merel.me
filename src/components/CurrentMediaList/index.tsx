import { getCurrentStash } from '@/api/stash';
import { CurrentMediaListClient } from './CurrentMediaListClient';

export const CurrentMediaList = async () => {
  const items = await getCurrentStash();
  return <CurrentMediaListClient items={items} />;
};
