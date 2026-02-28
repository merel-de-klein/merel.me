export interface Group {
  id: number;
  name: string;
  slug: string;
  description: string;
  accentColor: string;
  iconName: string;  // Name of the Lucide icon for navigation
}

export interface Category {
  id: number;
  groupId: number;
  name: string;
  slug: string;
  color: string;
}

export interface Status {
  id: number;
  name: string;
  color: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface StashItem {
  id: number;
  category_id: number;
  status_id: number;
  slug: string;
  title: string;
  creator: string;
  thoughts: string;
  is_favorite?: boolean;
  image_url: string;
  updated_at: string;
}

export interface StashItemEnriched extends StashItem {
  group: Group;
  category: Category;
  tags: Tag[];
  status: Status;
}
