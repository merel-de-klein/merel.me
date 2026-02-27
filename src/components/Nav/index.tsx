import { getGroups } from '@/api/stash';
import { NavbarClient } from './NavbarClient';

export const Navbar = async () => {
  const groups = await getGroups(); // Direct server access
  return <NavbarClient groups={groups} />;
};
