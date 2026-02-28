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
  categoryId: number;
  statusId: number;
  slug: string;
  title: string;
  creator: string;
  thoughts: string;
  isFavorite?: boolean;
  imageUrl: string;
  tags: number[];
  itemTags?: Tag[];
}
