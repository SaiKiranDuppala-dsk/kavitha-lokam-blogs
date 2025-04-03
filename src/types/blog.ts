
export interface Genre {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  genre: Genre;
  coverImage: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
